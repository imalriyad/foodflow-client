/* eslint-disable react/prop-types */
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState, useEffect } from "react";
import { createContext } from "react";
import auth from "../Firebase/firebase.config";
import useAxios from "../Hooks/useAxios";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const axios = useAxios();

  const registeration = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    setLoading(true);
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  };

  const passwordReset = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  const logout = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unsubScribe = onAuthStateChanged(auth, (currentUser) => {
      const userMail = currentUser?.email || user?.email;
      setUser(currentUser);
      setLoading(false);
      const userEmail = { email: userMail };
      if (!currentUser) {
        axios.post("/logout", userEmail).then((res) => console.log(res.data));
      }
    });
    return () => unsubScribe();
  },[axios,user?.email]);
  const authInfo = {
    registeration,
    login,
    logout,
    passwordReset,
    googleLogin,
    isLoading,
    user,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
