import axios from 'axios';
import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

const API_URL = 'https://jsonplaceholder.typicode.com'

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    todos: [
    ]
  },
  mutations: {
    CREATE_TODO: function (state, todoItem) {    
      state.todos.push(todoItem)
    },
    DELETE_TODO: function (state, todoId) {
      state.todos = state.todos.filter((todo) => {
        return !(todo.id === todoId)
      })
    },
    UPDATE_TODO: function (state, todoItem) {
      state.todos = state.todos.map((todo) => {
        if (todo.id === todoItem.id) {
          return {
            title: todo.title,
            completed: todoItem.completed,
            id: todo.id,
            userId: todoItem.userId
          }
        } else {
          return todo
        }
      })
    },
    GET_TODOS: function (state, data) {
      state.todos = data
    }
  
  },
  actions: {
    createTodo: function (context, todoItem) {
      axios.post(
        `${API_URL}/todos`,
        todoItem
      )
        .then(res => {
          context.commit('CREATE_TODO', res.data)
        })
    },
    deleteTodo: function ({ commit }, todoId) {
      axios.delete(`${API_URL}/posts/${todoId}`)
        .then(() => {
          commit('DELETE_TODO', todoId)
        })
    },
    updateTodo: function ({ commit }, {id, completed}) {
      console.log(id, completed)
      axios.put(`${API_URL}/todos/${id}`, { completed: !completed})
        .then(res => {
          commit('UPDATE_TODO', res.data)
        })
    },
    getTodos: function({ commit }) {
      axios.get(`${API_URL}/todos`)
        .then((res) => {
          commit('GET_TODOS', res.data)
        })
    }
  },
  getters: {
    completedTodoCount: function (state) {
      return state.todos.filter((todo) => {
        return todo.isCompleted
      }).length
    },
    uncompletedTodoCount: function (state) {
      return state.todos.filter((todo) => {
        return !todo.isCompleted
      }).length
    },
    allTodoCount: function (state) {
      return state.todos.length
    },
  },
  modules: {
  }
})
