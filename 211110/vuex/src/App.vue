<template>
  <div id="app">
    <p>완료된일 : {{ completedTodoCount }}</p>
    <p>미완료된일 : {{ uncompletedTodoCount }}</p>
    <p>일 : {{ allTodoCount }}</p>
    <todo-form></todo-form>
    <todo-list></todo-list>
  </div>
</template>

<script>
// import TodoList from './components/TodoList.vue'
import TodoList from '@/components/TodoList.vue'
import TodoForm from '@/components/TodoForm.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    TodoList,
    TodoForm,
  },
  computed: {
    // completedTodoCount: function () {
    //   return this.$store.getters.completedTodoCount
    // },
    // uncompletedTodoCount: function() {
    //   return this.$store.getters.uncompletedTodoCount
    // },
    // allTodoCount: function () {
    //   return this.$store.getters.allTodoCount
    // }
    ...mapGetters([
      'completedTodoCount',
      'uncompletedTodoCount',
      'allTodoCount',
      ])
  },
  created: function () {
    this.$store.dispatch('getTodos')
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
