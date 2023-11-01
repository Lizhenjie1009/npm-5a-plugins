import Auth from './page/Auth.vue'

// 响应拦截器处理
function watchToken(response) {
  const { code } = response.data
  if (code === 'AU0000') {
    sessionStorage.clear()
    window.location.href = import.meta.env.VITE_AUTHORIZE_HREF
    return response
  }
  // if (code === 'AU0003') {
  //   const res = await refreshToken()
  //   console.log(res)
  //   sessionStorage.setItem('token', res?.token)
  // }
}


// 请求拦截器处理
function addToken(config) {
  const token = sessionStorage.getItem('token')
  if (token) {
    // 上传文件 - 直接放过
    if (config.data instanceof FormData) {
      config['headers']['Authorization'] = token
      return config
    }
    
    if (!config['headers']) config['headers'] = {}
    config['headers']['Authorization'] = token
  }
}
export {
  Auth,
  watchToken,
  addToken
}