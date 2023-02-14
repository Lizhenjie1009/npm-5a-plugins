<template>
  <div>
    auth {{ auth ? 'success' : 'fail' }}
  </div>
</template>

<script>
import Axios from 'axios'

export default {
  data() {
    return {
      auth: ''
    }
  },
  created() {
    this.init()
  },
  methods: {
    async init() {
      // let urlV2orV3 = ''
      // try {
      //   // v2
      //   urlV2orV3 = process.env.VUE_APP_AUTH_CODE_CALLBACK
      // } catch (error) {
      //   // v3
      //   urlV2orV3 = import.meta.env.VITE_APP_AUTH_CODE_CALLBACK
      // }
      const { data } = await Axios.get(
        import.meta.env.VITE_APP_AUTH_CODE_CALLBACK + '?' + location.href.split('?')[1]
      )
      const res = data.data
      this.auth = data.data
      if (res?.token) {
        sessionStorage.setItem('info', JSON.stringify(res))
        sessionStorage.setItem('token', res?.token)
        sessionStorage.setItem('menus', JSON.stringify(res.resources))
        this.$router.replace('/')
      }
    }
  }
}
</script>
