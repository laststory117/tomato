/* eslint-disable */
import axios from 'axios'
// axios post请求默认Content-type是 application/json
axios.defaults.timeout = 20000 // 20s没响应则认为该请求失败
axios.defaults.withCredentials = true// 跨域时如果要带上cookie话则需要设置withCrendentials
axios.defaults.baseURL = '/toolsapi'

// http request 拦截器 所有请求发出前都需要执行以下代码
axios.interceptors.request.use(
  (request) => request,
  (error) => Promise.reject(error)
)

// http response 拦截器 所有请求返回结果后都需要执行以下代码
axios.interceptors.response.use(
  (response) => {
    // 此处可对token过期等公用错误状态码进行处理
    if (response.data.code === 999) {
      console.log('token过期')
    }
    return response.data
  },
  (error) => Promise.reject(error)
)

// export const api = config => axios(config).then(response => resolve(response.data)).catch(error => reject(error))
export const api = {
  get: params => axios.get(params)
}