"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, CheckCircle } from "lucide-react";

export function CallToAction() {
  const scrollToConsultation = () => {
    // Находим элемент с id "consultation" и скроллим к нему
    const consultationSection = document.getElementById("consultation");
    if (consultationSection) {
      consultationSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900 relative overflow-hidden">
      {/* Паттерн сетки */}
      <div className="absolute inset-0 opacity-30">
        <svg
          className="absolute inset-0 h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid-pattern"
              x="0"
              y="0"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-primary-200"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      {/* Градиентные акценты */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Основной контент */}
          <div className="space-y-4">
            <div className="inline-flex items-center justify-center px-3 py-1.5 bg-primary-50 rounded-full border border-primary-200 mb-4">
              <Shield className="h-3.5 w-3.5 text-primary mr-1.5" />
              <span className="text-primary font-medium text-xs">
                100% Законное решение
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Банкротство физических лиц —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-400">
                ваш законный путь
              </span>{" "}
              к свободе от долгов
            </h2>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
              Не ждите, пока долги станут неподъемными. Начните процедуру
              банкротства уже сегодня.
            </p>
          </div>

          {/* Преимущества */}
          <div className="grid grid-cols-3 gap-3 md:gap-6 py-4">
            <div className="flex flex-col items-center space-y-2 bg-white/70 backdrop-blur-sm p-3 md:p-4 rounded-xl border border-white/40 shadow-sm">
              <div className="bg-primary-50 p-2 md:p-3 rounded-xl">
                <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-primary" />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-sm md:text-base">
                  Гарантия результата
                </h3>
                <p className="text-gray-600 text-xs md:text-sm">
                  Или вернем деньги
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-2 bg-white/70 backdrop-blur-sm p-3 md:p-4 rounded-xl border border-white/40 shadow-sm">
              <div className="bg-primary-50 p-2 md:p-3 rounded-xl">
                <Clock className="h-5 w-5 md:h-6 md:w-6 text-primary" />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-sm md:text-base">
                  6-12 месяцев
                </h3>
                <p className="text-gray-600 text-xs md:text-sm">Средний срок</p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-2 bg-white/70 backdrop-blur-sm p-3 md:p-4 rounded-xl border border-white/40 shadow-sm">
              <div className="bg-primary-50 p-2 md:p-3 rounded-xl">
                <Shield className="h-5 w-5 md:h-6 md:w-6 text-primary" />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-sm md:text-base">
                  Полная защита
                </h3>
                <p className="text-gray-600 text-xs md:text-sm">
                  От кредиторов
                </p>
              </div>
            </div>
          </div>

          {/* Кнопки действий */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-4">
            <Button
              size="lg"
              onClick={scrollToConsultation}
              className="bg-primary hover:bg-primary-600 text-white px-6 py-5 h-auto text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              Начать процедуру
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={scrollToConsultation}
              className="border-2 border-primary text-primary hover:bg-primary-50 px-6 py-5 h-auto text-base font-semibold rounded-xl backdrop-blur-sm bg-white/50"
            >
              Консультация
            </Button>
          </div>

          {/* Дополнительная информация */}
          <div className="pt-8 border-t border-gray-200">
            <p className="text-gray-600 text-sm">
              ⚡ Первая консультация бесплатно • 📞 Ответим в течение 15 минут •
              🛡️ Конфиденциальность гарантирована
            </p>
          </div>
          {/* <div className="pt-4 border-t border-gray-200">
            <p className="text-gray-600 text-xs">
              ⚡ Первая консультация бесплатно • 📞 Ответим в течение 15 минут
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
}
