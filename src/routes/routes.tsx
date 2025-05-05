import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout.tsx";

export const router = createBrowserRouter(
	[
		{
			path: "/", element:<MainLayout/>
			// children: [
			// 	{
			// 		index: true , element: <MoviesPage/>
			// 	},
			// 	{
			// 		path: 'genres', element: <GenrePage/>
			// 	},
			// 	{
			// 		path: 'movies/:id', element: <MovieById/>
			// 	}
			// ]
		}
	]
)