import React from 'react';
import StarRatings from 'react-star-ratings';

interface StarsRatingProps {
	rating: number;
}

export const StarsRating: React.FC<StarsRatingProps> = ({ rating }) => {
	return (
		<div className="flex items-center">
			<StarRatings
				rating={rating}
				starRatedColor="yellow"
				starEmptyColor="gray"
				numberOfStars={10}
				starDimension="20px"
				starSpacing="5px"
			/>
			<span className="ml-2 text-gray-700 text-sm">{rating}/10</span>
		</div>
	);
};
