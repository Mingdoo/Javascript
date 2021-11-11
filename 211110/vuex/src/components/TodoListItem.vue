<template>
  <li>
    <span 
      @click="updateTodo"
      :class="{ 'completed': !todo.completed }"
    >
      {{ todo.title }}
    </span>
    <button @click="deleteTodo">delete</button>
  </li>
</template>

<script>
export default {
  name: 'TodoListItem',
  props: {
    todo: Object,
  },
  methods: {
    deleteTodo: function () {
      this.$store.dispatch('deleteTodo', this.todo.id)
    },
    updateTodo: function () {
      console.log(this)
      this.$store.dispatch('updateTodo', {
        id: this.todo.id,
        completed: this.todo.completed,
      })
    }
  }

}
</script>

<style>
.completed {
  text-decoration: line-through;
}
</style>