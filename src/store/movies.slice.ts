import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {moviesAPI} from "../api/movie.api.ts";
import type {Movie} from "../types/movie.types.ts";


type MoviesState ={
	movies: Movie[];
	loading: boolean;
	error: string | null;
}

const initialState: MoviesState = {
	movies: [],
	loading: false,
	error: null,
};

export const getMovies = createAsyncThunk<Movie[], number>(
	'movies/getMovies',
	async (page = 1, { rejectWithValue }) => {
		try {
			return await moviesAPI.getPopularMovies(page);
		} catch (err: any) {
			return rejectWithValue(err.message);
		}
	}
);

const moviesSlice = createSlice({
	name: 'movies',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(getMovies.pending, state => {
				state.loading = true;
				state.error = null;
			})
			.addCase(getMovies.fulfilled, (state, action) => {
				state.loading = false;
				state.movies = action.payload;
			})
			.addCase(getMovies.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload as string;
			});
	},
});

export default moviesSlice.reducer;
