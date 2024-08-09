import React, { createContext, useContext, useEffect, useState } from 'react'
import {useSnackbar} from "notistack"

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const {enqueueSnackbar} = useSnackbar()
    const [token, setToken] = useState(localStorage.getItem('token'))
    const [name, setName] = useState(localStorage.getItem('username'))
    const [isAuth, setIsAuth] = useState(false)

    useEffect(() => {
        if (token) {
            setIsAuth(true)
        } else {
            setIsAuth(false)
        }
    }, [token])

    const logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        setIsAuth(false)
        enqueueSnackbar("Successfully Logout", {variant: 'success'})
    }

    return (
        <AuthContext.Provider value={{ setToken, setName, isAuth, logout, name }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)