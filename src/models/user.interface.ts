import { IAddressUser } from "./addressUser.interface"

export interface IUser {
    id: number
    userExId: string
    email: string
    password: string
    name: string
    phone: string
    registration: boolean
    recovery: string
    address: IAddressUser
    blocked: boolean
    obligo: number
    creditLimit: number
    createdAt: Date
    updatedAt: Date
}

export interface IUserState {
    email: string
}
export interface ITokens {
    accessToken: string
    refreshToken: string
}

export interface IInitialState {
    user: IUserState | null
    isLoading: boolean
}
export interface IEmailPassword {
    email: string
    passwrod: string
}
export interface IAuthResponse extends ITokens {
    user: IUser
}
