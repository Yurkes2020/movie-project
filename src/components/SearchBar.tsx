import { useNavigate } from "react-router-dom";
import { type FormEvent, useState } from "react";

export const SearchBar = () => {
	const [query, setQuery] = useState("");
	const navigate = useNavigate();

	const handleSearch = (e: FormEvent) => {
		e.preventDefault();
		if (query.trim()) {
			navigate(`/search?query=${encodeURIComponent(query.trim())}`);
			setQuery("");
		}
	};

	return (
		<form
			onSubmit={handleSearch}
			className="flex items-center bg-gray-200 rounded-lg p-2 shadow-md w-full sm:w-80"
		>
			<input
				type="text"
				placeholder="Пошук фільмів..."
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				className="w-full px-4 py-2 bg-white text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
			/>
			<button
				type="submit"
				className="ml-2 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
			>
				Пошук
			</button>
		</form>
	);
};
