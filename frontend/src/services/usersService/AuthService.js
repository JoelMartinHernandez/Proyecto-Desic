import axios from "axios";

const endpoint = "http://localhost:8080/api/users";

const getOptions = (user) => {
  let base64UserAndPassword = window.btoa(user.username + ":" + user.password);

  let basicAccess = 'Basic ' + base64UserAndPassword;

  let options = {
    headers: {
      'Authorization': basicAccess,
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  };

  return options;
}

const register = async (user) => {
  console.log("aaa")
  try {
    const body = new URLSearchParams();
    body.append('name', user.name);
    body.append('discriminator', user.discriminator);
    const response = await axios.post(endpoint, body, getOptions(user));
    const token = await response.data.access_token;
    localStorage.setItem('token', token);
    return response;
  } catch (err) {
    console.log(err.message)
  }
};

const login = async (user) => {
  try {
    const log = await axios.post(endpoint + '/signin', null, getOptions(user));
    const response = await axios.post(endpoint, null, getOptions(user));
    const token = await response.data.access_token;
    localStorage.setItem('token', token);
    return response;
  } catch (err) {
    console.log(err.message);
  }


};

async function logout() {
  await this.storage.remove("token");
}



async function isLoggedIn() {
  // return this.authSubject.asObservable();
  let token = await this.storage.get("token");
  if (token) { //Just check if exists. This should be checked with current date
    return true;
  }
  return false;
}


export default {
  isLoggedIn,
  logout,
  login,
  register,
};