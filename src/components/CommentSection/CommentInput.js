import React from 'react';

const CommentInput = props => {
	return (
		<form className="comment-form" onSubmit={props.submitComment}>
			<input
				type="text"
				value={props.comment}
				placeholder="Add comment... "
				onChange={e => props.setCommentInput(e.target.value)}
			/>
		</form>
	);
};

export default CommentInput;
