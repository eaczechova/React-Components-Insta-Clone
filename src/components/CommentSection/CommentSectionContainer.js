// You will add code to this file
import React, { useState } from 'react';
import CommentInput from './CommentInput';
import Comment from './Comment';
import './Comment.css';

const CommentSection = props => {
	let comments = props.comments;
	const [comment, setComment] = useState(comments);

	// Add state for the comments
	return (
		<div>
			{comment
				? comment.map((data, index) => {
						return <Comment key={index} comment={data} />;
				  })
				: null}

			{/* map through the comments data and return the Comment component */}
			<CommentInput />
		</div>
	);
};

export default CommentSection;
