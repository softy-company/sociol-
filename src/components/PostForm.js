// PostForm.js
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPost } from '../actions/posts'

const PostForm = () => {
	const dispatch = useDispatch()
	const [text, setText] = useState('')

	const handleSubmit = e => {
		e.preventDefault()
		const newPost = {
			id: new Date().getTime(),
			text
		}
		dispatch(addPost(newPost))
		setText('')
	}

	return (
		<form onSubmit={handleSubmit}>
			<textarea
				placeholder='Что нового?'
				value={text}
				onChange={e => setText(e.target.value)}
			/>
			<button type='submit'>Опубликовать</button>
		</form>
	)
}

export default PostForm
