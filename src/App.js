import { RouterProvider, Route, Outlet } from 'react-router-dom';

import Router from './Router';

function App() {
	return (
		<div className="App">
			<div className=" bg-stone-400 relative w-full h-screen">
				<RouterProvider router={Router} />
			</div>
		</div>
	);
}

export default App;
