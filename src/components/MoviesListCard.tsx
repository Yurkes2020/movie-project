import { Link } from "react-router-dom";
import type { MovieType } from "../types/movieType.ts";
import { PosterPreview } from "./PosterPreview";
import { StarsRating } from "./StarsRating.tsx";
import { MovieInfo } from "./MovieInfo.tsx";

type Props = {
	movie: MovieType;
};

export const MoviesListCard = ({ movie }: Props) => {
	const { poster_path, title, vote_average, overview } = movie;

	return (
		<div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
			<Link to={`/movie/${movie.id}`}>
				<PosterPreview posterPath={poster_path} title={title} />
			</Link>
			<div className="p-4">
				<MovieInfo title={title} overview={overview} />
				<StarsRating rating={vote_average} />
			</div>
		</div>
	);
};
