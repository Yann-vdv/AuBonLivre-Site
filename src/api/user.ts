import { requestInstance } from "."

type registerUser = {
    username: string
    email: string
    password: string
    password2: string
}

const register = (data:registerUser) => {
    return requestInstance.post('users/register',data);
}

const login = (data:{email:string,password:string}) => {
    console.log('test',data)
    return requestInstance.post('users/login',data);
}

const userRequest = {
    register,login
}

export default userRequest