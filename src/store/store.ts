import {configureStore} from '@reduxjs/toolkit';
import {moviesSlice} from "./slices/moviesSlice.tsx";

export const store = configureStore({
	reducer: {
		moviesSlice: moviesSlice.reducer,
	},
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
