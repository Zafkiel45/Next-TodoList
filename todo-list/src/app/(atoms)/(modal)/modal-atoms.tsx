'use client';
import { atom } from "jotai";

interface visibleStateTypes {
    display: 'hidden' | 'flex';
    position: 'right-[-200%]' | 'right-0';
}

export const visibleStateAtom = atom<visibleStateTypes>({
    display: 'hidden',
    position: 'right-[-200%]',
});

export const renameStateAtom = atom<string>('');
export const indexedItemIndexAtom = atom<number>(0);
export const tasksDescriptionStateAtom = atom<string>('');

