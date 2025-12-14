import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'

// 响应数据接口
export interface ResponseData<T = any> {
  code: number
  message: string
  data: T
}

// 创建 axios 实例
const service: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
})

// 请求拦截器
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // 在这里可以添加 token
    const token = localStorage.getItem('token')
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error: AxiosError) => {
    console.error('请求错误:', error)
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse<ResponseData>) => {
    const res = response.data
    
    // 如果返回的状态码不是200，说明有错误
    if (res.code !== 200) {
      // 可以根据不同的错误码进行不同的处理
      console.error('响应错误:', res.message || '请求失败')
      return Promise.reject(new Error(res.message || '请求失败'))
    }
    
    return res
  },
  (error: AxiosError) => {
    console.error('响应错误:', error)
    
    // 处理 HTTP 错误状态码
    if (error.response) {
      switch (error.response.status) {
        case 401:
          console.error('未授权，请重新登录')
          // 可以跳转到登录页
          break
        case 403:
          console.error('拒绝访问')
          break
        case 404:
          console.error('请求的资源不存在')
          break
        case 500:
          console.error('服务器内部错误')
          break
        default:
          console.error('请求失败')
      }
    } else if (error.request) {
      console.error('请求超时，请检查网络连接')
    } else {
      console.error('请求错误:', error.message)
    }
    
    return Promise.reject(error)
  }
)

/**
 * GET 请求
 */
export const get = <T = any>(url: string, params?: any, config?: AxiosRequestConfig): Promise<ResponseData<T>> => {
  return service.get(url, { params, ...config })
}

/**
 * POST 请求
 */
export const post = <T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<ResponseData<T>> => {
  return service.post(url, data, config)
}

/**
 * PUT 请求
 */
export const put = <T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<ResponseData<T>> => {
  return service.put(url, data, config)
}

/**
 * DELETE 请求
 */
export const del = <T = any>(url: string, params?: any, config?: AxiosRequestConfig): Promise<ResponseData<T>> => {
  return service.delete(url, { params, ...config })
}

/**
 * PATCH 请求
 */
export const patch = <T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<ResponseData<T>> => {
  return service.patch(url, data, config)
}

export default service