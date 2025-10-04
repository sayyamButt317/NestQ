import React from 'react';
import { createContext, useState } from "react";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
    const [persist, setPersist] = useState(JSON.parse(localStorage.getItem("persist")) || true);
    const logout = async () => {
        setAuth({});
    }
    

    return (
        <AuthContext.Provider value={{ auth, setAuth, logout, persist, setPersist }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;