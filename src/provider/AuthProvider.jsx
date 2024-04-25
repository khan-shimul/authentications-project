import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, SetUser] = useState(null);

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    return signOut(auth);
  };

  // Observing on auth state
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      SetUser(currentUser);
      console.log("ovjerbing current user", currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = { user, createUser, signInUser, signOutUser };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
