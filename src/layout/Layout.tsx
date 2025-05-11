import { GenresBadge } from "../components/GenreBadge.tsx";
import { Outlet } from "react-router-dom";

export const Layout = () => {
	return (
		<div className="flex flex-col min-h-screen">
			<GenresBadge />
			<main className="flex-1 p-4">
				<Outlet />
			</main>
		</div>
	);
};
