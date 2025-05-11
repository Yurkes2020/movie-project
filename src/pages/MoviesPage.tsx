import { useEffect } from "react";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import { moviesSliceActions } from "../store/slices/moviesSlice";
import { MoviesList } from "../components/MoviesList";
import { Pagination } from "../components/Pagination"; // не забудь додати цей компонент

export const MoviesPage = () => {
	const dispatch = useAppDispatch();
	const { movies, currentPage, totalPages } = useAppSelector(state => state.moviesSlice);


	useEffect(() => {
		dispatch(moviesSliceActions.getMovies(currentPage));
	}, [dispatch, currentPage]);

	const handlePageChange = (page: number) => {
		dispatch(moviesSliceActions.setPage(page));
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};


	return (
		<div className="p-4">
			<MoviesList movies={movies} />
			<Pagination
				currentPage={currentPage}
				totalPages={totalPages}
				onPageChange={handlePageChange}
			/>
		</div>
	);
};
