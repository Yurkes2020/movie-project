import type { MovieType } from "../types/movieType.ts";
import { MoviesListCard } from "./MoviesListCard";

type Props = {
	movies: MovieType[];
};

export const MoviesList = ({ movies }: Props) => {
	return (
		<div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
			{movies.map((movie) => (
				<MoviesListCard key={movie.id} movie={movie} />
			))}
		</div>
	);
};
