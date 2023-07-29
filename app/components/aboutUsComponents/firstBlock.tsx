"use client";

import FirstGroupSVG from "@/public/about first group.svg";
import SecondGroupSVG from "@/public/about second group.svg";
import TextBgSVG from "@/public/text bg.svg";
import ArrowDownSVG from "@/public/Arrow Down Circle.svg";
import Image from "next/image";
import StarSVG from "@/public/about/star.svg";
import BlockSVG from "@/public/about/block.svg";
import PeopleSVG from "@/public/about/people.svg";
import ActivitySVG from "@/public/about/activity.svg";
import HeartSVG from "@/public/about/heart.svg";
import TrophySVG from "@/public/about/trophy.svg";

const text =
	"В NOAH мы не только учитываем алгоритмы LinkedIn \n— мы предугадываем и задаём тренды";
const text1 =
	"Привет!👋\nМы NOAH — агентство,\nв котором эксперты и технологии работают сообща";

const text2 =
	"Для эффективного продвижения в LinkedIn мы разработали уникальный продукт, который помогает команде анализировать гигабайты информации: \nо бизнесе, финансах и маркетинге.\n\n\nТак мы моментально находим новые инсайты и внедряем их в стратегии клиентов для достижения максимальных результатов.";

const FirstBlock = () => {
	return (
		<div>
			<div className="flex flex-row justify-center items-center mb-[144px] mt-[65px]">
				<div className="relative">
					<Image src={FirstGroupSVG} alt="" width={509} height={493} />
				</div>
				<div
					className="flex flex-col w-[704px] h-[334px] items-center text-center
                //  mr-[100px] ml-[100px]
                 "
				>
					<div className="relative top-[67px] right-[175px]">
						<Image src={TextBgSVG} alt="" width={218} height={49} />
					</div>

					<h1
						className="
                z-10
				text-stone-950
				text-[62px]
				font-medium
				leading-[70px]
                mb-[20px]
				"
					>
						Всегда на один шаг впереди
					</h1>
					<p
						className="
				text-stone-950
				text-[22px]
				font-normal
				leading-[30px]
                mb-[80px]
                whitespace-pre-wrap
				"
					>
						{text}
					</p>
					<Image src={ArrowDownSVG} alt="" />
				</div>
				<div
					className="relative
                //  ml-[110px]
                 "
				>
					<Image
						className="relative height-[374px] top-[8%]"
						src={SecondGroupSVG}
						alt=""
						width={374}
						height={374}
					/>
				</div>
			</div>
			<div className="flex flex-row items-center justify-center">
				<div className="flex flex-row items-center w-[1252px] gap-5">
					<div
						className="text-stone-950
                                    text-[54px]
                                    font-medium
                                    leading-[60px]
                                    whitespace-pre-wrap
                                    w-[685px]
                                    font-figma
                                    "
					>
						{text1}
					</div>
					<div>
						<p
							className="text-black
                                        text-[22px]
                                        font-normal
                                        leading-[30px]
                                        whitespace-pre-wrap
                                        w-[547px]
                                        font-figma
                                        "
						>
							{text2}
						</p>
					</div>
				</div>
			</div>
			<div className="flex justify-center mt-[100px]">
				<div className="flex flex-wrap justify-center w-[1100px] text-center text-stone-950 text-[22px] font-bold leading-[30px] gap-x-[40px] gap-y-[60px]">
					<div className="flex flex-col items-center w-[336px]">
						<Image src={StarSVG} alt="" />
						<p className="mt-5">Улавливаем тренды</p>
					</div>
					<div className="flex flex-col items-center w-[336px]">
						<Image src={BlockSVG} alt="" />
						<p className="mt-5">Знаем алгоритмы</p>
					</div>
					<div className="flex flex-col items-center w-[336px]">
						<Image src={PeopleSVG} alt="" />
						<p className="mt-5">Обучаем ИИ и команду</p>
					</div>
					<div className="flex flex-col items-center w-[336px]">
						<Image src={ActivitySVG} alt="" />
						<p className="mt-5">Используем аналитику</p>
					</div>
					<div className="flex flex-col items-center w-[336px]">
						<Image src={HeartSVG} alt="" />
						<p className="mt-5">Внедряем креатив</p>
					</div>
					<div className="flex flex-col items-center w-[336px]">
						<Image src={TrophySVG} alt="" />
						<p className="mt-5">Приносим результат</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FirstBlock;
