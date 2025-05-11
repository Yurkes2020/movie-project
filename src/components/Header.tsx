import { Link } from "react-router-dom";
import {SearchBar} from "./SearchBar.tsx";

export const Header = () => {
	return (
		<header >
			<div >

				<Link to="/" >
					MovieBase
				</Link>
				<SearchBar/>
				<button>Профіль</button>
			</div>
		</header>
	);
};
