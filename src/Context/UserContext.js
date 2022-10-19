import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.init';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'

export const AuthContext = createContext();
const auth = getAuth(app)

const UserContext = ({ children }) => {
    const [user, setUser] = useState({ displayName: 'AAAAAAAKhas' })
    const googleProvider = new GoogleAuthProvider()

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    const logOut = () => {
        return signOut(auth);
    }

    const signInWIthGoogle = () => {
        signInWithPopup(auth, googleProvider);
    }

    //Use Effect use for stay user Identity

    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log('user', currentUser)
        })

        return () => {
            unsubcribe();
        }

    }, [])


    const authInfo = { user, createUser, signIn, logOut, signInWIthGoogle }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </ AuthContext.Provider>
        </div>
    );
};

export default UserContext;