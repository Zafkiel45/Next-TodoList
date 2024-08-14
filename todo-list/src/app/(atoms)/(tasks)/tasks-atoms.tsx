'use client';
import { atom } from "jotai";

export const tasksStateAtom = atom<any[]>([]);
export const tasksIndexStateAtom = atom<number>(0);