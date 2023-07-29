"use client";
import { useState, useEffect } from "react";

import FirstBlock from "../components/aboutUsComponents/firstBlock";
import SecondBlock from "../components/aboutUsComponents/secondBlock";
import ThirdBlock from "../components/aboutUsComponents/thirdBlock";

interface WindowSize {
	width: number;
	height: number;
}

const AboutUs: React.FC = () => {
	const [windowSize, setWindowSize] = useState<WindowSize>({
		width: window.innerWidth,
		height: window.innerHeight,
	});

	useEffect(() => {
		const handleWindowResize = () => {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};

		window.addEventListener("resize", handleWindowResize);

		return () => {
			window.removeEventListener("resize", handleWindowResize);
		};
	}, []);

	return (
		<div className="">
			<FirstBlock windowSize={windowSize} />
			<SecondBlock windowSize={windowSize} />
			<ThirdBlock windowSize={windowSize} />
		</div>
	);
};

export default AboutUs;
