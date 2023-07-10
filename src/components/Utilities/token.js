import axios from 'axios';

function getAxiosConstants() {
    axios.get(`${process.env.REACT_APP_API_HOST_URL}/auth/token`)
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          console.error(error.message);
        });
    }

export default getAxiosConstants