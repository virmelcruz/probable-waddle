// generic api function
import axios from "axios"

const API = ({ url,
              data = {},
              method = 'GET',
              onSuccess,
              onError = (error) => { console.error(error) },
              onComplete = () => {} }) => {

  if (method === 'GET') {
    axios.get(url).then(onSuccess).catch(onError)
  } else if (method === 'POST') {
    axios.post(url, data).then(onSuccess).catch(onError)
  }
}

export default API;
