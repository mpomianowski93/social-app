import './AppNav.css';

import axios from 'axios';

import { Link } from 'react-router-dom';

const AppNav = (props) => {

	const handleLogout = (e) => {
		e.preventDefault();

		axios
			.post('http://akademia108.pl/api/social-app/user/logout')

			.then((res) => {
                console.log(res.data)
				if (res.data.message) {
					props.setUser(null);
					localStorage.setItem('user', null);
				}
			});
	};

	return (
		<nav className="mainNav">
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				{!props.user && (
					<li>
						<Link to="/login">Login</Link>
					</li>
				)}
				{!props.user && (
					<li>
						<Link to="/signup">SingUp</Link>
					</li>
				)}
				{props.user && (
					<li>
						<Link to="/" onClick={handleLogout}>Logout</Link>
					</li>
				)}
			</ul>
		</nav>
	);
};

export default AppNav;
