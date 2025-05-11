type PosterPreviewProps = {
	posterPath: string | null;
	title: string;
};

export const PosterPreview = ({ posterPath, title }: PosterPreviewProps) => {
	const posterUrl = posterPath
		? `https://image.tmdb.org/t/p/w500${posterPath}`
		: "/no-image.png";

	return (
		<div className="w-full h-96 bg-gray-200 flex justify-center items-center">
			<img
				src={posterUrl}
				alt={title}
				className="object-cover w-full h-full rounded-lg"
			/>
		</div>
	);
};
