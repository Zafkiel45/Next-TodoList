'use client'
import { SetStateAction } from "react";

export const UpdateDB = (
    setTask: { (value: SetStateAction<any[]>): void; (arg0: any[]): void },
    setName?: { (value: SetStateAction<string>): void; (arg0: string): void },
    setDescrebe?: { (value: SetStateAction<string>): void; (arg0: string): void },
) => {
  const request: IDBOpenDBRequest = indexedDB.open("database");

  request.onsuccess = () => {
    const database: IDBDatabase = request.result;
    const transaction: IDBTransaction = database.transaction("tasks");
    const store: IDBObjectStore = transaction.objectStore("tasks");
    const currentObject = [];

    store.openCursor().onsuccess = (event) => {
      const cursor: IDBCursorWithValue = (event.target as IDBRequest).result;

      if (cursor) {
        currentObject.push(cursor.value);
        cursor.continue();
      } else {
        console.log("updateDB working!");
        setTask(currentObject);

        if(setName) {
          setName("");
        }

        if(setDescrebe) {
          setDescrebe("")
        }
        
      }
    };
  };

  request.onerror = () => {
    console.log("updateDB isn't working!");
  };
};
