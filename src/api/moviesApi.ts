import axios from 'axios';

const API_TOKEN = import.meta.env.VITE_API_TOKEN;
const API_URL = import.meta.env.VITE_API_URL;

const headers = {
	accept: 'application/json',
	Authorization: `Bearer ${API_TOKEN}`,
};

export const moviesApi = {
	async fetchMovies() {
		try {
			const response = await axios.get(`${API_URL}/discover/movie?language=en-US&page=1&sort_by=popularity.desc`, { headers });
			return response.data.results;
		} catch (error) {
			console.error('Error fetching movies:', error);
			throw error;
		}
	},

	async fetchMovieById(id: number) {
		try {
			const response = await axios.get(`${API_URL}/movie/${id}`, { headers });
			return response.data;
		} catch (error) {
			console.error('Error fetching movie by ID:', error);
			throw error;
		}
	},

	async fetchGenres() {
		try {
			const response = await axios.get(`${API_URL}/genre/movie/list?language=en`, { headers });
			return response.data.genres;
		} catch (error) {
			console.error('Error fetching genres:', error);
			throw error;
		}
	},

	async fetchMoviesByGenre(genreId: number) {
		try {
			const response = await axios.get(`${API_URL}/discover/movie?with_genres=${genreId}&language=en-US&page=1`, { headers });
			return response.data.results;
		} catch (error) {
			console.error('Error fetching movies by genre:', error);
			throw error;
		}
	},


	async searchMovies(query: string) {
		try {
			const response = await axios.get(
				`${API_URL}/search/movie?query=${encodeURIComponent(query)}&language=en-US&page=1&include_adult=false`,
				{ headers }
			);
			return response.data.results;
		} catch (error) {
			console.error('Error searching movies:', error);
			throw error;
		}
	},
};
