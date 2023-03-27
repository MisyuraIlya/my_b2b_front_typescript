import axios from "axios"
import { API_BACKEND } from "../constructor";
import { onSuccessAlert } from "../constructor";
// userExId = 1, name: string, email: string, phone: string, password:string
export const RegistrationRequest = async () => {
    const postData = {
        classPoint: 'AuthController',
        funcName: 'Registration',
        // val: {
        //     userExId: userExId,
        //     name: name,
        //     email: email,
        //     phone: phone,
        //     password: password
        // }
        val: {
            userExId: '1',
            name: 'ilya',
            email: 'tes',
            phone: '0503036307',
            password: '123'
          }
    };

    axios.post(API_BACKEND, postData)
    .then(response => {
        console.log(response.data.status);
        if(response.data.status == 'success'){
            onSuccessAlert('Success','Registration Successss')
        }
    })
    .catch(error => {
        console.log(error);
    });
}