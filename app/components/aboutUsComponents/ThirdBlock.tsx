import Image from "next/image";
import ThirdBlockFirstSVG from "@/public/pictures/about/about third block first group.svg";
import ThirdBlockSecondSVG from "@/public/pictures/about/about third block second group.svg";
import { cardPeopleList } from "./CardPeopleList";
import CardPeople from "./CardPeople";
import ButtonSendCV from "../buttons/buttonSendCV";

interface ThirdBlockProps {
	windowSize: WindowSize;
}

interface WindowSize {
	width: number;
	height: number;
}

const ThirdBlock: React.FC<ThirdBlockProps> = ({ windowSize }) => {
	const { width, height } = windowSize;
	return (
		<div
			className="relative bg-stone-950 py-[160px]
		desktopxs:py-[160px]
		laptop:pt-[100px] laptop:pb-[95px]
		tablet:pt-[80px] tablet:pb-[80px]
		mobile:pt-[60px] mobile:pb-[84px]
		overflow-x-hidden
		overflow-y-hidden
		"
		>
			<Image
				src={ThirdBlockFirstSVG}
				width={width < 769 ? 263 : width < 1025 ? 363 : 528}
				alt="Third block first group"
				className="absolute top-[150px] left-[-156px]
				desktopxs:top-[150px] desktopxs:left-[-156px]
				laptop:top-[-51px] laptop:left-[-142px]
				tablet:top-[-22px] tablet:left-[-106px]
				mobile:top-[-50px] mobile:left-[-154px]
				"
			/>
			<Image
				src={ThirdBlockSecondSVG}
				width={width < 769 ? 264 : width < 1025 ? 449 : 528}
				alt="Third block second group"
				className="absolute top-[908px] left-[2264px]
					qhd:top-[908px] qhd:left-[2264px]
					desktop:top-[908px] desktop:left-[1642px]
					desktopxs:top-[908px] desktopxs:left-[1101px]
					laptop:top-[1346px] laptop:left-[741px]
					tablet:top-[2004px] tablet:left-[607px]
					mobile:top-[3330px] mobile:left-[243px]
					"
			/>
			<div className="">
				<div
					className="flex flex-col items-center mb-[66px]
				desktopxs:mb-[66px]
				laptop:mb-[34px]
				tablet:mb-[40px]
				mobile:mb-[40px]
				"
				>
					<h3
						className="
                    text-white
                    text-[54px]
                    font-medium
                    leading-[60px]
                    mb-[40px]
					w-[872px]
					desktopxs:mb-[40px] desktopxs:leading-[60px]
					laptop:mb-[20px] laptop:w-[872px] laptop:text-[54px] laptop:leading-[60px]
					tablet:mb-[20px] tablet:w-[626px] tablet:text-[50px] tablet:leading-[60px]
					mobile:mb-[20px] mobile:text-4xl mobile:w-[340px]
					text-center
                    "
					>
						Кто работает над вашим продвижением
					</h3>
					<p
						className="
                    text-white
                    font-normal
					text-[22px]
                    leading-[30px]
                    laptop:text-[22px]
                    mobile:text-base
					"
					>
						Эксперты под руководством Захара Шатрова
					</p>
				</div>

				<div
					className="relative flex flex-wrap flex-row gap-x-8 gap-y-[60px] items-center justify-center max-w-[1268px] mx-auto z-10
				desktopxs:gap-y-[60px]
				laptop:gap-y-[22px]
				tablet:gap-y-[22px]
				mobile:gap-y-[30px]
				"
				>
					{cardPeopleList.map((card, index) => {
						return (
							<div key={index}>
								<CardPeople {...card} />
							</div>
						);
					})}
					<div
						className="flex flex-col justify-center max-w-[615px] bg-zinc-400 bg-opacity-20 rounded-[20px] gap-[30px] max-h-[455px] pl-[50px] pr-[80px] mx-auto self-stretch
					
						desktopxs:py-0 desktopxs:pr-[80px] desktopxs:pl-[50px]
						laptop:pl-[27px] laptop:pr-[45px] laptop:py-[40px]
						laptop:mt-[0px] laptop:max-h-[455px]
						tablet:pr-[40px] tablet:pl-[27px] tablet:py-[40px]
						tablet:mt-[18px] tablet:max-h-[375px] tablet:mx-0
						mobile:py-[40px] mobile:pr-[27px] mobile:pl-[33px] mobile:max-h-[426px] mobile:mx-[18px]
					"
					>
						<div
							className="text-white
                                        text-[32px]
                                        font-medium
                                        leading-10
										desktopxs:font-medium
										desktopxs:max-w-[472px]
										laptop:font-bold
										tablet:font-bold
										tablet:max-w-[553px]
										mobile:text-2xl
										mobile:max-w-[260px]
                                        "
						>
							Станьте частью команды NOAH ✨
						</div>
						<div
							className="text-white
                                        text-base
                                        font-normal
                                        leading-normal
                                        font-inter
										desktopxs:text-base
										desktopxs:leading-normal
										desktopxs:font-inter
										laptop:text-lg laptop:font-ttnorms
										tablet:font-ttnorms tablet:text-lg
										mobile:text-base mobile:font-ttnorms
                                        "
						>
							Мы хотим, чтобы NOAH оставалось современным и технологичным агентством.
							Поэтому мы всегда ищем топовых специалистов.
							<div className="leading-[75%]">
								<br />
							</div>
							Eсли чувствуете, что мы сработаемся — отправляйте своё резюме и
							портфолио.
						</div>
						<ButtonSendCV />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ThirdBlock;
