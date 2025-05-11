import { Link } from "react-router-dom";
import { SearchBar } from "./SearchBar.tsx";

export const Header = () => {
	return (
		<header className="bg-gray-800 text-white p-4">
			<div className="flex items-center justify-between max-w-7xl mx-auto">
				<Link to="/" className="text-2xl font-semibold hover:text-primary transition-colors">
					MovieBase
				</Link>

				<SearchBar />

				<button className="bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark transition-colors">
					Профіль
				</button>
			</div>
		</header>
	);
};
