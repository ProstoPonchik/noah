"use client";
import { useState, useEffect } from "react";

import FirstSection from "../components/contactsComponents/FirstSection";
import SecondSection from "../components/contactsComponents/SecondSection";
import ThirdSection from "../components/contactsComponents/ThirdSection";

interface WindowSize {
	width: number;
	height: number;
}

const Contacts = () => {
	const [windowSize, setWindowSize] = useState<WindowSize>({
		width: 0,
		height: 0,
	});

	useEffect(() => {
		const handleWindowResize = () => {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};

		// Check if the code is running in a browser environment before using the window object
		if (typeof window !== "undefined") {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});

			window.addEventListener("resize", handleWindowResize);

			return () => {
				window.removeEventListener("resize", handleWindowResize);
			};
		}
	}, []);
	return (
		<div className="font-ttnorms">
			<FirstSection />
			<SecondSection />
			<ThirdSection windowSize={windowSize} />
		</div>
	);
};

export default Contacts;
