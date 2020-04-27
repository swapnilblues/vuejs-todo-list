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
    }

}

const mutations = {
    setTodos: (state, todos) => (state.todos = todos)
}

export default {
    state,
    getters,
    actions,
    mutations
}
