<template>
  <div>
    <input type="text" name="" id="">
    <button>+</button>

    <todo-item
     v-for="(todo, index) in todos"
     :key="index"
     v-bind:todo="todo" 
     @todo-delete="todoDelete"
    >
     </todo-item>
    
    {{ todos }}
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue'
export default {
  name: 'Todo',
  components: {
    TodoItem,
  },
  data: function () {
    return {
      todos: ['공부', '저녁약속', '쉬기'],
      todo: '내가 할일'
    }
  },
  methods: {
    todoDelete: function (todo) {
      console.log(this.todos)
      const removeIdx = this.todos.findIndex(tmp => {
        tmp === todo
      })
      console.log(removeIdx)
      this.todos.pop(removeIdx)

    }
  }
  
}
</script>

<style>

</style>