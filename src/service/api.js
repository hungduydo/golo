import axios from 'axios';
let localStorage = global.window.localStorage;
const token = localStorage.token;

export default axios.create({
  baseURL: `http://api.golo.vn/web/v1/`,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  // validateStatus: (status) => {
  //   console.log(status);
  //   if (status === 409) {
  //     delete localStorage.token;
  //     global.window.location.href = '/login'
  //   }
  //   return true;
  // }
});