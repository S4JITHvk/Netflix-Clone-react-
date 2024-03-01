import { useContext ,useState,useEffect,createContext} from "react";
import { auth, db } from '../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

const Authcontext=createContext()

export function Authcontextprovider({children}){

    const[user,setUser]=useState({})

    function signUp(email,password){
      return createUserWithEmailAndPassword(auth,email,password)
    }
    function logIn(email,password){
        return signInWithEmailAndPassword(auth,email,password)
    }
    function logOut(){
        return signOut(auth)
    }
    return (
      <Authcontext.Provider value={{auth,user}}>
        {children}
      </Authcontext.Provider>
    )
}

export function UserAuth(){
    return useContext(Authcontext)
}