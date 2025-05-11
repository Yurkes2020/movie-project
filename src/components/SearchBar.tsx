import { useNavigate } from "react-router-dom";
import {type FormEvent, useState} from "react";

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
		<form onSubmit={handleSearch} >
			<input
				type="text"
				placeholder="Пошук фільмів..."
				value={query}
				onChange={(e) => setQuery(e.target.value)}

			/>
			<button
				type="submit"

			>
				Пошук
			</button>
		</form>
	);
};
