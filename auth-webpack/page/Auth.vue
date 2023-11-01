<template>
  <div>
    <!-- auth {{ auth ? 'success' : 'fail' }} -->
  </div>
</template>

<script>
import Axios from 'axios'
import { messageControl } from '../utils/msg.js'

export default {
  data() {
    return {
      auth: '',
      messageComponent: null
    }
  },
  created() {
    this.init()
  },
  mounted() {
    this.messageComponent = new messageControl()
  },
  methods: {
    async init() {
      const { data } = await Axios.get(
        process.env.VUE_APP_AUTH_CODE_CALLBACK + '?' + location.href.split('?')[1]
      )
      const res = data.data
      if (data.code !== 200) {
        this.messageComponent.message({ type: 'error',content: data.msg })
        setTimeout(() => {
          window.location.href = process.env.VUE_AUTHORIZE_HREF
        }, 3000)
      } else {
        this.auth = data.data
        if (res.token) {
          sessionStorage.setItem('info', JSON.stringify(res))
          sessionStorage.setItem('token', res?.token)
          sessionStorage.setItem('menus', JSON.stringify(res.resources))
          this.$router.replace('/')
        }
      }
    }
  }
}
</script>
