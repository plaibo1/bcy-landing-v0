import { FileText, Shield, Clock } from "lucide-react";

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
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-10 rounded-3xl">
            <FileText className="h-16 w-16 text-blue-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Полное сопровождение</h3>
            <p className="text-gray-700 text-lg">
              Ведем ваше дело от консультации до получения решения суда о
              списании долгов
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-10 rounded-3xl">
            <Shield className="h-16 w-16 text-green-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Гарантия результата</h3>
            <p className="text-gray-700 text-lg">
              Если не сможем списать долги, вернем деньги согласно договору
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-10 rounded-3xl">
            <Clock className="h-16 w-16 text-purple-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Быстрые сроки</h3>
            <p className="text-gray-700 text-lg">
              Процедура банкротства занимает от 6 до 12 месяцев в зависимости от
              сложности дела
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
