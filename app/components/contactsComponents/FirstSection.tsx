import Image from "next/image";

import FirstGroupSVG from "@/public/pictures/contacts/contacts first group.svg";
import SecondGroupSVG from "@/public/pictures/contacts/contacts second group.svg";
import TextBgSVG from "@/public/pictures/contacts/text bg.svg";
import ArrowDownSVG from "@/public/pictures/contacts/Arrow Down Circle.svg";

const FirstSection = () => {
	return (
		<div
			className="relative overflow-x-hidden 
		mt-[-93px] pt-[93px] 
		
		pb-[14px]"
		>
			<Image
				src={FirstGroupSVG}
				alt=""
				className="
			absolute
			qhd:top-[161px]
			qhd:left-[230px]
			desktop:top-[161px]
			desktop:left-[-90px]
			desktopxs:top-[161px]
			desktopxs:left-[-145px]
			"
			/>
			<Image
				src={SecondGroupSVG}
				alt=""
				className="
			absolute
			qhd:top-[212px]
			qhd:left-[1814px]
			desktop:top-[212px]
			desktop:left-[1494px]
			desktopxs:top-[212px]
			desktopxs:left-[1085px]
			"
			/>
			<div
				className="flex flex-col items-center justify-center text-center
			qhd:mt-[104px]
			desktop:mt-[104px]
			desktopxs:mt-[89px]
			"
			>
				<div
					className="relative 
					desktopxs:top-[73px] desktopxs:right-[205px]
					laptop:top-[62px] laptop:right-[154px]
					tablet:top-[56px] tablet:right-[92px]
					mobile:top-[40px] mobile:right-[67px]
					
					"
				>
					<Image
						src={TextBgSVG}
						alt=""
						// width < 376 ? 138 : width < 1025 ? 218 : 184
						width={203}
						height={49}
					/>
				</div>
				<h1
					className="
					z-10
					text-neutral-900
					text-[62px]
					font-medium
					leading-[70px]
					max-w-[704px]
					mb-[20px]
					desktop:mb-[20px]
					desktopxs:mb-[40px]
				"
				>
					Ждём вас с любыми вопросами
				</h1>
				<p
					className="
				z-10
				 text-neutral-900
				 text-[22px]
				 font-normal
				 leading-[30px]
				 qhd:max-w-[820px]
				 desktop:max-w-[800px]
				 desktopxs:max-w-[788px]
				 mb-[80px]
				 "
				>
					У нас прозрачное агентство, открытое к диалогу. Вы всегда можете обратиться
					за бесплатной консультацией по вашему кейсу, узнать больше о NOAH и наших
					услугах или предложить деловое сотрудничество.
				</p>
				<Image src={ArrowDownSVG} alt="" />
			</div>
		</div>
	);
};

export default FirstSection;
