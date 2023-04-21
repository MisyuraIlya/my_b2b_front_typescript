import React, {FC, PropsWithChildren, useEffect} from 'react'
import { TypeComponentAuthFileds } from './auth-page.types'
import CheckRole from './CheckRole'
import { useAuth } from '@/components/hooks/useAuth'
import { useActions } from '@/components/hooks/useActions'
import { useLocation } from 'react-router-dom'
import { getAccessToken } from '@/services/auth/auth.helper'
import Cookies from 'js-cookie'
const AuthProvider: FC<PropsWithChildren<TypeComponentAuthFileds>> = ({Component: {isOnlyUser}, children}) => {

    const {user} = useAuth()
    const {checkAuth, logout} = useActions()
    const location = useLocation()

    useEffect(() => {
        const accessToken = getAccessToken()
        if(accessToken) checkAuth()
    },[])

    useEffect(() => {
        const refreshToken = Cookies.get('refreshToken')
        if(!refreshToken && user) logout()
    },[location.pathname])

    return  isOnlyUser 
    ? (
        <CheckRole Component={{isOnlyUser}}>{children}</CheckRole>)
    : (
        <>{children}</>
    )
}

export default AuthProvider