import {useContext} from 'react';
import {AuthContext } from "../contexts/AuthContext"
export const Status = () => {
    const {token, isAuth} = useContext(AuthContext)
  return (
    <>
      <div>
          {isAuth && token ? "you are successfully logged in" : "user not logged in"}
      </div>
    </>
  );
};