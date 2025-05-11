import React from 'react';
import StarRatings from 'react-star-ratings';

interface StarsRatingProps {
	rating: number;
}

export const StarsRating: React.FC<StarsRatingProps> = ({ rating }) => {
	return (
		<StarRatings
			rating={rating}
			starRatedColor="yellow"
			starEmptyColor="gray"
			numberOfStars={10}
			starDimension="20px"
			starSpacing="5px"
		/>
	);
};

