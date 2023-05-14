import React, { createContext, useState } from 'react';
export const AuthContext=createContext()
import { getAuth } from "firebase/auth";
// import app from '../firebase/firebaseConfig';


// const auth = getAuth(app)
const AuthProviders = ({children}) => {
    const [user, setUser]=useState(null)
    const [loader, setLoader]= useState(true)

    const authInfo ={
        user,
        loader
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProviders;