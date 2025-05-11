import { Link } from "react-router-dom";

export const Header = () => {
	return (
		<header className="bg-zinc-900 text-white px-6 py-4 shadow-md">
			<div className="flex items-center justify-between gap-6">
				
				<Link
					to="/"
					className="text-xl font-semibold text-blue-400 hover:text-white transition"
				>
					🎬 MovieBase
				</Link>

				<input
					type="text"
					placeholder="Пошук..."
					className="w-60 px-3 py-2 rounded bg-zinc-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>

				<button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition">
					👤 Профіль
				</button>
			</div>
		</header>
	);
};
