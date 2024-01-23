// posts.js
export const addPost = post => ({
	type: 'ADD_POST',
	post
})

export const removePost = postId => ({
	type: 'REMOVE_POST',
	postId
})
// posts.js
export const editPost = (postId, newText) => ({
  type: 'EDIT_POST',
  postId,
  newText
});

