import axios from 'axios'

// 后端地址
const serverPath = import.meta.env.VITE_API_BASE_URL

const request = axios.create({
  baseURL: serverPath,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    // 可统一加 token
    // const token = localStorage.getItem('token')
    // if (token) config.headers.Authorization = `Bearer ${token}`
    return config
  },
  error => Promise.reject(error),
)

// 响应拦截器
request.interceptors.response.use(
  res => res.data, // 只取实际数据部分
  (error) => {
    // 可统一错误提示
    console.error('请求错误：', error)
    return Promise.reject(error)
  },
)

export default request
