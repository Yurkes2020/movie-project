import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
export const ScrollToTopButton = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsVisible(window.scrollY > 300);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<button
			onClick={scrollToTop}
			className={`fixed bottom-6 right-6 p-2 rounded-full shadow-lg bg-blue-500 text-white hover:bg-blue-600 transition-opacity duration-300 ${
				isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
			}`}
			aria-label="Повернутися вгору"
		>
			<ArrowUp className="w-5 h-5" />
		</button>
	);
};
