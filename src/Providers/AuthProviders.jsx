import React, { createContext, useEffect, useState } from 'react';
export const AuthContext=createContext()
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebaseConfig';


const auth = getAuth(app)
const AuthProviders = ({children}) => {
    const [user, setUser]=useState(null)
    const [loader, setLoader]= useState(true)

    const createUserLogin=(email, password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signUp=(email, password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
        const unsubscribe =onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            console.log("currentUser", currentUser);
            setLoader(false)
        })
        return ()=>{
            return unsubscribe();
        }
    },[])

    const authInfo ={
        user,
        loader,
        createUserLogin,
        signUp
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProviders;