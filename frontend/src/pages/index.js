import { currUser, signedIn } from '@/atoms'
import HomePage from './HomePage/HomePage'
import { useAtom, atom} from "jotai";
import LoginPage from './LoginPage/LoginPage';

export default function Index() {

  const [user] = useAtom(currUser);

  return (
    <>
      {user.length > 0 ? <HomePage/> : <LoginPage/>}
    </>
  )
}
