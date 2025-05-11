type PosterPreviewProps = {
	posterPath: string | null;
	title: string;
};

export const PosterPreview = ({ posterPath, title }: PosterPreviewProps) => {
	const posterUrl = posterPath
		? `https://image.tmdb.org/t/p/w500${posterPath}`
		: "/no-image.png";

	return (
		<div className="relative w-full aspect-[2/3] overflow-hidden rounded-md">
			<img
				src={posterUrl}
				alt={title}
				className="w-full h-full object-cover object-top"
			/>
		</div>
	);
};
