import { useState } from 'react';
import axios from 'axios';

const AddPost = () => {
	const [postContent, setPostContent] = useState('');

	const AddNewPost = (e) => {
		e.preventDefault();

		if (postContent === '') {
			return;
		}

		axios
			.post("https://akademia108.pl/api/social-app/post/add", {
				content: postContent,
			})
			.then((res) => {
				console.log(res);
			});
	};

	return (
		<form>
			<textarea
				onChange={(e) => {
					setPostContent(e.target.value);
				}}
			></textarea>
			<button
				onClick={(e) => {
					AddNewPost(e);
				}}
			>
				Click
			</button>
		</form>
	);
};

export default AddPost;
