// import axios from 'axios'

const state = {
    todos: []
}

const getters = {
    allTodos: (state) => state.todos
}

const actions = {
    async fetchTodos({commit}) {
        await fetch('http://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(res => commit('setTodos', res))
        // const response = await axios.get('http://jsonplaceholder.typicode.com/todos')
        // commit('setTodos', response.data)
    },
    async addTodo({commit}, title) {
        await fetch('http://jsonplaceholder.typicode.com/todos',{
            method : "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                completed: false
            })
        }).then(res => res.json())
            .then(res => commit('newTodo', res))
    }

}

const mutations = {
    setTodos: (state, todos) => (state.todos = todos),
    newTodo: (state, todo) => state.todos.unshift(todo)
}

export default {
    state,
    getters,
    actions,
    mutations
}
