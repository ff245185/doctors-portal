import React, { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth';
import app from '../firebase/firebase.config';




export const AuthContex = createContext();
const auth = getAuth(app)

const Authprovider = ({children}) => {

   const createuser = (email,password)=>{
           return createUserWithEmailAndPassword(auth,email,password)
   }

    const authinfo ={
             createuser
    }
    return (
         <AuthContex.Provider value={authinfo}>
              {children}
         </AuthContex.Provider>
    )
};

export default Authprovider;