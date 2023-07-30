import Image from "next/image";
import logo from "@/public/pictures/header/logo.png";
export default function Footer() {
  return (
    <footer className="mx-auto flex max-w-[1438px]">
      <Image src={logo.src} height={28.3} width={120} alt="noah logo" />
      <span>Установите крепкую связь с бизнес-сообществом</span>
      <span>© 2023 Noah</span>
    </footer>
  );
}
