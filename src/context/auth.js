import { createContext, useContext } from 'react';
import api from '../service/api';
import MD5 from "crypto-js/md5";

export const AuthContext = createContext();
let localStorage = global.window.localStorage;

export function useAuth() {
  return useContext(AuthContext);
}

const auth = {
  authenticateUser(user, password) {
    var token = user + ":" + password;

    // Should i be encoding this value????? does it matter???
    // Base64 Encoding -> btoa
    var hash = btoa(token);

    return "Basic " + hash;
  },
  /**
  * Logs a user in, returning a promise with `true` when done
  * @param  {string} username The username of the user
  * @param  {string} password The password of the user
  */
  login(username, password) {
    if (auth.loggedIn()) return Promise.resolve(true)
    const md5Pass = MD5(password).toString();
    const defaultBody = {
      "matb": "anhdeptraithietma",
      "maos": "3",
      username: 'vinhphat89@gmail.com',
      password: '627c4da2969f2e8597436e608ff6ce26'
    };
    
    const hash = this.authenticateUser('webuser', 'AP2##$$89SpM2020#');
    console.log(hash);
    return api.post('userLogin', defaultBody,
    {
      headers: {
        "Authorization": hash,
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        // Save token to local storage
        if (response.data.data.token) {
          localStorage.token = response.data.data.token
          localStorage.user = JSON.stringify(response.data.data.user)
          return Promise.resolve(response.data.data)
        }
        return Promise.reject()
      })
  },
  /**
  * Logs the current user out
  */
  logout() {
    delete localStorage.token;
    delete localStorage.user;
  },
  /**
  * Checks if a user is logged in
  */
  loggedIn() {
    return !!localStorage.token
  },
  /**
  * Registers a user and then logs them in
  * @param  {string} username The username of the user
  * @param  {string} password The password of the user
  */
  register(username, password) {
    // Post a fake request
    return api.post('/register', { username, password })
      // Log user in after registering
      .then(() => auth.login(username, password))
  },
  onChange() { }
}

export default auth
