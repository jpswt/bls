import React from 'react';

const Login = () => {
	return (
		<div className="flex flex-col h-full justify-center items-center">
			<h1>Login</h1>
			<form>
				<input type="text" placeholder="Username" />
				<input type="password" placeholder="Password" />
				<button>Login</button>
			</form>
		</div>
	);
};

export default Login;
