import Image from "next/image";
interface CardPeopleProps {
	name: string;
	position: string;
	image: string;
	description: string;
}

export default function CardPeople({
	name,
	position,
	image,
	description,
}: CardPeopleProps) {
	return (
		<div
			className="flex flex-row text-white h-[455px] w-[293px]
		laptop:h-[455px]
		tablet:h-[455px]
		mobile:h-auto
		"
		>
			<div>
				<Image
					src={image}
					width={293}
					height={237}
					alt={name}
					loading="lazy"
					className="rounded-[20px] w-[293px] h-[237px] object-cover object-center"
				/>
				<div
					className="
                                text-white
                                text-[22px]
                                font-bold
                                leading-[30px]
                                mt-[20px]
                                mb-[10px]
                "
				>
					{name}
				</div>
				<div
					className="
                            text-stone-950
                            rounded-[3px]
                            justify-center
                            items-center
                            gap-2.5
                            inline-flex
                            text-xs
                            font-bold
                            leading-none
                            px-[5px]
                            pb-[2px]
							pt-[3px]
                            bg-orange-200
                            tracking-tight
                            mb-[20px]
                            font-inter
                            "
				>
					{position}
				</div>
				<div
					className="text-slate-50
                                text-base
                                font-light
                                leading-normal
                                font-inter
                                "
				>
					{description}
				</div>
			</div>
		</div>
	);
}
