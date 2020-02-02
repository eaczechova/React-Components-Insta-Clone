//Complete the necessary code in this file
import React from 'react';
import Post from './Post';
import './Posts.css';

// pass the data from App.js down as props then map through the data

const PostsPage = props => {
	const filteredPosts = props.postData.filter(data => {
		if (data.username.includes(props.searchTerm)) {
			return data;
		}
	});

	const arrayOfPosts = props.postData.map((data, index) => {
		return <Post key={index} post={data} />;
	});

	const arrayOfFilteredPosts = filteredPosts.map((data, index) => {
		return <Post key={index} post={data} />;
	});

	return (
		<div className="posts-container-wrapper">
			{arrayOfPosts > arrayOfFilteredPosts ? arrayOfFilteredPosts : arrayOfPosts}
		</div>
	);
};

export default PostsPage;
