import { useContext ,useState,useEffect,createContext} from "react";
import { auth, db } from '../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import {setDoc,doc} from 'firebase/firestore'

const Authcontext=createContext()

export function Authcontextprovider({children}){

    const[user,setUser]=useState({})

    async function signUp(email, password) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        const userDocRef = doc(db, 'users', email);
        await setDoc(userDocRef, {
          savedShows: []
        });
      } catch (error) {
        console.error('Error during sign up:', error.message);
      }
    }
    function logIn(email,password){
        return signInWithEmailAndPassword(auth,email,password)
    }
    function logOut(){
        return signOut(auth)
    }

    useEffect(()=>{
      const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
      })
      return ()=>{
        unsubscribe()
      }
    })
    return (
      <Authcontext.Provider value={{auth,user,signUp,logIn,logOut}}>
        {children}
      </Authcontext.Provider>
    )
}

export function UserAuth(){
    return useContext(Authcontext)
}