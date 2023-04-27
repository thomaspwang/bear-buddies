import { currUser, signedIn } from '@/atoms'
import HomePage from './HomePage/HomePage'
import { useAtom, atom} from "jotai";
import { useState } from 'react';
import LoginPage from './LoginPage/LoginPage';

export default function Index() {

  const [loggedIn, setLoggedIn] = useAtom(signedIn);

  return (
    <>
      {loggedIn ? <HomePage/> : <LoginPage/>}
    </>
  )
}
