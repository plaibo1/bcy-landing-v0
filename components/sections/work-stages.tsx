import { Calendar, FileCheck, CheckSquare, Sparkles } from "lucide-react";

export function WorkStages() {
  return (
    <section id="stages" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Этапы работы
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Простой и понятный процесс от консультации до списания долгов
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Timeline container */}
          <div className="relative">
            {/* Vertical line - скрыта на мобильных, показана на десктопе */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200"></div>

            {/* Мобильная вертикальная линия */}
            <div className="md:hidden absolute left-6 top-0 h-full w-1 bg-primary-200"></div>

            {/* Stage 1 */}
            <div className="relative flex flex-col md:flex-row items-start md:items-center md:justify-between mb-16 md:mb-24">
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center z-10">
                <Calendar className="h-6 w-6 text-white" />
              </div>

              {/* Content - на мобильных всегда справа от точки */}
              <div className="ml-20 md:ml-0 md:w-[calc(50%-3rem)] md:pr-12 md:text-right md:order-1">
                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-primary">
                    Проведение консультации
                  </h3>
                  <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-primary-100 text-primary-800 text-sm font-medium mb-4">
                    1 день
                  </div>
                  <p className="text-gray-600 text-base md:text-lg">
                    Оставьте заявку на нашем сайте, с вами созвонится эксперт,
                    чтобы подобрать для вас оптимальный план и тариф. После чего
                    вы можете заключить договор и приступить к процедуре.
                  </p>
                </div>
              </div>

              {/* Пустое место для десктопа */}
              <div className="hidden md:block md:w-[calc(50%-3rem)] md:pl-12 md:order-2"></div>
            </div>

            {/* Stage 2 */}
            <div className="relative flex flex-col md:flex-row items-start md:items-center md:justify-between mb-16 md:mb-24">
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center z-10">
                <FileCheck className="h-6 w-6 text-white" />
              </div>

              {/* Пустое место для десктопа */}
              <div className="hidden md:block md:w-[calc(50%-3rem)] md:pr-12 md:order-1"></div>

              {/* Content */}
              <div className="ml-20 md:ml-0 md:w-[calc(50%-3rem)] md:pl-12 md:order-2">
                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-primary">
                    Подготовка документов
                  </h3>
                  <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-primary-100 text-primary-800 text-sm font-medium mb-4">
                    1 месяц
                  </div>
                  <p className="text-gray-600 text-base md:text-lg">
                    На этом этапе наш юрист собирает все необходимые документы
                    для подачи в суд. Не переживайте, вам не нужно
                    самостоятельно заказывать справки, мы сделаем это за вас и
                    проложим начало вашей дороги в свободную жизнь.
                  </p>
                </div>
              </div>
            </div>

            {/* Stage 3 */}
            <div className="relative flex flex-col md:flex-row items-start md:items-center md:justify-between mb-16 md:mb-24">
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center z-10">
                <CheckSquare className="h-6 w-6 text-white" />
              </div>

              {/* Content */}
              <div className="ml-20 md:ml-0 md:w-[calc(50%-3rem)] md:pr-12 md:text-right md:order-1">
                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-primary">
                    Проведение процедуры
                  </h3>
                  <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-primary-100 text-primary-800 text-sm font-medium mb-4">
                    1-2 месяца
                  </div>
                  <p className="text-gray-600 text-base md:text-lg">
                    От начала и до конца процедуры мы и наш специалист всегда
                    будем с вами на связи. При необходимости мы соберем
                    дополнительные документы для подачи в суд, напишем
                    необходимые ходатайства и другие судебные письма и справки
                    которые может потребовать суд.
                  </p>
                </div>
              </div>

              {/* Пустое место для десктопа */}
              <div className="hidden md:block md:w-[calc(50%-3rem)] md:pl-12 md:order-2"></div>
            </div>

            {/* Stage 4 */}
            <div className="relative flex flex-col md:flex-row items-start md:items-center md:justify-between">
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center z-10">
                <Sparkles className="h-6 w-6 text-white" />
              </div>

              {/* Пустое место для десктопа */}
              <div className="hidden md:block md:w-[calc(50%-3rem)] md:pr-12 md:order-1"></div>

              {/* Content */}
              <div className="ml-20 md:ml-0 md:w-[calc(50%-3rem)] md:pl-12 md:order-2">
                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-primary">
                    Конец процедуры
                  </h3>
                  <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-primary-100 text-primary-800 text-sm font-medium mb-4">
                    6 месяцев
                  </div>
                  <p className="text-gray-600 text-base md:text-lg">
                    Принимаем к сведению о принятии решения становления вас
                    банкротом. Формируем справку о банкротстве и отпускаем вас с
                    чистым сердцем и душой жить заново без долгов!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
