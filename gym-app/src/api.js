import axios from "axios";

const url = "http://localhost:4500";

const RegisterUser = async (user) => {
  return await axios.post(`${url}/registerUser`, user);
};

const LoginCheck = async (user) => {
  return await axios.post(`${url}/loginCheck`, user);
};

const getusers = async (id) => {
  id = id || "";
  return await axios.get(`${url}/${id}`);
};

const deleteUser = async (id) => {
  return await axios.delete(`${url}/${id}`);
};

const editUser = async (id, user) => {
  return await axios.put(`${url}/${id}`, user);
};
const ForgotPassword = async (user) => {
  return await axios.post(`${url}/ForgotPassword`, user);
};

const getresetPassword = async () => {
  return await axios.get(`${url}/getresetPassword`);
};

const resetPassword = async (id, token, user) => {
  return await axios.post(`${url}/resetPassword/${id}/${token}`, user);
};

const getPayment = async (email) => {
  return await axios.get(`${url}?email=${email}`);
};

const addfeedback = async (user) => {
  return await axios.post(`${url}/addfeedback`, user);
};

const getfeedback = async () => {

  return await axios.get(`${url}/getfeedback`);
};

const deletefeedback = async (id) => {
  return await axios.delete(`${url}/deletefeedback/${id}`);
};


export {
  RegisterUser,
  LoginCheck,
  ForgotPassword,
  resetPassword,
  getresetPassword,
  getusers,
  deleteUser,
  editUser,
  getPayment,
  addfeedback,
  getfeedback,
  deletefeedback
};
