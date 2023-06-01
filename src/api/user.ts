import { requestInstance } from "."

type registerUser = {
    firstName: string
    lastName: string
    email: string
    password: string
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