import React from 'react';

type MovieInfoProps = {
	title: string;
	overview: string;
};

export const MovieInfo: React.FC<MovieInfoProps> = ({ title }) => {
	return (
		<div className="p-6 max-w-3xl mx-auto bg-white rounded-lg shadow-lg">
			<h2 className="text-lg font-semibold text-gray-800 mb-4">{title}</h2>
		</div>
	);
};
