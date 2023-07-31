import noah from "@/public/pictures/contacts/noah.png";
import noahMobile from "@/public/pictures/contacts/noah mobile.png";
import maps2560 from "@/public/pictures/contacts/maps2560.png";
import maps1920 from "@/public/pictures/contacts/maps1920.png";
import maps1440 from "@/public/pictures/contacts/maps1440.png";
import maps768 from "@/public/pictures/contacts/maps768.png";
import maps375 from "@/public/pictures/contacts/maps375.png";
import PhoneIcon from "@/public/pictures/contacts/phone.png";
import EmailIcon from "@/public/pictures/contacts/email.png";
import LinkedInIcon from "@/public/pictures/contacts/linkedin.svg";
import TelegramIcon from "@/public/pictures/contacts/telegram.svg";
import Image from "next/image";

interface ThirdSectionProps {
	windowSize: WindowSize;
}

interface WindowSize {
	width: number;
	height: number;
}

const ThirdSection: React.FC<ThirdSectionProps> = ({ windowSize }) => {
	const { width, height } = windowSize;
	return (
		<div className="relative flex flex-col mt-[160px]  bg-maps2560">
			<div className="flex flex-row items-end m-auto mb-[60px]">
				<h3
					className="
					z-10
				text-black
				text-[54px]
				font-medium
				leading-[60px]
				mr-[20px]
				"
				>
					Где находится сердце
				</h3>
				<Image
					src={noah.src}
					height={45.6}
					width={194}
					alt="noah logo"
					className="z-10"
				/>
			</div>
			<Image
				src={
					width >= 2560
						? maps2560
						: width >= 1920
						? maps1920
						: width >= 1440
						? maps1440
						: width >= 1440
						? maps1440
						: width >= 768
						? maps768
						: maps375
				}
				height={498}
				className="flex justify-center m-auto"
				alt=""
			/>
			<div
				className="absolute z-10 
			qhd:top-[164px] qhd:left-[683px] 
			desktop:top-[164px] desktop:left-[363px]
			desktopxs:top-[164px] desktopxs:left-[127px]
			w-[394px] h-[418px] bg-white rounded-[20px]"
			>
				<div className="flex flex-col mt-[31px] ml-[54px] max-w-[280px]">
					<p
						className="
						text-teal-600
						text-[22px]
						font-bold
						leading-[30px]
						"
					>
						Мы находимся по адресу DIFC Innovation Hub, Дубай, ОАЭ
					</p>
					<div className="flex flex-row mt-[31px]">
						<Image src={PhoneIcon} alt="" className="" />
						<p
							className="
							text-stone-950
							text-[22px]
							font-bold
							leading-[30px]
							ml-[20px]
						"
						>
							+971 (56) 159-43-88
						</p>
					</div>
					<div className="flex flex-row mt-[25px]">
						<Image src={EmailIcon} alt="" className="" />
						<p
							className="
							text-stone-950
							text-[22px]
							font-bold
							leading-[30px]
							ml-[20px]
						"
						>
							info@noahboy.ai
						</p>
					</div>

					<p
						className="
					text-black
					text-lg
					font-normal
					leading-7
					mt-[46px]
					"
					>
						Мы в социальных сетях:
					</p>
					<div className="flex flex-row mt-[16px]">
						<Image src={LinkedInIcon} alt="" className="mr-[20px]" />
						<Image src={TelegramIcon} alt="" className="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ThirdSection;
