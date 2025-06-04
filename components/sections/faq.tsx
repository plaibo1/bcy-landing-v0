import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Часто задаваемые вопросы</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Ответы на самые популярные вопросы о банкротстве</p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-6">
            <AccordionItem value="item-1" className="bg-white rounded-2xl px-8 py-2 shadow-md border-0">
              <AccordionTrigger className="text-left text-xl font-medium py-4">
                Какие долги можно списать через банкротство?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-gray-600">
                Через банкротство можно списать кредиты, займы, долги по коммунальным платежам, налоги, штрафы и другие
                денежные обязательства. Не списываются алименты, возмещение вреда жизни и здоровью.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="bg-white rounded-2xl px-8 py-2 shadow-md border-0">
              <AccordionTrigger className="text-left text-xl font-medium py-4">
                Сколько стоит процедура банкротства?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-gray-600">
                Стоимость зависит от выбранного тарифа и сложности дела. У нас есть тарифы от 25 000 рублей с
                возможностью рассрочки.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="bg-white rounded-2xl px-8 py-2 shadow-md border-0">
              <AccordionTrigger className="text-left text-xl font-medium py-4">
                Можно ли сохранить единственное жилье?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-gray-600">
                Да, единственное жилье, не находящееся в залоге, сохраняется за должником. Также сохраняются предметы
                первой необходимости и имущество стоимостью до 100 МРОТ.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="bg-white rounded-2xl px-8 py-2 shadow-md border-0">
              <AccordionTrigger className="text-left text-xl font-medium py-4">
                Какие последствия банкротства?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-gray-600">
                В течение 5 лет нельзя повторно подавать на банкротство, 3 года нельзя занимать руководящие должности в
                финансовых организациях. При получении кредитов нужно уведомлять о банкротстве.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
