
import axios from "axios";
import { useState, useEffect, useContext, createContext } from "react";

const AuthContext = createContext()



const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        user: null,
        token: '',

    })
    // axios defaults
    axios.defaults.headers.common['Authorization'] = auth?.token


    useEffect(() => {
        const data = localStorage.getItem('auth');

        if (data) {
            const parsedAuth = JSON.parse(data);

            setAuth({
                ...auth,
                user: parsedAuth.user,
                token: parsedAuth.token
            })
        }
    }, [])

    return (
        <AuthContext.Provider value={[auth, setAuth]}>{children}</AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext)

export { useAuth, AuthProvider }