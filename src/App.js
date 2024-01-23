// App.js
import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import PostForm from './components/PostForm'
import PostList from './components/PostList'

function App() {
	return (
			<div>
				<h1>Социальная сеть</h1>
        <PostForm/>
        <PostList/>
			</div>
	)
}

export default App
