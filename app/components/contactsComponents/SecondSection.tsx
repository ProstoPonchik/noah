import FirstGroupSVG from "@/public/pictures/contacts/contacts 3 group.svg";
import SecondGroupSVG from "@/public/pictures/contacts/contacts 4 group.svg";
import ThirdGroupSVG from "@/public/pictures/contacts/contacts 5 group.svg";
import Image from "next/image";

const SecondSection = () => {
	return (
		<div className="flex flex-col items-center justify-center text-start mt-[142px]">
			<div className="relative w-[1260px] h-[476px] bg-stone-950 rounded-[20px] overflow-x-hidden overflow-y-hidden">
				<Image
					src={FirstGroupSVG}
					alt=""
					className="absolute
						qhd:top-[-46px]
						qhd:left-[-74px]
						desktop:top-[-46px]
						desktop:left-[-74px]
						desktopxs:top-[-46px]
						desktopxs:left-[-74px]
					
					"
				/>
				<Image
					src={SecondGroupSVG}
					alt=""
					className="absolute
						qhd:top-[271px]
						qhd:left-[1001px]
						desktop:top-[271px]
						desktop:left-[1001px]
						desktopxs:top-[271px]
						desktopxs:left-[1001px]
					
					"
				/>

				<div
					className="flex flex-row justify-between m-auto
				mt-[115px]
				qhd:w-[1001px]
				desktop:w-[1001px]
				desktopxs:w-[1001px]
				"
				>
					<div
						className="
					flex
					flex-col
					justify-center
					"
					>
						<h3
							className="
							z-10
					text-white
					text-[54px]
					font-medium
					leading-[60px]
					mb-[20px]
				"
						>
							Пишите нам в чат 💬
						</h3>
						<p
							className="
							z-10
					text-white
					text-[22px]
					font-normal
					leading-[30px]
					max-w-[485px]
					mb-[60px]
				
				"
						>
							Отвечаем в течение часа. Семь дней в неделю и без перерывов
						</p>
						<Image
							src={ThirdGroupSVG}
							alt=""
							className="
						z-10
						"
						/>
					</div>
					<div className="w-[246px] h-[246px] bg-white rounded-[20px] z-10" />
				</div>
			</div>
		</div>
	);
};

export default SecondSection;
