import React from 'react';
import Edit from '../assets/edit.png';
import Delete from '../assets/delete.png';

const SinglePost = () => {
	return (
		<div className="single flex gap-[50px]">
			<div className="content flex-5 text-white">
				<img
					className="w-full h-[250px] object-cover"
					src="https://images.unsplash.com/photo-1588591795084-1770cb3be374?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
					alt=""
				/>
				<div className="user flex items-center gap-5 mt-1">
					<img
						className="w-[60px] h-[60px] rounded-[50%] object-cover"
						src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
						alt=""
					/>
					<div className="info">
						<span className=" font-bold text-base">John</span>
						<p className=" text-sm">Posted 2 days ago</p>
					</div>
					<div className="edit flex gap-5">
						<img src={Edit} alt="" />
						<img src={Delete} alt="" />
					</div>
				</div>
			</div>
			<div className="menu flex-2">Menu</div>
		</div>
	);
};

export default SinglePost;
