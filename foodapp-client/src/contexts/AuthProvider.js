/* eslint-disable react/prop-types */
import React from "react";
import { createContext } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import app from "../firebase/firebase.config";


export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


// Auth provider
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);


// create an account
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };


  // signup with gmail
  const signUpWithGmail = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };


  // login or signup with email and password 
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };



  // logout and signout
  const logout = () => {
    localStorage.removeItem("genius-token");
    return signOut(auth);
  };


  // update your profile
  const updateUserProfile = (name, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };


  // check user signed in
  useEffect(()=>{
     const unsubscribe =onAuthStateChanged(auth,(currentUser)=>{
        if(currentUser){
            setUser(currentUser);
            setLoading(false);
            
        }
        else{
            // user is signed out
        }
     });
     return()=>{
      return unsubscribe();
     }
  },[]);
    
  const authInfo = {
    user,
    loading,
    createUser,
    login,
    logout,
    signUpWithGmail,
    updateUserProfile,

  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;