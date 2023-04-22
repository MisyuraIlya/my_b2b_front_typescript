import { IFullUser } from "@/models/user.interface"
import { useQuery } from "react-query"
import { UserService } from "@/services/user.service"
export const useProfile = () => {
    const {data} = useQuery(['get profile'], () => 
    UserService.getProfile(), {
        select:({data}) => data
    })

    return {profile: data}
}