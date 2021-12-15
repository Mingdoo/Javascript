<template>
  <div>
    <h1>Login</h1>
    <input 
      type="text" 
      v-model="credentials.username"
    >
    <input 
      type="text" 
      v-model="credentials.password"
      @keyup.enter="login"
    >
    <button @click="login">Login</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Login',
  data: function () {
    return {
      credentials: {

      }
    }
  },
  methods: {
    login: function () {
      axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/accounts/api-token-auth/',
        data: this.credentials
      })
        .then((res) => {
          console.log(res)
          localStorage.setItem('jwt', res.data.token)
          this.$router.push({name: 'TodoList'})
          this.$emit('login')
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>
