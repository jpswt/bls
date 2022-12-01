import { RouterProvider, Route, Outlet } from 'react-router-dom';

import Router from './Router';

function App() {
	return (
		<div className="App bg-gradient-to-b from-teal-500 to-sky-500 relative w-full h-full flex justify-center">
			<div className="w-[1024px]">
				<RouterProvider router={Router} />
			</div>
		</div>
	);
}

export default App;
