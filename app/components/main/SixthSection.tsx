export default function SixthSection() {
  return (
    <section className="flex flex-col items-center">
      <h3 className="text-center text-stone-950 text-[54px] font-medium leading-[60px] mb-[40px] max-w-[850px]">
        Искусственный интеллект 🤖берётся за дело
      </h3>
      <p className="mb-[80px] text-center text-black text-[22px] font-normal leading-[30px]">
        Когда все креативы готовы, к работе приступает наш технологичный продукт
      </p>
      <div className="grid grid-cols-4 gap-x-[36px]">
        <article className="flex flex-col items-start max-w-[290px]">
          <h5 className="text-[40px] font-extrabold text-[#19B6B1]">01.</h5>
          <p className="text-stone-950 text-[22px] font-normal leading-[30px]">
            На основе портретов ЦА составляет базу контактов, по которой будет
            рассылать приглашения
          </p>
        </article>
        <article className="flex flex-col items-start max-w-[290px]">
          <h5 className="text-[40px] font-extrabold text-[#E2C89F]">02.</h5>
          <p className="text-stone-950 text-[22px] font-normal leading-[30px]">
            Проводит A/B тестирование текстов приглашений и выбирает наиболее
            эффективные
          </p>
        </article>
        <article className="flex flex-col items-start max-w-[290px]">
          <h5 className="text-[40px] font-extrabold text-[#B5B7BA]">03.</h5>
          <p className="text-stone-950 text-[22px] font-normal leading-[30px]">
            Рассылает до 1500 приглашений в месяц, что до 5 раз больше
            стандартного количества{" "}
          </p>
        </article>
        <article className="flex flex-col items-start max-w-[290px]">
          <h5 className="text-[40px] font-extrabold text-[#E899B0]">04.</h5>
          <p className="text-stone-950 text-[22px] font-normal leading-[30px]">
            Закрывает лидов вместо вас с помощью цепочки сообщений и бронирует
            онлайн-встречи в Calendly
          </p>
        </article>
      </div>
    </section>
  );
}
