import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {useAppDispatch} from "../hooks/useAppDispatch.ts";
import {useAppSelector} from "../hooks/useAppSelector.ts";
import {moviesSliceActions} from "../store/slices/moviesSlice.tsx";
import {StarsRating} from "../components/StarsRating.tsx";


const { getMovieById } = moviesSliceActions;

export const MovieByIdPage = () => {
	const { id } = useParams();
	const dispatch = useAppDispatch();

	const { movie, isLoading } = useAppSelector((state) => state.moviesSlice);

	useEffect(() => {
		if (id) {
			dispatch(getMovieById(Number(id)));
		}
	}, [id, dispatch]);


	if (isLoading) return <div>Loading...</div>
	if (!movie) return <div>No movie found.</div>;

	return (
		<div>
			<img
				src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
				alt={movie.title}
			/>
			<h1>{movie.title}</h1>
			<StarsRating rating={movie.vote_average} />
			<p>{movie.overview}</p>
		</div>
	);
};
