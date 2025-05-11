import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import { moviesSliceActions } from "../store/slices/moviesSlice";
import { MoviesList } from "../components/MoviesList";
import { Pagination } from "../components/Pagination"; // переконайся, що компонент існує

export const MoviesByGenrePage = () => {
	const { genreId } = useParams();
	const dispatch = useAppDispatch();
	const { movies, currentPage, totalPages } = useAppSelector(state => state.moviesSlice);


	useEffect(() => {
		if (genreId) {
			dispatch(moviesSliceActions.getMoviesByGenre({ genreId: Number(genreId), page: currentPage }));
		}
	}, [genreId, currentPage, dispatch]);

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
