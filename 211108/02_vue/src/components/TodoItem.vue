<template>
  <div>
    <p><a href="#">{{ todo }}</a></p>
    <p><button @click="todoDelete">delete</button></p>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    // todo: String,
    todo: String,
  },
  methods: {
    todoDelete: function () {
      this.$emit('todo-delete', this.todo)
    }
  }

}
</script>

<style>

</style>