import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Compose = () => {
	const [value, setValue] = useState('');

	return (
		<div className=" my-10 flex gap-10 ">
			<div className="content flex-5 flex flex-col gap-3 ">
				<input
					className="p-2 border-2 border-gray-200"
					type="text"
					name="title"
					id="title"
					placeholder="Title"
				/>
				<div className="editContainer h-[300px] overflow-scroll border-2 border-gray-200">
					<ReactQuill
						className="h-full"
						theme="snow"
						value={value}
						onChange={setValue}
					/>
				</div>
			</div>
			<div className="menu flex flex-col gap-10 flex-2">
				<div className="item border-gray-200 border-2 p-2 flex-1">
					<h1 className="text-2xl">Publish</h1>
					<span>
						<b>Status: </b> Draft
					</span>
					<span>
						<b>Visibility: </b> Public
					</span>
					<input className=" hidden" type="file" id="file" name="file" />
					<label className=" block underline text-white" htmlFor="file">
						Upload Image
					</label>
					<div className="buttons flex gap-5  ">
						<button className=" border-2 border-white px-2 text-teal-500 bg-white">
							Save as a Draft
						</button>
						<button className=" border-2 border-white text-white px-2">
							Update
						</button>
					</div>
				</div>
				<div className="item border-gray-200 border-2 p-2 flex-1 flex flex-col justify-center items-start">
					<h1 className="text-2xl">Category</h1>
					<div>
						<input type="radio" name="cat" value="art" id="art" />
						<label className="pl-2" htmlFor="art">
							Art
						</label>
					</div>
					<div>
						<input type="radio" name="cat" value="science" id="science" />
						<labe className="pl-2" htmlFor="science">
							Science
						</labe>
					</div>
					<div>
						<input type="radio" name="cat" value="tech" id="tech" />
						<label className="pl-2" htmlFor="tech">
							Tech
						</label>
					</div>
					<div>
						<input type="radio" name="cat" value="movies" id="movies" />
						<label className="pl-2" htmlFor="movies">
							Movies
						</label>
					</div>
					<div>
						<input type="radio" name="cat" value="Design" id="Design" />
						<label className="pl-2" htmlFor="Design">
							Design
						</label>
					</div>
					<div>
						<input type="radio" name="cat" value="food" id="food" />
						<label className="pl-2" htmlFor="food">
							Food
						</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Compose;
