import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
	return (
		<div className="relative flex flex-col h-screen justify-center items-center">
			<h1 className=" font-bold text-4xl font-sans text-white mb-2 ">
				Blog Me
			</h1>
			<form className="flex flex-col items-center bg-white w-[20rem] h-[18rem] p-6 rounded-md border-teal-600 border-2 ">
				<input
					type="text"
					placeholder="Username"
					className="m-4 px-1 py-2 bg-none border-b-2 outline-none placeholder:text-gray-500 text-gray-500 "
				/>
				<input
					type="password"
					placeholder="Password"
					className="m-2 px-1 py-2 bg-none border-b-2 outline-none placeholder:text-gray-500 text-gray-500"
				/>
				<button className="border-2 border-teal-600 rounded-md  bg-teal-500 w-[6rem] text-center m-3 py-2 text-white hover:bg-teal-400  ">
					Login
				</button>
				<p>Error</p>
				<span className=" text-sm">
					Don't have an account?{' '}
					<Link to="/register" className=" underline">
						Register Here
					</Link>
				</span>
			</form>
		</div>
	);
};

export default Login;
