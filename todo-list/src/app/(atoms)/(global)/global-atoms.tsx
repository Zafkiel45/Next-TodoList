'use client';
import { atom } from "jotai";

type toggleSideBarAtom = 'left-0' | 'left-[-100%]';

export const globalToggleSidebarAtoms = atom<toggleSideBarAtom>('left-0')