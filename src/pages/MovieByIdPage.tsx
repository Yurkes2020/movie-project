import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import { moviesSliceActions } from "../store/slices/moviesSlice";
import { StarsRating } from "../components/StarsRating.tsx";

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

	if (isLoading) return <div className="p-4 text-center">Loading...</div>;
	if (!movie) return <div className="p-4 text-center">No movie found.</div>;

	return (
		<div className="p-4 space-y-4">
			<img
				src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
				alt={movie.title}
				className="w-full max-w-sm mx-auto rounded-lg shadow-lg"
			/>
			<h1 className="text-2xl font-semibold">{movie.title}</h1>
			<StarsRating rating={movie.vote_average} />
			<p className="text-gray-700">{movie.overview}</p>
		</div>
	);
};
