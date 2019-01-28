import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://workflow-7c092.firebaseio.com'
})

instance.defaults.headers.common['SOMETHING'] = 'something'

export default instance
