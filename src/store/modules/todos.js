import axios from 'axios'

const state = {
    todos: []
}

const getters = {
    allTodos: (state) => state.todos
}

const actions = {
     fetchTodos({commit}) {
         fetch('http://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(res => commit('setTodos', res))

    },
     addTodo({commit}, title) {
         fetch('http://jsonplaceholder.typicode.com/todos',{
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
    },
    async deleteTodo({commit}, id) {

        // fetch(`http://jsonplaceholder.typicode.com/todos/${id}`,{
        //     method : "DELETE"
        // }).then(() => commit('removeTodo', id))
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
        commit('removeTodo',id)
    }





}

const mutations = {
    setTodos: (state, todos) => (state.todos = todos),
    newTodo: (state, todo) => state.todos.unshift(todo),
    removeTodo: (state,id) => {
        console.log("Here",id)
        state.todos = state.todos.filter(todo => todo.id !== id)
    }

}

export default {
    state,
    getters,
    actions,
    mutations
}
