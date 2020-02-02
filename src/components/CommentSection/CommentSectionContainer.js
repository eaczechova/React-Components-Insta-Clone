// You will add code to this file
import React, { useState } from 'react';
import CommentInput from './CommentInput';
import Comment from './Comment';
import './Comment.css';

const CommentSection = props => {
	const [comment, setComment] = useState(props.comments);

	// Add state for the comments
	return (
		<div>
			{comment.map((data, index) => {
				return <Comment key={index} comment={data} />;
			})}
			{/* map through the comments data and return the Comment component */}
			<CommentInput />
		</div>
	);
};

export default CommentSection;
