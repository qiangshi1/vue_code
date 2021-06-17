import axios from 'axios'
export function request(config) {
  const instance = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 5000
  })
  instance.interceptors.request.use(config => {
    // console.log(config)
    return config
  })
  instance.interceptors.response.use(
    res => {
    //   console.log(res)
      return res.data
    }
  )
  return instance(config)
    // .then(res => {
    //   console.log(res)
    //   success(res)
    // })
    // .catch(err => {
    //   console.log(err)
    //   failure(err)
    // })

}
