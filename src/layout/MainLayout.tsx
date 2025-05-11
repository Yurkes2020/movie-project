import {Outlet} from 'react-router-dom';
import {Header} from "../components/Header.tsx";

export const MainLayout = () => {
	return (
		<div>
			<Header/>
			<main>
				<Outlet/>
			</main>
		</div>
	);
};


