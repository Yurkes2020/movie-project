import React from 'react';

type MovieInfoProps = {
	title: string;
	overview: string;

}

export const MovieInfo: React.FC<MovieInfoProps> = ({ title, overview }) => {
	return (
		<div>
			<h1>{title}</h1>
			<p>{overview}</p>
		</div>
	);
};
