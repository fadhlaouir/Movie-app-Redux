import { createStore, combineReducers } from 'redux'

export const addReducer = (state = { movies: [] }, action) => {
    switch (action.type) {
        case 'ADD_MOVIE':
            return { ...state, movies: state.movies.concat(action.movie) }

        case 'UPDATE_MOVIE':
            return state.movies.map(m => {
                if (m.id === action.id) {
                    return action.movie
                }
                return m
            })

        case 'DELETE_MOVIE':
            return {
                movies: state.movies.filter(m => {
                    if (m.id === action.id) {
                        return false
                    }
                    return true
                })
            }
        default:
            return state
    }

}

export const searchReducer = (state = '', action) => {
    if (action.type === 'FILTER') {
        return action.newTitle
    }
    return state
}



/*.................................................................................................*/

const store = createStore(combineReducers({
    searchReducer,
    addReducer,

}),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

)


store.dispatch({
    type: 'ADD_MOVIE',
    movie: {
        id: '69',
        image: 'https://yts.am/assets/images/movies/creed_ii_2018/medium-cover.jpg',
        imageName: 'CREDII',
        year: 2018,
        title: 'CREDII'
    }
})





console.log(store.getState())
export default store