// You will add code to this file
import React, { useState } from 'react';
import CommentInput from './CommentInput';
import Comment from './Comment';
import './Comment.css';

const CommentSection = props => {
	const [comment, setComment] = useState(props.comments);
	const [commentInput, setCommentInput] = useState('');
	// Add state for the comments

	const addComment = e => {
		e.preventDefault();
		setComment([
			...comment,
			{
				username: 'ewa',
				text: commentInput
			}
		]);
	};

	return (
		<div>
			{comment.map((data, index) => {
				return <Comment key={index} comment={data} />;
			})}
			{/* map through the comments data and return the Comment component */}
			<CommentInput
				setCommentInput={setCommentInput}
				comment={commentInput}
				submitComment={addComment}
			/>
		</div>
	);
};

export default CommentSection;
