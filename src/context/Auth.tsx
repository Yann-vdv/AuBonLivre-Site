import { createContext, useContext, useMemo } from "react";
import { contextAuth, contextUser } from "../models/models";
import { useLocalStorage } from "../hooks/localStorage";
const AuthContext = createContext<contextAuth>({
    user: {logged: false, id: null, token: null},
    login: (data: contextUser) => {},
    logout: () => {}
});

export const AuthProvider = ({ children }:any) => {
    const [user, setUser] = useLocalStorage("user", null);

    const login = async (data:contextUser) => {
        setUser({logged: data.logged, id: data.id, token: data.token});
    };

    const logout = () => {
        setUser({logged: false, id: null, token: null});
    };

    const value:contextAuth = useMemo(() => ({
        user,
        login,
        logout
    }),[user]);

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
};