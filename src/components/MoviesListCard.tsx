import { Link } from "react-router-dom";
import type { MovieType } from "../types/movieType.ts";
import { PosterPreview } from "./PosterPreview";
import { StarsRating } from "./StarsRating.tsx";
import {MovieInfo} from "./MovieInfo.tsx";

type Props = {
	movie: MovieType;
};

export const MoviesListCard = ({ movie }: Props) => {

	const {poster_path, title, vote_average,overview}= movie;
	return (

			<div >
				<Link to={`/movie/${movie.id}`}>
					<PosterPreview posterPath={poster_path} title={title} />
				</Link>
				<div >
					<MovieInfo title={title} overview={overview}/>
					<StarsRating rating={vote_average} />
				</div>
			</div>

	);
};
