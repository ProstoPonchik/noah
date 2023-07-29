import Image from "next/image";
import SecondBlockSVG from "@/public/about/about second block.svg";
import SecondBlockSVG1024 from "@/public/about/about second block1024.svg";

interface SecondBlockProps {
	windowSize: WindowSize;
}

interface WindowSize {
	width: number;
	height: number;
}

const SecondBlock: React.FC<SecondBlockProps> = ({ windowSize }) => {
	const { width, height } = windowSize;
	return (
		<div className="bg-white pt-[158px] pb-[108px] desktopxs:pt-[158px] laptop:pt-[55px] desktopxs:pb-[108px] laptop:pb-[50px]">
			<div className="flex flex-col items-center">
				<div
					className="text-stone-950
                            text-[54px]
                            font-medium
                            leading-[60px]
                            mb-[40px]
							desktopxs:mb-[40px]
							laptop:mb-[20px]
							"
				>
					Помогаем громко заявить о себе
				</div>
				<div
					className="text-black
                            text-[22px]
                            font-normal
                            leading-[30px]
							desktopxs:w-[629px]
							laptop:w-[570px]
							text-center
							"
				>
					Наша миссия — показать бизнесменам из стран СНГ короткий путь к
					международному успеху
				</div>
				<div
					className="flex flex-row justify-center items-center mt-[60px]
				desktopxs:w-[1045px]
				laptop:w-[979px]
				desktopxs:justify-center
				laptop:justify-between
				desktopxs:mt-[60px] 
				laptop:mt-[40px]
				"
				>
					<div className="flex flex-col w-[505px] desktopxs:w-[505px] laptop:w-[344px]">
						<h3
							className="text-stone-950
                                text-[22px]
								desktopxs:text-[22px]
								laptop:text-lg
                                font-bold
                                leading-[30px]
                                mb-5
                                "
						>
							По своему опыту знаем, что для выхода на международный рынок не нужно
							много времени и денег:
						</h3>

						<span
							className="text-stone-950 text-[22px] font-normal leading-[30px]
							desktopxs:text-[22px]
							laptop:text-lg"
						>
							мы
							<span
								className="text-teal-500 text-[22px] font-bold leading-[30px]
								desktopxs:text-[22px]
								laptop:text-lg"
							>
								{" "}
							</span>
							<span
								className="text-teal-500 text-[22px] font-bold leading-[30px]
								desktopxs:text-[22px]
								laptop:text-lg"
							>
								закрыли
							</span>
							<span
								className="text-teal-500 text-[22px] font-bold leading-[30px]
								desktopxs:text-[22px]
								laptop:text-lg"
							>
								{" "}
							</span>
							<span
								className="text-stone-950 text-[22px] font-normal leading-[30px]
								desktopxs:text-[22px]
								laptop:text-lg"
							>
								первый раунд инвестиций для NOAH всего за 24 часа.
							</span>
						</span>
						<p
							className="
                        mt-[40px]
                text-teal-500
                text-[22px]
                font-bold
                leading-[30px]
				desktopxs:text-[22px]
				laptop:text-lg
				whitespace-pre-wrap
                "
						>
							{`Секрет в быстрой адаптации продукта под нужную аудиторию и грамотно выстроенной коммуникации.\n\nМы довели эту методику до совершенства и готовы поделиться ей с вами.`}
						</p>
					</div>
					<Image
						src={width > 1024 ? SecondBlockSVG : SecondBlockSVG1024}
						alt=""
						className=""
					/>
				</div>
			</div>
		</div>
	);
};

export default SecondBlock;
