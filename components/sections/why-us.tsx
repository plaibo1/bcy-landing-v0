import { Scale, UserCheck, CreditCard } from "lucide-react";

export function WhyUs() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Преимущества работы с нашей компанией
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {/* Карточка 1 - Синяя */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-10 rounded-3xl border border-blue-200">
            <Scale className="h-16 w-16 text-blue-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-blue-900">
              Полностью законная процедура
            </h3>
            <p className="text-blue-800 text-lg">
              Работаем строго в рамках закона о банкротстве 127-ФЗ. Все
              процедуры проводятся официально через суд.
            </p>
          </div>

          {/* Карточка 2 - Зеленая (Primary) */}
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-10 rounded-3xl border border-primary-200">
            <UserCheck className="h-16 w-16 text-primary-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-primary-900">
              Персональный эксперт для вашего дела
            </h3>
            <p className="text-primary-800 text-lg">
              За каждым клиентом закрепляется опытный юрист, который ведет дело
              от начала до конца.
            </p>
          </div>

          {/* Карточка 3 - Оранжевая */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-10 rounded-3xl border border-orange-200">
            <CreditCard className="h-16 w-16 text-orange-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-orange-900">
              Доступные цены и 100% рассрочка
            </h3>
            <p className="text-orange-800 text-lg">
              Гибкая система оплаты с возможностью рассрочки до 12 месяцев без
              переплат и скрытых комиссий.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
