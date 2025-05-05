import {useEffect, useState} from "react";
import {moviesAPI} from "../api/movie.api.ts";
import type {Movie} from "../types/movie.types.ts";

export const MainLayout = ()=>{
	const [movies, setMovies] = useState<Movie[]>([])
	useEffect(() => {
		moviesAPI.getPopularMovies().then(res => {
			console.log(res)
			setMovies(res)
		} )
	}, []);

	return <div>
		{movies.map(movie => <img key={movie.id} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />)}

	</div>
}