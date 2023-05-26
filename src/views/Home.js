import './Home.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Post from '../components/Post';
import AddPost from '../components/AddPost';



const Home = (props) => {
	const [posts, setPosts] = useState([]);

	const getLatestPosts = () => {
		axios
			.post('http://akademia108.pl/api/social-app/post/latest')
			.then((res) => {
				// console.log(res);
				setPosts(res.data);
			});
	};

	const getNextPosts = () => {
		axios
			.post('https://akademia108.pl/api/social-app/post/older-then', {
				date: posts[posts.length - 1].created_at,
			})
			.then((res) => {
				setPosts(posts.concat(res.data))
			});
	};

	useEffect(() => {
		getLatestPosts();
	}, [props.user]);

	return (
		<div className="home">
			<AddPost/>
			<div className="post-lists">
				{posts.map((post) => {
					return <Post key={post.id} post={post} />;
				})}
			</div>
			<button onClick={getNextPosts}>Load more</button>
		</div>
	);
};

export default Home;
