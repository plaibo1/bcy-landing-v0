import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star } from "lucide-react"

export function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Отзывы клиентов</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Что говорят о нас наши клиенты</p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          <Card className="bg-gradient-to-br from-white to-primary-50 border-0 shadow-lg">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Avatar className="h-14 w-14 border-2 border-primary-200">
                  <AvatarFallback className="bg-primary-100 text-primary text-lg font-medium">АС</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-bold text-lg">Анна Смирнова</div>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-lg">
                "Спасибо огромное! Списали долги на 800 тысяч рублей. Процедура прошла быстро и без проблем. Очень
                профессиональная команда."
              </p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-white to-primary-50 border-0 shadow-lg">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Avatar className="h-14 w-14 border-2 border-primary-200">
                  <AvatarFallback className="bg-primary-100 text-primary text-lg font-medium">МП</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-bold text-lg">Михаил Петров</div>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-lg">
                "Долго сомневался, но решился. Не пожалел! Долги списали полностью, квартиру сохранил. Рекомендую всем,
                кто в сложной ситуации."
              </p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-white to-primary-50 border-0 shadow-lg">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Avatar className="h-14 w-14 border-2 border-primary-200">
                  <AvatarFallback className="bg-primary-100 text-primary text-lg font-medium">ЕИ</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-bold text-lg">Елена Иванова</div>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-lg">
                "Отличная работа! Все объяснили понятно, документы помогли собрать. Через 7 месяцев получила решение о
                списании долгов."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
