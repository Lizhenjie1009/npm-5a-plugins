<template>
  <div></div>
</template>

<script>
import Axios from 'axios'

export default {
  created() {
    this.init()
  },
  methods: {
    async init() {
      const search = location.href.replace(/.*\/auth/, '')
      const { data } = await Axios.get('/client/callback' + decodeURIComponent(search))
      const res = data.data
      if (res) {
        sessionStorage.setItem('info', JSON.stringify(res))
        res?.token && sessionStorage.setItem('token', res?.token)
        res.resources && sessionStorage.setItem('menus', JSON.stringify(res.resources))
        let url = ''
        search.includes('%2F') ?  search.replace(/%2F/g, '/').replace(/(\/.*)/g, ($1, s1) => (url = s1)) : search.replace(/(\/.*)/g, ($1, s1) => (url = s1))
        this.$nextTick(() => {
          url ? this.$router.replace(decodeURIComponent(url)) : this.$router.replace('/')
        })
      }
    }
  }
}
</script>
