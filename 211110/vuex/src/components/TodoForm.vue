<template>
  <div>
    <input 
      type="text" 
      @keydown.enter="createTodo"
      v-model="todoTitle"
    >
  </div>
</template>

<script>
export default {
  name: 'TodoForm',
  data: function () {
    return {
      todoTitle: null,
    }
  },
  methods: {
    createTodo: function () {
      const todoItem = {
        title: this.todoTitle,
        completed: false,
        userId: 1,
      }

      // this.$store.commit('CREATE_TODO', todoItem)
      this.$store.dispatch('createTodo', todoItem)
      
      this.todoTitle = null
    }
  }
}
</script>

<style>

</style>