import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Часто задаваемые вопросы
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ответы на самые популярные вопросы о банкротстве
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-6">
            <AccordionItem
              value="item-1"
              className="bg-white rounded-2xl px-8 py-2 shadow-md border-0"
            >
              <AccordionTrigger className="text-left text-xl font-medium py-4">
                Какие последствия у банкротства?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-gray-600">
                Первые последствия наступают после принятия судебного
                решения:Исполнительные производства в отношении должника
                прекращаются. Это значит, что судебные приставы больше не будут
                иметь доступ к вашим доходам. Происходит остановка начисления
                штрафов за просрочки в выплатах кредитов. Платить по кредитам
                больше не нужно.После того, как процедура банкротства
                физического лица завершается, гражданин больше никому ничего не
                должен:1. Все долги списываются.2. Снимаются все ограничения,
                связанные с судебным производством.Есть ли негативные моменты?
                Их минимум! Большинство граждан они никак не затронут:При
                обращении за кредитом нужно указывать свой статус банкрота в
                течение пяти лет. Несмотря на это, кредиты брать по-прежнему
                можно.Не менее 3-х лет нельзя участвовать в управлении
                организацией.В течение пяти лет нельзя повторно пройти процедуру
                банкротства
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="bg-white rounded-2xl px-8 py-2 shadow-md border-0"
            >
              <AccordionTrigger className="text-left text-xl font-medium py-4">
                Нужно ли мне приезжать в суд для участия в заседаниях?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-gray-600">
                Нет. Юристы компании представят ваши интересы в суде и будут
                держать вас в курсе дела на всех этапах.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="bg-white rounded-2xl px-8 py-2 shadow-md border-0"
            >
              <AccordionTrigger className="text-left text-xl font-medium py-4">
                Можно ли банкротиться если у меня есть ипотека?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-gray-600">
                Это возможно (у нас есть несколько таких клиентов). Однако,
                нужно быть готовым, что квартиру Вы потеряете. Если Вы не можете
                платить по ипотеке и морально готовы расстаться с квартирой,
                потерять её в процедуре банкротства физлица будет гораздо
                выгоднее, чем её заберёт банк. Связано это с тем, что банк
                оценит квартиру по заниженной (залоговой) стоимости, а остаток
                долга по договору перейдёт на Вас. А при банкротстве спишутся
                абсолютно все долги, даже те, которые не относятся к ипотеке
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="bg-white rounded-2xl px-8 py-2 shadow-md border-0"
            >
              <AccordionTrigger className="text-left text-xl font-medium py-4">
                Есть ли рассрочка на банкротство?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-gray-600">
                Да, у нас есть рассрочка до 12 месяцев. Если вы оплачиваете
                сумму полностью сразу, то получаете скидку.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="bg-white rounded-2xl px-8 py-2 shadow-md border-0"
            >
              <AccordionTrigger className="text-left text-xl font-medium py-4">
                Смогу ли я оформить ипотеку после банкротства?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-gray-600">
                В соответствии с ФЗ за №127 никаких прямых запретов на получение
                новой ипотеки после завершения процедуры банкротства нет. Но
                согласно законодательству, заемщики обязаны указывать информацию
                о своем статусе банкрота в заявке на ипотеку. Это является
                важным фактором, влияющим на решение банка. Вероятность
                одобрения заявки для лиц, имеющих в прошлом банкротство, крайне
                низкая. Банки, как правило, требуют, чтобы после завершения
                процедуры банкротства прошло значительное время (до 5-10 лет), а
                кредитная история заемщика была восстановлена. Более подробно
                вам расскажут о том, как восстановить свою КИ на юридической
                консультации по банкротству в нашем центре.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
