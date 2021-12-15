<template>
  <div id="app">
    <div id="nav">
      <span v-if="isLogin">
        |
        <router-link :to="{ name: 'TodoList' }">Todo List</router-link> | 
        <router-link :to="{ name: 'CreateTodo' }">Create Todo</router-link> |
        <a href="">{{ username }}님 ㅎㅇ</a> | 
        <router-link @click.native='logout' to="#">Logout</router-link>|
      </span>
      <span v-else>
        <router-link :to="{ name: 'Signup' }">Signup</router-link> |
        <router-link :to="{ name: 'Login' }">Login</router-link> 
      </span>
    </div>
    <router-view/>
  </div>
</template>

<script>
import jwt_decode from "jwt-decode"

export default {
  name: 'App',
  data: function () {
    return {
      isLogin: false,
      username: null,
    }
  },
  methods: {
    logout: function() {
      this.isLogin = false
      localStorage.removeItem('jwt')
      this.$router.push({name: 'Login'})
    }
  },
  updated: function () {
    const token = localStorage.getItem('jwt')
    const decodedToken = jwt_decode(token)
    this.username = decodedToken.username
    if (token) {
      this.isLogin = true
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
