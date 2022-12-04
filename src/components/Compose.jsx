import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Compose = () => {
	const [value, setValue] = useState('');

	return (
		<div className=" mt-10 flex gap-10 ">
			<div className="content flex-5">
				<input type="text" name="title" id="title" placeholder="Title" />
				<div className="editContainer">
					<ReactQuill theme="snow" value={value} onChange={setValue} />
				</div>
			</div>
			<div className="menu flex flex-col gap-10 flex-2">
				<div className="item">
					<h1>Publish</h1>
					<span>
						<b>Status: </b> Draft
					</span>
					<span>
						<b>Visibility: </b> Public
					</span>
					<input className=" hidden" type="file" id="file" name="file" />
					<label className=" block " htmlFor="file">
						Upload Image
					</label>
					<div className="buttons">
						<button>Save as a Draft</button>
						<button>Update</button>
					</div>
				</div>
				<div className="item">
					<h1>Category</h1>
					<input type="radio" name="cat" value="art" id="art" />
				</div>
			</div>
		</div>
	);
};

export default Compose;
