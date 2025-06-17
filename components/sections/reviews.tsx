import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

interface Review {
  id: number;
  name: string;
  initials: string;
  rating: number;
  text: string;
  imageSrc: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Андрей",
    initials: "А",
    rating: 5,
    text: "Обратился в 'Свободу от Долгов' в отчаянии — долги душили, коллекторы не давали жить. Команда профессионалов провела меня через банкротство с минимальным стрессом. Все долги списаны, теперь дышу свободно. Спасибо!",
    imageSrc: "./images/reviews/andrew.png",
  },
  {
    id: 2,
    name: "Василий",
    initials: "В",
    rating: 5,
    text: "Никогда не думал, что банкротство может быть таким… спокойным. Юристы 'Свободы от Долгов' взяли на себя все хлопоты: от документов до суда. Никаких нервов — только результат. Рекомендую!",
    imageSrc: "./images/reviews/vasiliy.png",
  },
  {
    id: 3,
    name: "Максим",
    initials: "М",
    rating: 5,
    text: "Долго боялся начинать процедуру, но 'Свобода от Долгов' развеяла все страхи. Четкие инструкции, сопровождение на каждом этапе — и вот я официально без долгов! Если сомневаетесь — не тяните, обращайтесь.",
    imageSrc: "./images/reviews/max.png",
  },
  {
    id: 4,
    name: "Варвара",
    initials: "В",
    rating: 5,
    text: "Пробовала решить проблему с долгами сама, но только запуталась. 'Свобода от Долгов' сделала всё быстро и правильно: собрали документы, подали в суд, защитили от коллекторов. Теперь понимаю — лучше сразу к профессионалам!",
    imageSrc: "./images/reviews/varvara.png",
  },
  {
    id: 5,
    name: "Дмитрий",
    initials: "Д",
    rating: 5,
    text: "Звонили из банков, угрожали коллекторы — казалось, выхода нет. 'Свобода от Долгов' не просто помогла списать долги, а вернула спокойствие. Суд прошел без проблем, теперь живу без этого груза. Огромное спасибо!",
    imageSrc: "./images/reviews/dmitry.png",
  },
];

export function Reviews() {
  const topReviews = reviews.slice(0, 3);
  const bottomReviews = reviews.slice(3, 5);

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }, (_, i) => (
      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
    ));
  };

  const renderReviewCard = (review: Review) => (
    <Card
      key={review.id}
      className="bg-gradient-to-br from-white to-primary-50 border-0 shadow-lg"
    >
      <CardHeader>
        <div className="flex items-center space-x-4">
          <Avatar className="h-14 w-14 border-2 border-primary-200">
            <AvatarImage
              src={review.imageSrc}
              alt={`Защита от долгов, клиент ${review.name}`}
            />
            <AvatarFallback className="bg-primary-100 text-primary text-lg font-medium">
              {review.initials}
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="font-bold text-lg">{review.name}</div>
            <div className="flex items-center">
              {renderStars(review.rating)}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 text-lg">"{review.text}"</p>
      </CardContent>
    </Card>
  );

  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Отзывы клиентов
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Что говорят о нас наши клиенты
          </p>
        </div>

        {/* Верхний ряд - 3 отзыва */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {topReviews.map(renderReviewCard)}
        </div>

        {/* Нижний ряд - 2 отзыва по центру */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {bottomReviews.map(renderReviewCard)}
        </div>
      </div>
    </section>
  );
}
