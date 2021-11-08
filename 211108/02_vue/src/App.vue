<template>
  <div id="app">
    <about></about>
    <todo></todo>
  </div>
</template>

<script>
import About from './components/About.vue'
import Todo from './components/Todo.vue'

export default {
  name: 'App',
  components: {
    About: About,
    Todo,
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
  margin-top: 60px;
}
</style>
