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
		<div className="p-4 flex flex-wrap gap-2">
			{genres.map((genre) => (
				<Link
					to={`/genre/${genre.id}`}
					key={genre.id}
					className="bg-gray-700 text-white py-1 px-4 rounded-full text-sm hover:bg-gray-600 transition-colors"
				>
					{genre.name}
				</Link>
			))}
		</div>
	);
};
