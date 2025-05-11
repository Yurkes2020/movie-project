import { GenresBadge } from "../components/GenreBadge.tsx";
import { Outlet } from "react-router-dom";

export const Layout = () => {
	return (
		<div>
			<GenresBadge />
			<Outlet />
		</div>
	);
};
