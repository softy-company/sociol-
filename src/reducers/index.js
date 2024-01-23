// index.js
import { combineReducers } from 'redux'
import postsReducer from './posts'

const rootReducer = combineReducers({
	posts: postsReducer
	// Добавьте сюда другие редюсеры при необходимости
})

export default rootReducer
