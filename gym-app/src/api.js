import axios from 'axios';

const url ="http://localhost:4500/";


const registerUser = async (user) =>{
    return await axios.post(`${url}/registerUser`,user)

}

const loginCheck = async (user) =>{
    return await axios.post(`${url}/loginCheck`,user)

}

export {registerUser,loginCheck};