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
      const search = location.href.split('?')[1]
      const { data } = await Axios.get('/client/callback?' + search)
      const res = data.data
      if (res) {
        sessionStorage.setItem('info', JSON.stringify(res))
        res?.token && sessionStorage.setItem('token', res?.token)
        res.resources && sessionStorage.setItem('menus', JSON.stringify(res.resources))
        let url = ''
        search.replace(/(\/.*)/g, ($1, s1) => (url = s1))
        this.$nextTick(() => {
          url ? this.$router.replace(url) : this.$router.replace('/')
        })
      }
    }
  }
}
</script>
