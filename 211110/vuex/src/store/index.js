import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
    ]
  },
  mutations: {
    CREATE_TODO: function (state, todoItem) {    
      state.todos.push(todoItem)
    },
    DELETE_TODO: function (state, todoItem) {
      const idx = state.todos.indexOf(todoItem)
      state.todos.splice(idx, 1)
    },
    UPDATE_TODO: function (state, todoItem) {
      state.todos = state.todos.map((todo) => {
        if (todo === todoItem) {
          return {
            title: todoItem.title,
            isCompleted: !todoItem.isCompleted,
            date: todoItem.date
          }
        } else {
          return todo
        }
      })
    }

  },
  actions: {
    createTodo: function (context, todoItem) {

      context.commit('CREATE_TODO', todoItem)
    },
    deleteTodo: function ({ commit }, todoItem) {
      commit('DELETE_TODO', todoItem)
    },
    updateTodo: function ({ commit }, todoItem) {
      commit('UPDATE_TODO', todoItem)
    }
  },
  getters: {
    completedTodoCount: function (state) {
      return state.todos.filter((todo) => {
        return todo.isCompleted
      }).length
    }
  },
  modules: {
  }
})
