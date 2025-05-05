export type Genre = {
	id: number;
	name: string;
}

export type Movie ={
	id: number;
	title: string;
	overview: string;
	backdrop_path: string;
	poster_path: string;
	vote_average: number;
	genre_ids: number[];
}
