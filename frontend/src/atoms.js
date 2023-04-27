import { atom, useAtom } from 'jotai';

export const currUser = atom({});
export const signedIn = atom(false);