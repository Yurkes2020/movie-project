type PaginationProps = {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
};

export const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
	return (
		<div className="flex items-center justify-center gap-2 my-4">
			<button
				className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
				disabled={currentPage === 1}
				onClick={() => onPageChange(currentPage - 1)}
			>
				Назад
			</button>
			<span className="text-sm">{currentPage} / {totalPages}</span>
			<button
				className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
				disabled={currentPage === totalPages}
				onClick={() => onPageChange(currentPage + 1)}
			>
				Вперед
			</button>
		</div>
	);
};
