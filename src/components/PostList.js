// PostList.js
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removePost, editPost } from '../actions/posts'
import './postlist.css'


const PostList = () => {
	const posts = useSelector(state => state.posts)
	const dispatch = useDispatch()
	const [editingPostId, setEditingPostId] = useState(null)
	const [editedText, setEditedText] = useState('')

	const handleEdit = (postId, currentText) => {
		setEditingPostId(postId)
		setEditedText(currentText)
	}

	const handleSaveEdit = () => {
		dispatch(editPost(editingPostId, editedText))
		setEditingPostId(null)
		setEditedText('')
	}

	return (
		<div className='post-list-container'>
			{posts.map(post => (
				<div key={post.id} className='post'>
					{editingPostId === post.id ? (
						<>
							<textarea
								value={editedText}
								onChange={e => setEditedText(e.target.value)}
							/>
							<div className='buttons'>
								<button className='button save-button' onClick={handleSaveEdit}>
									Сохранить
								</button>
							</div>
						</>
					) : (
						<>
							<p>{post.text}</p>
							<div className='buttons'>
								<button
									className='button edit-button'
									onClick={() => handleEdit(post.id, post.text)}
								>
									Редактировать
								</button>
								<button
									className='button delete-button'
									onClick={() => dispatch(removePost(post.id))}
								>
									Удалить
								</button>
							</div>
						</>
					)}
				</div>
			))}
		</div>
	)
}

export default PostList
