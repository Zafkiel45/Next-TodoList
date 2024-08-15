'use client';
import { atom } from "jotai";

interface warnModalStateTypes {
    display: 'hidden' | 'flex';
    blur?: boolean;
}

export const inputTaskNameAtom = atom<string>('');
export const inputBlurModalAtom = atom<boolean>(false);
export const switchModeButtonAtom = atom<string>('');
export const warnModalStateAtom = atom<warnModalStateTypes>({
    display: 'hidden',
});