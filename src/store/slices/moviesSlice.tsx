import type {MovieType} from "../../types/movieType.ts";
import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {MovieByIdType} from "../../types/movieByIdType.ts";
import type {Genre} from "../../types/genreType.ts";
import {moviesApi} from "../../api/moviesApi.ts";

type moviesSliceType = {
	movies: MovieType[];
	movie: MovieByIdType | null;
	genres: Genre[];
	movieGenres: MovieType[];
	searchResults: MovieType[];
	isLoading: boolean;
};

const initialState: moviesSliceType = {movies: [], movie: null,genres: [],movieGenres: [],searchResults: [], isLoading: false};

const getMovies = createAsyncThunk('moviesSlice/getMovies', async (_, thunkApi) => {

	try {
		const data = await moviesApi.fetchMovies();

		return thunkApi.fulfillWithValue(data)
	} catch (err) {
		return thunkApi.rejectWithValue(err)
	}

})


const getMovieById = createAsyncThunk(
	'movieSlice/getMovieById',
	async (id: number, thunkApi) => {


		try {
			const data = await moviesApi.fetchMovieById(id);

			return thunkApi.fulfillWithValue(data);
		} catch (err) {
			return thunkApi.rejectWithValue(err);
		}
	}
);


const getGenres = createAsyncThunk(
	'moviesSlice/getGenres',
	async (_, thunkApi) => {


		try {
			const data = await moviesApi.fetchGenres();
			return thunkApi.fulfillWithValue(data);
		} catch (err) {
			return thunkApi.rejectWithValue(err);
		}
	}
);

const getMoviesByGenre = createAsyncThunk(
	"moviesSlice/getMoviesByGenre",
	async (genreId: number, thunkApi) => {


		try {
			const data = await moviesApi.fetchMoviesByGenre(genreId);

			return thunkApi.fulfillWithValue(data);
		} catch (err) {
			return thunkApi.rejectWithValue(err);
		}
	}
);

const searchMovies = createAsyncThunk(
	'moviesSlice/searchMovies',
	async (query: string, thunkApi) => {
		try {
			const data = await moviesApi.searchMovies(query); // Викликаємо функцію API для пошуку
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

		}).addCase(searchMovies.fulfilled, (state, action: PayloadAction<MovieType[]>) => {
			state.searchResults = action.payload;
		});

	}
})

export const moviesSliceActions = {...moviesSlice.actions, getMovies, getMovieById,getGenres,getMoviesByGenre ,searchMovies};