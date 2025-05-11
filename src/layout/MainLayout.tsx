import { Outlet } from 'react-router-dom';
import { Header } from "../components/Header.tsx";
import {ScrollToTopButton} from "../components/ScrollToTopButton.tsx";

export const MainLayout = () => {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<main className="flex-1 p-4">
				<Outlet />
			</main>
			<ScrollToTopButton />
		</div>
	);
};
