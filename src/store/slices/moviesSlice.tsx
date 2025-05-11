import type {MovieType} from "../../types/movieType.ts";
import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {MovieByIdType} from "../../types/movieByIdType.ts";
import type {Genre} from "../../types/genreType.ts";

type moviesSliceType = {
	movies: MovieType[];
	movie: MovieByIdType | null;
	genres: Genre[];
	movieGenres: Genre[];
	isLoading: boolean;
};

const initialState: moviesSliceType = {movies: [], movie: null,genres: [],movieGenres: [], isLoading: false};

const getMovies = createAsyncThunk('moviesSlice/getMovies', async (_, thunkApi) => {
	const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMTRiZmVhYTk0OTQ2ZTllYThjMTkzODlmNjg0MmU0NiIsIm5iZiI6MS42NjUwNDQ2MDY5MDIwMDAyZSs5LCJzdWIiOiI2MzNlOTA3ZWE2ZTJkMjAwN2ZmNThlMjciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.YcBVbRi7QK3OFn6GNXDcRW8vaoJlbQmpkOo7X0cbPx4'
		}
	};
	try {
		const data = await fetch(url, options)
			.then(res => res.json())
			.then(json => json.results)
			.catch(err => console.error(err));

		return thunkApi.fulfillWithValue(data)
	} catch (err) {
		return thunkApi.rejectWithValue(err)
	}

})


const getMovieById = createAsyncThunk(
	'movieSlice/getMovieById',
	async (id: number, thunkApi) => {
		const url = `https://api.themoviedb.org/3/movie/${id}`;

		const options = {
			method: 'GET',
			headers: {
				accept: 'application/json',
				Authorization:
					'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMTRiZmVhYTk0OTQ2ZTllYThjMTkzODlmNjg0MmU0NiIsIm5iZiI6MS42NjUwNDQ2MDY5MDIwMDAyZSs5LCJzdWIiOiI2MzNlOTA3ZWE2ZTJkMjAwN2ZmNThlMjciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.YcBVbRi7QK3OFn6GNXDcRW8vaoJlbQmpkOo7X0cbPx4',
			},
		};

		try {
			const data = await fetch(url, options)
				.then(res => res.json())
				.catch(err => {
					console.error(err);
					throw err;
				});

			return thunkApi.fulfillWithValue(data);
		} catch (err) {
			return thunkApi.rejectWithValue(err);
		}
	}
);


const getGenres = createAsyncThunk(
	'moviesSlice/getGenres',
	async (_, thunkApi) => {
		const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en';

		const options = {
			method: 'GET',
			headers: {
				accept: 'application/json',
				Authorization:
					'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMTRiZmVhYTk0OTQ2ZTllYThjMTkzODlmNjg0MmU0NiIsIm5iZiI6MS42NjUwNDQ2MDY5MDIwMDAyZSs5LCJzdWIiOiI2MzNlOTA3ZWE2ZTJkMjAwN2ZmNThlMjciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.YcBVbRi7QK3OFn6GNXDcRW8vaoJlbQmpkOo7X0cbPx4',
			},
		};

		try {
			const response = await fetch(url, options);
			const data = await response.json();
			return thunkApi.fulfillWithValue(data.genres);
		} catch (err) {
			return thunkApi.rejectWithValue(err);
		}
	}
);

const getMoviesByGenre = createAsyncThunk(
	"moviesSlice/getMoviesByGenre",
	async (genreId: number, thunkApi) => {
		const url = `https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}&language=en-US&page=1`;

		const options = {
			method: "GET",
			headers: {
				accept: "application/json",
				Authorization:
					"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMTRiZmVhYTk0OTQ2ZTllYThjMTkzODlmNjg0MmU0NiIsIm5iZiI6MS42NjUwNDQ2MDY5MDIwMDAyZSs5LCJzdWIiOiI2MzNlOTA3ZWE2ZTJkMjAwN2ZmNThlMjciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.YcBVbRi7QK3OFn6GNXDcRW8vaoJlbQmpkOo7X0cbPx4",
			},
		};

		try {
			const data = await fetch(url, options)
				.then((res) => res.json())
				.then((json) => json.results)
				.catch((err) => {
					console.error(err);
					throw err;
				});

			return thunkApi.fulfillWithValue(data);
		} catch (err) {
			return thunkApi.rejectWithValue(err);
		}
	}
);



export const moviesSlice = createSlice({
	name: 'moviesSlice',
	initialState: initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(getMovies.fulfilled, (state, action: PayloadAction<MovieType[]>) => {
			state.movies = action.payload;
		})
			.addCase(getMovieById.pending, (state) => {
			state.isLoading = true;
			state.movie = null;
		})
			.addCase(getMovieById.fulfilled, (state, action: PayloadAction<MovieByIdType>) => {
				state.movie = action.payload
				state.isLoading = false;
			})
			.addCase(getGenres.fulfilled, (state, action: PayloadAction<Genre[]>) => {
			state.genres = action.payload;
		})
			.addCase(getMoviesByGenre.fulfilled, (state, action: PayloadAction<MovieType[]>) => {
			state.movies = action.payload;

		})

	}
})

export const moviesSliceActions = {...moviesSlice.actions, getMovies, getMovieById,getGenres,getMoviesByGenre };