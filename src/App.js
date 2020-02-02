/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React, { useState, useEffect } from 'react';
import './App.css';
import dummyData from './dummy-data.js';
import SearchBar from './components/SearchBar/SearchBarContainer';
import PostsPage from './components/PostsContainer/PostsPage';
import CommentSection from './components/CommentSection/CommentSectionContainer';

const App = () => {
	let initialDate = dummyData;
	const [postData, setPostData] = useState(initialDate);
	const [commentData, setCommentData] = useState(dummyData);

	const [searchTerm, setSearchTerm] = useState('');

	const filtered = postData.filter(search => {
		if (search.username.indexOf(searchTerm) > -1) {
			return search;
		}
	});

	// setPostData(initialDate);
	// console.log('filtered', filtered);

	// set up state for the dummy data and pass to your PostsPage
	return (
		<div className="App">
			<SearchBar search={setSearchTerm} />
			<PostsPage postData={postData} searchTerm={searchTerm} />
			{/* <CommentSection commentData={commentData} /> */}
			{/* Add components here  and pass props where appropriate */}
		</div>
	);
};

export default App;
