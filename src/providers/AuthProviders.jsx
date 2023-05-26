import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../utility/firebase.config';

export const AuthContext = createContext({});

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const userGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    };

    const userRegister = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const userLogout = () => {
        setLoading(true);
        return signOut(auth);
    };

    useEffect(()=> {
        const unSubscriber = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => unSubscriber();
    }, []);

    const userProfileUpdate = (name, photo) => {
        return updateProfile(auth.currentUser, {displayName: name, photoURL: photo});
    };

    const authInfo = {
        user,
        userRegister,
        userLogin,
        userLogout,
        loading,
        userGoogle,
        userProfileUpdate
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;