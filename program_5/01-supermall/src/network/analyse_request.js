// 分析下 request.sj

// 如果在main.js中这样用:

import {request} from 'network/request'
request({
  url:'/posts',
},res=>{
    console.log(res)
  },res =>{
  console.log(res)
})

// 那么合并展开: 


import axios from 'axios'
export function request(config, success, failure) {
  const instance = axios.create({
    baseURL: 'http://192.168.250.2:3000/',
    timeout: 5000
  })

  instance.interceptors.request.use(config => { //自定义的函数接受了形参config
    console.log(config)
    return config //它又返回了config, 所以在use()中(注意不是第一个函数形参)中能够使用
  }, err => {
    console.log(err)
  })

  instance.interceptors.response.use(
    res => {
      console.log(res)
      return res.data
    }, err => {
      console.log(err)
    }
  )
  return instance({url:'/posts'})
    .then(res => {
      console.log(res)
      console.log(res) // 参数传进来的
    })
    .catch(err => {
      console.log(err)
      console.log(err) //参数传进来的
    })

}
