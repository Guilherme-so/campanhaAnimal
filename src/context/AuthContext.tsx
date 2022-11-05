import axios from "axios";
import { parseCookies, setCookie } from "nookies";
import React, { createContext, useEffect, useState } from "react";
import decode from "jwt-decode";
import { IDefaultProps } from "../interfaces/DefaultChildrenProps";

interface User {
  username: string;
  email: string;
}

interface IAuthContextData {
  isAuthenticated: boolean;
  userData: User;
  signInUser(token: string): void;
}

export const AuthContext = createContext({} as IAuthContextData);

export function AuthProvider({ children }: IDefaultProps) {
  const [user, setUser] = useState<User>();
  const isAuthenticated = !!user;

  useEffect(() => {
    const { "@campanhaAnimal:auth": token } = parseCookies();

    if (token) {
      pickUserData(token);
    }
  }, []);

  async function pickUserData(token: string): Promise<void> {
    if (token !== undefined) {
      const decoded: User = await decode(token);
      setUser(decoded);
    }
  }

  function signInUser(token: string): void {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    setCookie(undefined, "@campanhaAnimal:auth", token, {
      maxAge: 60 * 20, // 20 minutos
    });
  }

  return (
    <AuthContext.Provider
      value={{ userData: user, isAuthenticated, signInUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}
