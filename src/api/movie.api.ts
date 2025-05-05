import axios from 'axios';
import type {Movie} from "../types/movie.types.ts";


const API_KEY = 'c14bfeaa94946e9ea8c19389f6842e46';
const BASE_URL = 'https://api.themoviedb.org/3';

export const moviesAPI = {
	async getPopularMovies(page = 1): Promise<Movie[]> {
		const response = await axios.get(`${BASE_URL}/movie/now_playing`, {
			params: {
				api_key: API_KEY,
				language: 'uk-UA',
				page,
			},
		});
		return response.data.results;
	},
};
