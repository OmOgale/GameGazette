"use client";
import { createContext, useState } from "react";
import * as React from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState("");
  const [token, setToken] = useState("");

  return (
    <AuthContext.Provider value={{ user, setUser, token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return React.useContext(AuthContext);
};
