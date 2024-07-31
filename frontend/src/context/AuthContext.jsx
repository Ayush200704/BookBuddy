import React, { createContext, useContext, useEffect, useState } from 'react'
import {useSnackbar} from "notistack"

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const {enqueueSnackbar} = useSnackbar()
    const [token, setToken] = useState(null)
    const [name, setName] = useState("")
    const [isAuth, setIsAuth] = useState(false)

    useEffect(() => {
        if (token) {
            setIsAuth(true)
        } else {
            setIsAuth(false)
        }
    }, [token])

    const logout = () => {
        setToken(null)
        setName("")
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