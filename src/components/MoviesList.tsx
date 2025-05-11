import { MoviesListCard } from "./MoviesListCard";
import type {MovieType} from "../types/movieType.ts";

type Props ={
	movies: MovieType[] ;
}

export const MoviesList = ({ movies }: Props) => {
	return (
		<div >
			{movies.map(movie => (
				<MoviesListCard key={movie.id} movie={movie} />
			))}
		</div>
	);
};
