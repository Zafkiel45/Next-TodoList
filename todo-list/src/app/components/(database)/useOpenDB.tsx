"use client";
import { useEffect } from "react";
// atoms 
import { useSetAtom } from "jotai";
import { tasksStateAtom } from "@/app/(atoms)/(tasks)/tasks-atoms";

export const useIndexedDB = (storeName: string, dbName: string) => {

  const setTasksState = useSetAtom(tasksStateAtom);

  useEffect(() => {
    const request = indexedDB.open(dbName, 1);

    request.onupgradeneeded = (currentTarget) => {
      const currentDB = (currentTarget.target as IDBOpenDBRequest).result;

      request.onsuccess = () => {
        console.log("o banco de dados foi aberto corretamente!");
      };
      request.onerror = () => {
        throw new Error("ocorreu um erro ao abrir o banco de dados!");
      };

      const objectStore = currentDB.createObjectStore(storeName, {
        keyPath: "id",
        autoIncrement: true,
      });

      objectStore.createIndex("title", "title", { unique: true });
      objectStore.createIndex("type", "type", {unique: false}); 
      objectStore.createIndex("color", "color", {unique: false});
    };

    request.onsuccess = () => {
      const database: IDBDatabase = request.result;
      const transaction: IDBTransaction = database.transaction("tasks");
      const objectStore: IDBObjectStore = transaction.objectStore("tasks");
      const currentObjects = []

      objectStore.openCursor().onsuccess = (event) => {
        const cursor: IDBCursorWithValue | null = (event.target as IDBRequest)
          .result;

        if (cursor) {
          currentObjects.push(cursor.value);
          cursor.continue();
        } else {
          console.log("don't more entries!");
          setTasksState(currentObjects);
        }
      };
    };
  }, [dbName, storeName]);
};
