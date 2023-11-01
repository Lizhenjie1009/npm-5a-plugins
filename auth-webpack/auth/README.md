# 当前包是vite版本，如需wabpack版本请下载 auth-webpack

## 1.配置router
  · 在路由中配置 `/auth` 
  · 引入 Auth 组件

      import { Auth } from 'auth-vite'

      {
        path: '/auth',
        component: Auth
      }


## 2.配置axios拦截器
  import { watchToken, addToken } from 'auth-vite'

  请求拦截  addToken(config)
  响应拦截  watchToken(response, envUrl, errorCode)
    envUrl: 跳转env地址
    errorCode：后台响应的异常状态码

## 3.配置代理
  proxy配置 `/client` 指向后端地址

    '/client': {
      target: 'http://192.168.10.89:8080/'
    }


## 4.配置环境变量

   5a-认证地址

      VUE_AUTHORIZE_HREF = '/client/authentication'
    注：vite配置环境变量
      VITE_AUTHORIZE_HREF = '/client/authentication'



