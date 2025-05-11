import { useEffect } from "react";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import { moviesSliceActions } from "../store/slices/moviesSlice";
import { MoviesList } from "../components/MoviesList";

export const MoviesPage = () => {
	const dispatch = useAppDispatch();
	const { movies } = useAppSelector(state => state.moviesSlice);

	useEffect(() => {
		dispatch(moviesSliceActions.getMovies());
	}, [dispatch]);

	return <MoviesList movies={movies} />;
};


