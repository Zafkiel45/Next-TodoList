'use client';
import { atom } from "jotai";

export const tasksStateAtom = atom<any[]>([]);
export const tasksIndexStateAtom = atom<number>(0);
export const inputSearchTasksModalAtom = atom<boolean>(false);
export const inputSearchValueAtom = atom<string>('');
export const tasksSearchedAtom = atom<any[]>([]);
export const inputFilterTasksModalAtom = atom<boolean>(false);
export const inputFilterTasksTagAtom = atom<string>('');