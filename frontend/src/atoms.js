import { atom, useAtom } from 'jotai';

const loggedInAtom = atom(false);

const signupAtom = atom({
    status: 'idle',
    error: null,
    user: null
})
