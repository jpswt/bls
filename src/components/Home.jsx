import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	const posts = [
		{
			id: 1,
			title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime iusto ab, repellendus consectetur numquam magni.',
			img: 'https://images.unsplash.com/photo-1588591795084-1770cb3be374?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
		},
		{
			id: 2,
			title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime iusto ab, repellendus consectetur numquam magni.',
			img: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aG9iYmllc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
		},
		{
			id: 3,
			title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime iusto ab, repellendus consectetur numquam magni.',
			img: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG9iYmllc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
		},
		{
			id: 4,
			title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime iusto ab, repellendus consectetur numquam magni.',
			img: 'https://images.unsplash.com/photo-1586779161268-51d3e65d20fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGhvYmJpZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
		},
	];

	return (
		<div className="home text-white ">
			<div className="posts mt-12 flex flex-col justify-center items-center">
				{posts.map((post, id) => (
					<div key={id} className="post flex gap-24 mb-20 ">
						<div className="img flex-1">
							<img
								src={post.img}
								alt=""
								className=" w-full h-[300px] object-cover"
							/>
						</div>
						<div className="content flex-2 flex flex-col justify-between h-[250px] ">
							<Link className="link" to={`/post/${post.id}`}>
								<h1 className="text-4xl">{post.title}</h1>
							</Link>
							<p className=" text-lg">{post.desc}</p>
							<button className="border-2 border-white px-4 py-2 w-fit hover:bg-white hover:text-teal-500">
								Read More
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Home;
