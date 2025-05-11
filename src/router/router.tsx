import { createBrowserRouter } from 'react-router-dom';
import {MainLayout} from "../layout/MainLayout.tsx";
import {MoviesPage} from "../pages/MoviesPage.tsx";
import {MovieByIdPage} from "../pages/MovieByIdPage.tsx";
import {Layout} from "../layout/Layout.tsx";
import {MoviesByGenrePage} from "../pages/MoviesByGenrePage.tsx";


export const router = createBrowserRouter([
	{
		path: '',
		element: <MainLayout />,
		children: [
			{
				path: '/',
				element: <Layout />,
				children: [
					{ index: true, element: <MoviesPage /> },
					{ path: 'genre/:genreId', element: <MoviesByGenrePage /> },
				],
			},
			{ path: 'movie/:id', element: <MovieByIdPage /> }, // окремо

		],
	},
]);
