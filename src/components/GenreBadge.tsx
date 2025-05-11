import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import { moviesSliceActions } from "../store/slices/moviesSlice";

const { getGenres } = moviesSliceActions;

export const GenresBadge = () => {
	const dispatch = useAppDispatch();
	const { genres } = useAppSelector((state) => state.moviesSlice);

	useEffect(() => {
		dispatch(getGenres());
	}, [dispatch]);

	return (
		<div >
			{genres.map((genre) => (
				<Link
					to={`/genre/${genre.id}`}
					key={genre.id}
				>
					{genre.name}
				</Link>
			))}
		</div>
	);
};
