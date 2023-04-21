import axios from "axios";
import Cookies from "js-cookie";
import { getContentType } from "@/api/api.heler";
import { IAuthResponse, IEmailPassword } from "@/models/user.interface";
import { saveToStorage } from "./auth.helper";
import { instance } from "@/api/api.interceptor";
export const AuthService =  {

    async main(type: 'login' | 'register', data:IEmailPassword) {
        const response = await instance<IAuthResponse>({
            url: `${type}`,
            method:' POST',
            data
        })

        if (response.data.accessToken) saveToStorage(response.data)

        return response.data
    },

    async getNewTokens()
    {
        const refreshToken = Cookies.get('refresh-token')

        const response = await axios.post<string, {data:
        IAuthResponse }>(
            process.env.SERVER_URL,
            { refreshToken }, 
            {
                headers: getContentType()
            }
        )

        if(response.data.accessToken) saveToStorage(response.data)

        return response
    }
}