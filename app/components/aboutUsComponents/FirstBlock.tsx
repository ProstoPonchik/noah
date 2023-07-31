"use client";
import FirstGroupSVG from "@/public/pictures/about/about first group.svg";
import SecondGroupSVG from "@/public/pictures/about/about second group.svg";
import FirstGroup1024SVG from "@/public/pictures/about/about first group1024.svg";
import SecondGroup1024SVG from "@/public/pictures/about/about second group1024.svg";
import TextBgSVG from "@/public/pictures/about/text bg.svg";
import ArrowDownSVG from "@/public/pictures/about/Arrow Down Circle.svg";
import Image from "next/image";
import StarSVG from "@/public/pictures/about/star.svg";
import BlockSVG from "@/public/pictures/about/block.svg";
import PeopleSVG from "@/public/pictures/about/people.svg";
import ActivitySVG from "@/public/pictures/about/activity.svg";
import HeartSVG from "@/public/pictures/about/heart.svg";
import TrophySVG from "@/public/pictures/about/trophy.svg";

interface FirstBlockProps {
	windowSize: WindowSize;
}

interface WindowSize {
	width: number;
	height: number;
}

const FirstBlock: React.FC<FirstBlockProps> = ({ windowSize }) => {
	const { width, height } = windowSize;
	return (
		<div className="relative overflow-x-hidden mt-[-93px] pt-[93px]">
			<Image
				src={width > 1024 ? FirstGroupSVG : FirstGroup1024SVG}
				alt=""
				width={509}
				height={493}
				className="absolute
					w-[509px] h-[493px]
					qhd:top-[170px] qhd:left-[230px]
					desktop:top-[170px] desktop:left-[-90px]
					desktopxs:top-[170px] desktopxs:left-[-145px] desktopxs:w-[509px] desktopxs:h-[493px]
					laptop:w-[370px] laptop:h-[395px] laptop:top-[32px] laptop:left-[-143px]
					tablet:w-[247px] tablet:h-[247px] tablet:top-[48px] tablet:left-[-74px]
					mobile:w-[247px] mobile:h-[247px] mobile:top-[72px] mobile:left-[-117px]
					"
			/>
			<Image
				className="absolute
					qhd:top-[217px] qhd:left-[1814px]
					desktop:top-[217px] desktop:left-[1494px]
					desktopxs:top-[217px] desktopxs:left-[1085px] desktopxs:w-[384px] desktopxs:h-[384px]
					laptop:w-[280px] laptop:h-[354px] laptop:top-[154px] laptop:left-[832px]
					tablet:w-[187px] tablet:h-[236px] tablet:top-[108px] tablet:left-[647px]
					mobile:w-[187px] mobile:h-[236px] mobile:top-[108px] mobile:left-[304px]
					"
				src={width > 1024 ? SecondGroupSVG : SecondGroup1024SVG}
				alt=""
				width={384}
				height={384}
			/>
			<div
				className="flex flex-row justify-center items-center pb-[114px] pt-[125px] mb-[85px] 
			qhd:pt-[125px]
			desktop:pt-[125px]
			desktopxs:pt-[125px] desktopxs:pb-[114px]
			laptop:pb-[32px] laptop:pt-[15px] laptop:mb-[85px]
			tablet:pt-[1px] tablet:mb-[80px] tablet:pb-[0px]
			mobile:pt-[18px] mobile:mb-[40px] mobile:pb-[0px]
			"
			>
				<div
					className="flex flex-col max-w-[704px] max-h-[334px] items-center text-center
				desktopxs:max-w-[704px]
				laptop:max-w-[551px]
				tablet:max-w-[427px]
				mobile:max-w-[318px]

                 "
				>
					<div
						className="relative 
					desktopxs:top-[67px] desktopxs:right-[175px]
					laptop:top-[62px] laptop:right-[154px]
					tablet:top-[56px] tablet:right-[92px]
					mobile:top-[40px] mobile:right-[67px]
					
					"
					>
						<Image
							src={TextBgSVG}
							alt=""
							// width < 376 ? 138 : width < 1025 ? 218 : 184
							width={width < 376 ? 130 : width < 1025 ? 184 : 218}
							height={49}
						/>
					</div>

					<h1
						className="
                z-10
				text-stone-950
				text-[62px]
				font-medium
				
				leading-[70px]
                mb-[20px]
				desktopxs:text-[62px]
				laptop:text-[54px]
				tablet:text-[50px]
				laptop:leading-[70px]
				tablet:leading-[58px]
				mobile:text-4xl
				"
					>
						Всегда на один шаг впереди
					</h1>
					<p
						className="
				z-10
				text-stone-950
				text-[22px]
				
				font-medium
				leading-[30px]
                mb-[80px]
                whitespace-pre-wrap
				max-w-[560px]
				desktopxs:max-w-[560px]
				laptop:max-w-[500px] laptop:leading-[30px] laptop:font-[400px] laptop:text-[22px] laptop:mb-[80px]
				tablet:max-w-[400px] tablet:font-normal tablet:text-lg tablet:mb-[40px]
				mobile:max-w-[280px] mobile:text-base mobile:mb-[40px]
				
				"
					>
						{`В NOAH мы не только учитываем алгоритмы LinkedIn — мы предугадываем и задаём тренды`}
					</p>
					<Image src={ArrowDownSVG} alt="" />
				</div>
			</div>
			<div className="flex flex-row items-center justify-center">
				<div
					className="flex flex-row items-center w-[1252px] gap-5 justify-between 
				mx-0 
				desktopxs:mx-0 
				laptop:mx-[27px] laptop:flex-row laptop:items-center
				tablet:mx-[0px] tablet:flex-col tablet:items-center tablet:gap-y-[30px]
				mobile:flex-col
				"
				>
					<div
						className="text-stone-950
                                    text-[54px]
                                    font-figma
                                    font-medium
                                    leading-[60px]
                                    whitespace-pre-wrap
									desktopxs:w-[620px]
									laptop:w-[570px] laptop:text-[54px] laptop:leading-[60px]
									tablet:w-[707px] tablet:text-[50px] tablet:leading-[58px]
									mobile:w-[340px] mobile:text-4xl

                                    "
					>
						{`Привет!👋\nМы NOAH — агентство, в котором эксперты и технологии работают сообща`}
					</div>
					<div className="flex flex-col items-center">
						<p
							className="text-black
                                        text-[22px]
                                        font-normal
                                        leading-[30px]
                                        whitespace-pre-wrap
                                        font-figma
                                        mb-[40px]
										desktopxs:w-[547px] desktopxs
										laptop:w-[370px] laptop:text-[22px] laptop:leading-[30px] laptop:mb-[40px]
										tablet:w-[707px] tablet:text-lg tablet:mb-[16px]
										mobile:w-[340px] mobile:text-base mobile:mb-[16px]
                                        "
						>
							{`Для эффективного продвижения в LinkedIn мы разработали уникальный продукт, который помогает команде анализировать гигабайты информации: \nо бизнесе, финансах и маркетинге.`}
						</p>

						<p
							className="
										text-black
                                        text-[22px]
                                        font-normal
                                        leading-[30px]
                                        whitespace-pre-wrap
                                        font-figma
										desktopxs:w-[547px]
										laptop:w-[370px] laptop:text-[22px] laptop:leading-[30px]
										tablet:w-[707px] tablet:text-lg
										mobile:w-[340px] mobile:text-base 
                                        "
						>
							{`Так мы моментально находим новые инсайты и внедряем их в стратегии клиентов для достижения максимальных результатов.`}
						</p>
					</div>
				</div>
			</div>
			<div
				className="flex justify-center mt-[100px] 
            mb-[166px]
			desktopxs:mb-[166px]
			laptop:mb-[106px] laptop:mt-[100px]
			tablet:mb-[80px] tablet:mt-[40px]
			mobile:mb-[68px] mobile:mt-[40px]
			"
			>
				<div
					className="flex flex-wrap justify-center w-[1100px] text-center text-stone-950 text-[22px] font-bold leading-[30px] gap-x-[40px] gap-y-[60px]
				desktopxs:w-[1100px] desktopxs:gap-x-[40px] desktopxs:gap-y-[60px]
				laptop:w-[1100px] laptop:gap-x-[60px] laptop:gap-y-[60px]
				tablet:w-[692px] tablet:gap-x-5 tablet:gap-y-[30px]
				mobile:gap-y-[40px]
				"
				>
					<div
						className="flex flex-col items-center max-w-[336px]
					desktopxs:w-[336px]
					laptop:w-[270px]
					tablet:w-[336px]
					"
					>
						<Image src={StarSVG} alt="" />
						<p className="mt-5">Улавливаем тренды</p>
					</div>
					<div
						className="flex flex-col items-center max-w-[336px]
					desktopxs:w-[336px]
					laptop:w-[270px]
					tablet:w-[336px]
					"
					>
						<Image src={BlockSVG} alt="" />
						<p className="mt-5">Знаем алгоритмы</p>
					</div>
					<div
						className="flex flex-col items-center max-w-[336px]
					desktopxs:w-[336px]
					laptop:w-[270px]
					tablet:w-[336px]
					"
					>
						<Image src={PeopleSVG} alt="" />
						<p className="mt-5">Обучаем ИИ и команду</p>
					</div>
					<div
						className="flex flex-col items-center max-w-[336px]
					desktopxs:w-[336px]
					laptop:w-[270px] 
					tablet:w-[336px]
					"
					>
						<Image src={ActivitySVG} alt="" />
						<p className="mt-5">Используем аналитику</p>
					</div>
					<div
						className="flex flex-col items-center max-w-[336px]
					desktopxs:w-[336px]
					laptop:w-[270px] 
					tablet:w-[336px]
					
					"
					>
						<Image src={HeartSVG} alt="" />
						<p className="mt-5">Внедряем креатив</p>
					</div>
					<div
						className="flex flex-col items-center max-w-[336px]
					desktopxs:w-[336px]
					laptop:w-[270px]
					tablet:w-[336px]
					
					"
					>
						<Image src={TrophySVG} alt="" />
						<p className="mt-5">Приносим результат</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FirstBlock;
