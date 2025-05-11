type PosterPreviewProps= {
	posterPath: string | null;
	title: string;
}

export const PosterPreview = ({ posterPath, title }: PosterPreviewProps) => {
	const posterUrl = posterPath
		? `https://image.tmdb.org/t/p/w500${posterPath}`
		: "/no-image.png";

	return (
		<div >
			<img
				src={posterUrl}
				alt={title}
			/>
		</div>
	);
};
