import { CheckCircle } from "lucide-react";
import { ConsultationFormHero } from "@/components/forms/consultation-form-hero";

export function Hero() {
  return (
    <section className="py-24 md:py-32 from-white via-blue-50 to-indigo-100 relative">
      <div className="bg-hero" />
      <div className="bg-black opacity-55 absolute left-0 top-0 w-full h-full" />

      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-50 leading-tight tracking-tight">
            Законно спишем долги или выплатим их за Вас
          </h1>
          <p className="text-xl md:text-2xl text-slate-100 leading-relaxed max-w-3xl mx-auto">
            Спишем долги за 6-12 месяцев с гарантией или вернем деньги по
            договору
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-6 w-6 text-green-600" />
              <span className="text-slate-200 font-medium">100% законно</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-6 w-6 text-green-600" />
              <span className="text-slate-200 font-medium">
                Гарантия результата
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-6 w-6 text-green-600" />
              <span className="text-slate-200 font-medium">Опыт 10+ лет</span>
            </div>
          </div>

          <ConsultationFormHero />
        </div>
      </div>
    </section>
  );
}
