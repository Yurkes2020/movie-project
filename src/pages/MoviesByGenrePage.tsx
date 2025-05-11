import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import { moviesSliceActions } from "../store/slices/moviesSlice";
import { MoviesList } from "../components/MoviesList";

export const MoviesByGenrePage = () => {
	const { genreId } = useParams();
	const dispatch = useAppDispatch();
	const { movies } = useAppSelector(state => state.moviesSlice);

	useEffect(() => {
		if (genreId) {
			dispatch(moviesSliceActions.getMoviesByGenre(Number(genreId)));
		}
	}, [genreId, dispatch]);

	return <MoviesList movies={movies} />;
};
