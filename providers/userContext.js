/* eslint-disable no-useless-catch */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import firebaseClient from '../services/firebaseClient';

const Context = React.createContext();

export const Provider = ({ children }) => {
  const Router = useRouter();
  const [user, setUser] = useState('');
  const signOutUser = () => {
    firebaseClient.auth().signOut();
    setUser(undefined);
    Router.push('/');
  };

  const updatePassword = async (newPW) => {
    const { currentUser } = firebaseClient.auth();
    try {
      await currentUser.updatePassword(newPW);
    } catch (error) {
      throw (error);
    }
  };
  useEffect(() => {
    firebaseClient.auth().onAuthStateChanged(async usr => {
      if (usr) {
        setUser(usr);
      }
    });
  }, []);
  return (
    <Context.Provider value={{ user, signOutUser, updatePassword }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
