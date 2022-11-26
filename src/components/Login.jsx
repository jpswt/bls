import React from 'react';

const Login = () => {
	return (
		<div className="relative flex flex-col h-full justify-center items-center">
			<h1>Login</h1>
			<form className="flex flex-col bg-white w-[20rem] h-[15rem] p-6 rounded-md border-teal-600 border-2 ">
				<input
					type="text"
					placeholder="Username"
					className="m-4 px-4 py-2 bg-slate-200"
				/>
				<input
					type="password"
					placeholder="Password"
					className="m-4 px-4 py-2 bg-slate-200"
				/>
				<button>Login</button>
			</form>
		</div>
	);
};

export default Login;
