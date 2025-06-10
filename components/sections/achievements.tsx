import { Users, TrendingUp, Clock, Building } from "lucide-react";

export function Achievements() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Наши достижения
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Цифры, которые говорят о нашем профессионализме
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="text-center">
            <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-10 w-10 text-blue-600" />
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-3">1056</div>
            <div className="text-lg text-gray-600 leading-relaxed">
              Успешных завершенных дел по всей России
            </div>
          </div>
          <div className="text-center">
            <div className="bg-emerald-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="h-10 w-10 text-emerald-600" />
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-3">50 млн</div>
            <div className="text-lg text-gray-600 leading-relaxed">
              Списанных долгов
            </div>
          </div>
          <div className="text-center">
            <div className="bg-amber-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="h-10 w-10 text-amber-600" />
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-3">10 лет</div>
            <div className="text-lg text-gray-600 leading-relaxed">
              Работаем с 2015 года!
            </div>
          </div>
          <div className="text-center">
            <div className="bg-purple-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Building className="h-10 w-10 text-purple-600" />
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-3">
              30 офисов
            </div>
            <div className="text-lg text-gray-600 leading-relaxed">
              С успешными списаниями растем и мы!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
