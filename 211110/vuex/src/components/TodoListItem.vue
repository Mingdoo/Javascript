<template>
  <li>
    <span 
      @click="updateTodo"
      :class="{ 'completed': todo.isCompleted }"
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
      this.$store.dispatch('deleteTodo', this.todo)
    },
    updateTodo: function () {
      this.$store.dispatch('updateTodo', this.todo)
    }
  }

}
</script>

<style>
.completed {
  text-decoration: line-through;
}
</style>