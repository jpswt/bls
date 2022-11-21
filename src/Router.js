import {
	createBrowserRouter,
	RouterProvider,
	Route,
	Outlet,
} from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import SinglePost from './components/SinglePost';
import Compose from './components/Compose';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const PageLayout = () => {
	return (
		<>
			<Navbar />
			<Outlet />
			<Footer />
		</>
	);
};

const Router = createBrowserRouter([
	{
		path: '/',
		element: <PageLayout />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/single',
				element: <SinglePost />,
			},
			{
				path: '/compose',
				element: <Compose />,
			},
		],
	},
	{
		path: '/register',
		element: <Register />,
	},
	{
		path: '/login',
		element: <Login />,
	},
]);

export default Router;
