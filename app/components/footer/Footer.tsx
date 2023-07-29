import Image from "next/image";
import logo from "@/public/logo.png";
export default function Footer() {
	return (
		<footer>
			<Image src={logo.src} height={28.3} width={120} alt="noah logo" />
			<span>Установите крепкую связь с бизнес-сообществом</span>
			<span>© 2023 Noah</span>
		</footer>
	);
}
