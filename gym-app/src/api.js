import axios from 'axios';


const url ="http://localhost:4500";


const RegisterUser = async (user) =>{
    return await axios.post(`${url}/registerUser`,user)
    
}

const LoginCheck = async (user) =>{
    return await axios.post(`${url}/loginCheck`,user);

}

const ForgotPassword = async (user) =>{
    return await axios.post(`${url}/forgotPassword`,user)

}


// const getresetPassword = async (user) =>{
//     return await axios.get(`${url}/getresetPassword`,user)

// }

const resetPassword = async (user) =>{
    return await axios.post(`${url}/resetPassword`,user)

}



export {registerUser,loginCheck,forgotPassword,resetPassword};

