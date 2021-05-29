import React, { useState, useEffect, useContext, createContext } from "react";

const authContext = createContext();

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
};

// Provider hook that creates auth object and handles state
function useProvideAuth() {

  let foundUser = null;
  const loggedInUser = localStorage.getItem("user");
  if (loggedInUser) {
    foundUser = JSON.parse(loggedInUser);
  }
  const [user, setUser] = useState(foundUser);
  
  // Wrap any Firebase methods we want to use making sure ...
  // ... to save the user to state.
  const signin = (idToken) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idToken: idToken })
    };
    return fetch('http://34.126.173.210:8080/api/signIn', requestOptions)
      .then(response => response.json())
      .then(user => {
        localStorage.setItem('user', JSON.stringify(user));
        setUser(user);
        return user;
      })
  };

  const signout = (email) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email })
    };
    return fetch('http://34.126.173.210:8080/api/signOut', requestOptions)
      .then(() => {
        localStorage.clear();
        setUser(null);
        return null;
      })
  };

  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);
  
  // Return the user object and auth methods
  return {
    user,
    signin,
    signout,
  };
}