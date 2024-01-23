// store.js
import { createStore, applyMiddleware } from 'redux'
import { withExtraArgument } from 'redux-thunk'
import rootReducer from './reducers'

const store = createStore(
	rootReducer,
	getInitialState(),
	applyMiddleware(withExtraArgument())
)

function getInitialState() {
	const postsString = localStorage.getItem('posts')
	return {
		posts: postsString ? JSON.parse(postsString) : []
	}
}

export default store
