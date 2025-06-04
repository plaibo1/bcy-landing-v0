import { Users, Award, Clock, Shield } from "lucide-react";

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
            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-10 w-10 text-blue-600" />
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-3">2000+</div>
            <div className="text-lg text-gray-600">Довольных клиентов</div>
          </div>
          <div className="text-center">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="h-10 w-10 text-green-600" />
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-3">95%</div>
            <div className="text-lg text-gray-600">Успешных дел</div>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="h-10 w-10 text-purple-600" />
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-3">8</div>
            <div className="text-lg text-gray-600">Месяцев в среднем</div>
          </div>
          <div className="text-center">
            <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="h-10 w-10 text-orange-600" />
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-3">10+</div>
            <div className="text-lg text-gray-600">Лет опыта</div>
          </div>
        </div>
      </div>
    </section>
  );
}
