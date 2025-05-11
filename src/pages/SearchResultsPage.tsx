import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import { moviesSliceActions } from "../store/slices/moviesSlice";
import { MoviesList } from "../components/MoviesList";

export const SearchResultsPage = () => {
	const [searchParams] = useSearchParams();
	const query = searchParams.get("query") || "";
	const dispatch = useAppDispatch();
	const { searchResults } = useAppSelector((state) => state.moviesSlice);

	useEffect(() => {
		if (query) {
			dispatch(moviesSliceActions.searchMovies(query));
		}
	}, [dispatch, query]);

	if (!searchResults.length) {
		return <div className="p-4 text-center text-gray-500">Нічого не знайдено</div>;
	}

	return (
		<div className="p-4">
			<h2 className="text-xl font-semibold mb-4">
				Результати пошуку: <span className="font-bold text-primary">{query}</span>
			</h2>
			<MoviesList movies={searchResults} />
		</div>
	);
};
