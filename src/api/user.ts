import { requestInstance } from "."

type registerUser = {
    username: string
    email: string
    password: string
    password2: string
}

const register = (data:registerUser) => {
    return requestInstance.post('register',data);
}

const login = (data:{email:string,password:string}) => {
    return requestInstance.post('login',data);
}

const userRequest = {
    register,login
}

export default userRequest