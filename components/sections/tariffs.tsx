import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"

export function Tariffs() {
  return (
    <section id="tariffs" className="py-24 bg-gradient-to-br from-gray-50 to-primary-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Тарифы</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Выберите подходящий тариф для вашей ситуации</p>
        </div>
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          <Card className="border-0 shadow-xl overflow-hidden">
            <CardHeader className="text-center bg-gradient-to-br from-gray-50 to-gray-100 pb-8">
              <CardTitle className="text-2xl font-bold">Стандарт</CardTitle>
              <CardDescription className="text-base">Для большинства случаев</CardDescription>
              <div className="text-4xl font-bold text-primary mt-6">45 000 ₽</div>
            </CardHeader>
            <CardContent className="space-y-6 pt-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-base">Консультация юриста</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-base">Подготовка документов</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-base">Подача заявления в суд</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-base">Представительство в суде</span>
              </div>
              <Button className="w-full mt-6 h-12 text-base bg-primary hover:bg-primary-600 text-white">
                Выбрать тариф
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-2xl relative bg-white scale-105 z-10">
            <div className="absolute -top-5 left-0 right-0 flex justify-center">
              <Badge className="bg-primary text-base py-1 px-4 font-medium">Популярный</Badge>
            </div>
            <CardHeader className="text-center bg-gradient-to-br from-primary-50 to-primary-100 pb-8">
              <CardTitle className="text-2xl font-bold">Комфорт</CardTitle>
              <CardDescription className="text-base">Максимальный сервис</CardDescription>
              <div className="text-4xl font-bold text-primary mt-6">65 000 ₽</div>
            </CardHeader>
            <CardContent className="space-y-6 pt-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-base">Все из тарифа "Стандарт"</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-base">Персональный менеджер</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-base">Срочная подача документов</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-base">Поддержка 24/7</span>
              </div>
              <Button className="w-full mt-6 bg-primary hover:bg-primary-600 h-12 text-base">Выбрать тариф</Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl overflow-hidden">
            <CardHeader className="text-center bg-gradient-to-br from-gray-50 to-gray-100 pb-8">
              <CardTitle className="text-2xl font-bold">Для пенсионеров</CardTitle>
              <CardDescription className="text-base">Специальные условия</CardDescription>
              <div className="text-4xl font-bold text-primary mt-6">25 000 ₽</div>
            </CardHeader>
            <CardContent className="space-y-6 pt-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-base">Консультация юриста</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-base">Подготовка документов</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-base">Подача заявления в суд</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-base">Рассрочка до 12 месяцев</span>
              </div>
              <Button className="w-full mt-6 h-12 text-base bg-primary hover:bg-primary-600 text-white">
                Выбрать тариф
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
