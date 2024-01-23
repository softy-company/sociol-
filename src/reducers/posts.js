// posts.js
const postsReducer = (state = getPostsFromLocalStorage(), action) => {
	switch (action.type) {
		case 'ADD_POST':
			const newState = [...state, action.post]
			savePostsToLocalStorage(newState)
			return newState

		case 'REMOVE_POST':
			const updatedState = state.filter(post => post.id !== action.postId)
			savePostsToLocalStorage(updatedState)
			return updatedState

		case 'EDIT_POST':
			const editedState = state.map(post =>
				post.id === action.postId ? { ...post, text: action.newText } : post
			)
			savePostsToLocalStorage(editedState)
			return editedState

		default:
			return state
	}
}

const getPostsFromLocalStorage = () => {
	const postsString = localStorage.getItem('posts')
	return postsString ? JSON.parse(postsString) : []
}

const savePostsToLocalStorage = posts => {
	localStorage.setItem('posts', JSON.stringify(posts))
}

export default postsReducer
