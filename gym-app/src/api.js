import axios from 'axios';


const url ="http://localhost:4500";


const RegisterUser = async (user) =>{
    return await axios.post(`${url}/registerUser`,user)
    
}

const LoginCheck = async (user) =>{
    return await axios.post(`${url}/loginCheck`,user);

}

const ForgotPassword = async (user) =>{
    return await axios.post(`${url}/ForgotPassword`,user)

}


const getresetPassword = async () =>{
    return await axios.get(`${url}/getresetPassword`)

}

const resetPassword = async (id , token ,user) =>{
    return await axios.post(`${url}/resetPassword/${id}/${token}`,user)

}



export {RegisterUser,LoginCheck,ForgotPassword,resetPassword,getresetPassword};

