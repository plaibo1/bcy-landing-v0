import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, X } from "lucide-react";

import { ChooseTariffButton } from "../featureComponents/choose-tarrif-button";

interface TariffFeature {
  text: string;
  disabled?: boolean;
}

interface Tariff {
  id: string;
  title: string;
  description: string;
  price: string;
  popular?: boolean;
  features: TariffFeature[];
  headerGradient: string;
}

const tariffs: Tariff[] = [
  {
    id: "standard",
    title: "Стандарт",
    description: "Для большинства случаев",
    price: "от 9 000 ₽/мес",
    headerGradient: "bg-gradient-to-br from-gray-50 to-gray-100",
    features: [
      { text: "Подготовка юридических документов" },
      { text: "Суд без вашего участия" },
      { text: "Личный финансовый управляющий" },
      { text: "Антиколлектор" },
      { text: "Сбор документов" },
      { text: "Подача заявления", disabled: true },
      { text: "Cохранение имущества и денежных средств", disabled: true },
      { text: "Снятие арестов с имущества", disabled: true },
      { text: "Получение денег с заблокированных счетов", disabled: true },
      { text: "Юридические консультации по общим вопросам", disabled: true },
    ],
  },
  {
    id: "comfort",
    title: "Комфорт",
    description: "Максимальный сервис",
    price: "от 12 000 ₽/мес.",
    popular: true,
    headerGradient: "bg-gradient-to-br from-primary-50 to-primary-100",
    features: [
      { text: "Подготовка юридических документов" },
      { text: "Суд без вашего участия" },
      { text: "Личный финансовый управляющий" },
      { text: "Антиколлектор" },
      { text: "Сбор документов" },
      { text: "Подача заявления в суд" },
      { text: "Cохранение имущества и денежных средств" },
      { text: "Снятие арестов с имущества" },
      { text: "Получение денег с заблокированных счетов" },
      { text: "Юридические консультации по общим вопросам" },
    ],
  },
  {
    id: "pensioner",
    title: "Для пенсионеров",
    description: "Специальные условия",
    price: "от 6 500 ₽/мес.",
    headerGradient: "bg-gradient-to-br from-gray-50 to-gray-100",
    features: [
      { text: "Подготовка юридических документов" },
      { text: "Суд без вашего участия" },
      { text: "Личный финансовый управляющий" },
      { text: "Антиколлектор" },
      { text: "Сбор документов" },
      { text: "Подача заявления" },
      { text: "Cохранение имущества и денежных средств" },
      { text: "Снятие арестов с имущества" },
      { text: "Получение денег с заблокированных счетов" },
      { text: "Юридические консультации по общим вопросам" },
      { text: "Выезд на дом" },
      { text: "Возможность дистанционного заключения договора" },
      { text: "Дистанционный сбор документов" },
      { text: "Рассрочка до 12 месяцев" },
    ],
  },
];

export function Tariffs() {
  const renderTariffCard = (tariff: Tariff) => {
    const isPopular = tariff.popular;
    const cardClasses = `border-0 shadow-xl flex flex-col ${
      isPopular ? "shadow-2xl relative bg-white scale-105 z-10" : ""
    }`;

    return (
      <Card key={tariff.id} className={cardClasses}>
        {isPopular && (
          <div className="absolute -top-5 left-0 right-0 flex justify-center">
            <Badge className="bg-primary text-base py-1 px-4 font-medium">
              Популярный
            </Badge>
          </div>
        )}

        <CardHeader className={`text-center ${tariff.headerGradient} pb-8`}>
          <CardTitle className="text-2xl font-bold">{tariff.title}</CardTitle>
          <CardDescription className="text-base">
            {tariff.description}
          </CardDescription>
          <div className="text-4xl font-bold text-primary mt-6">
            {tariff.price}
          </div>
        </CardHeader>

        <CardContent className="space-y-4 pt-8 flex-grow">
          {tariff.features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-3">
              {feature.disabled ? (
                <X className="h-5 w-5 text-gray-300 flex-shrink-0 mt-0.5" />
              ) : (
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              )}
              <span
                className={`text-base ${
                  feature.disabled
                    ? "text-gray-400 line-through"
                    : index === 0 && feature.text.includes("услуги тарифа")
                    ? "font-medium"
                    : ""
                }`}
              >
                {feature.text}
              </span>
            </div>
          ))}

          <div className="mt-auto pt-6">
            <ChooseTariffButton />
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <section
      id="tariffs"
      className="py-24 bg-gradient-to-br from-gray-50 to-primary-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Тарифы
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Выберите подходящий тариф для вашей ситуации
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tariffs.map(renderTariffCard)}
        </div>
      </div>
    </section>
  );
}
