//Complete the necessary code in this file
import React from 'react';
import Post from './Post';
import './Posts.css';

// console.log('post page', data.username);

// pass the data from App.js down as props then map through the data

const PostsPage = props => {
	console.log(props.searchTerm);
	const arrayOfPosts = props.postData.map((data, index) => {
		return <Post key={index} post={data} />;
	});

	return <div className="posts-container-wrapper">{arrayOfPosts}</div>;
};

export default PostsPage;
