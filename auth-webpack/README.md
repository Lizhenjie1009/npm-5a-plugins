# 当前包是wabpack版本，如需vite版本请下载 auth-vite

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
  响应拦截  watchToken(response)

## 3.配置代理
  proxy配置 `/client` 指向后端地址

    '/client': {
      target: 'http://192.168.10.89:8080/'
    }


## 4.配置环境变量

  1. 5a-认证code回调地址
      VUE_APP_AUTH_CODE_CALLBACK = '/client/callback'
    注：vite配置环境变量
      VITE_APP_AUTH_CODE_CALLBACK = '/client/callback'

  2. 5a-认证地址

      VUE_AUTHORIZE_HREF = '/client/authentication'
    注：vite配置环境变量
      VITE_AUTHORIZE_HREF = '/client/authentication'


## 5.配置路由守卫
  · 给 `/auth` 添加白名单，放过auth
  · 没有token，location.href=VITE_AUTHORIZE_HREF

