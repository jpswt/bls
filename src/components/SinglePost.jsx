import React from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import Edit from '../assets/edit.png';
import Delete from '../assets/delete.png';

const SinglePost = () => {
	return (
		<div className="single flex gap-[50px] mt-10">
			<div className="content flex-5 flex flex-col gap-15 text-white h-full">
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
					<div className="edit flex gap-5 justify-center">
						<Link to={`/compose?edit=1`}>
							<img className="w-10 h-10" src={Edit} alt="" />
						</Link>
						<img className="w-10 h-10" src={Delete} alt="" />
					</div>
				</div>
				<h1 className=" text-5xl mt-5">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
					tenetur!
				</h1>
				<p className=" text-lg my-5 text-justify">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
					veniam rem doloribus minima iure porro, eos architecto ducimus autem
					quos earum asperiores voluptatem cum inventore sit reprehenderit
					voluptas nihil distinctio eligendi neque aliquid ullam minus? Officiis
					iure quis nam esse maiores cum dolorum, magnam expedita maxime
					quibusdam blanditiis dicta iusto! Lorem ipsum dolor sit amet,
					consectetur adipisicing elit. Et ex praesentium corrupti quibusdam
					iure perferendis, necessitatibus, repudiandae qui harum quasi illum
					assumenda maiores natus repellendus nam omnis tempore veritatis fugit
					facilis, numquam eaque maxime ullam provident officiis.
				</p>
				<p className="text-lg my-5 text-justify">
					Placeat quod nulla vero dicta voluptatem veniam saepe dolore est, ipsa
					vel enim sit cumque. Molestias hic nobis quasi tempora quibusdam
					repudiandae nesciunt, libero qui at fugiat minima dicta quaerat, nam
					iusto atque obcaecati esse ab voluptate beatae laborum maiores!
					Ducimus possimus voluptatem voluptate ut molestias veritatis iure!
					Deserunt, nulla non optio ut velit, ullam dolor reprehenderit, culpa
					blanditiis ducimus porro facilis. Minus molestias, doloremque tempore
					temporibus quas odio iure vitae commodi repudiandae voluptas
					consequatur ratione ad nulla debitis distinctio magnam magni
					cupiditate iusto totam numquam est. Illum corporis error tempore, nisi
					ducimus at ipsum, dolores fuga harum odit non quasi expedita repellat
					nam quaerat necessitatibus veritatis odio nobis libero facere sequi
					dignissimos ab. Vero, doloremque quasi, distinctio velit explicabo
					excepturi voluptate placeat eligendi alias soluta perferendis.
					Possimus qui error, quibusdam voluptatem nulla aspernatur. Repellendus
					exercitationem optio explicabo doloremque iure ea dolorem
					necessitatibus! Natus ipsum assumenda sed quaerat in perspiciatis
					eveniet ab, ullam laborum! Quas quisquam sint consequuntur mollitia
					quod esse beatae eveniet!
				</p>
			</div>
			<Menu />
		</div>
	);
};

export default SinglePost;
