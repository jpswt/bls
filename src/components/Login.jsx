import React from 'react';

const Login = () => {
	return (
		<div className="flex flex-col h-full justify-center items-center">
			<h1>Login</h1>
			<form className="flex flex-col border-r2 bg-slate-100 w-[20rem] h-[10rem]">
				<input type="text" placeholder="Username" className="m-2" />
				<input type="password" placeholder="Password" className="m-2" />
				<button>Login</button>
			</form>
		</div>
	);
};

export default Login;
