import { headerMenuItems } from "@/app/components/header/HeaderMenuListItems";
import { usePathname } from "next/navigation";
import Link from "next/link";
import logo from "@/public/pictures/header/logo.png";
import cross from "@/public/pictures/header/exit-cross.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HeaderMenu({ closeMenu }: { closeMenu?: any }) {
	const path = usePathname();
	const router = useRouter();

	const pushLink = (link: string) => {
		console.log(path !== "/" && link === "#services");

		if (path !== "/" && link === "#services") {
			closeMenu(false);
			router.push("/#services");
		} else {
			closeMenu(false);
			router.push(link);
		}
	};
	return (
		<>
			<div className="absolute mobile:top-[-20px] mobile:left-[-10px] tablet:left-[-24px] h-screen tablet:top-[-21px] w-screen max-w-[375px] bg-white p-[10px] z-[100] mx-auto">
				<div className="w-full flex justify-between px-[10px] ">
					<Image
						src={logo.src}
						height={28.3}
						width={120}
						alt="noah logo"
						className="m-2"
					/>
					<Image
						src={cross.src}
						height={34}
						width={34}
						alt="exit"
						onClick={() => closeMenu(false)}
					/>
				</div>
				<ul className="grid grid-cols-1 gap-y-[15px] mt-[80px] ml-[10px]">
					{headerMenuItems.map(
						(menuItem: { page: string; displayValue: string }, index: number) => {
							return (
								// <Link href={menuItem.page} key={index}>

								<li
									className="flex items-center text-[14px] font-bold leading-5 cursor-pointer"
									key={index}
									onClick={() => pushLink(menuItem.page)}
								>
									<p
										className={
											path === menuItem.page ? "text-[#19B6B1]" : "text-[#0E0F0F]"
										}
									>
										{menuItem.displayValue}
									</p>
								</li>
								// </Link>
							);
						}
					)}
				</ul>
				<button className="flex text-white text-base font-medium leading-7 bg-stone-950 py-[9.27px] px-[14.3px] rounded-[5px] gap-[8.43px] font-ttnorms mb-[144px] mt-[44px] mx-auto">
					Забронировать консультацию
				</button>
			</div>
			<div
				className="fixed top-0 left-0 z-[90] w-screen h-screen opacity-50 bg-slate-400"
				onClick={() => closeMenu(false)}
			/>
		</>
	);
}
