import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CallToAction() {
  return (
    <section className="py-24 bg-gradient-to-r from-primary to-primary-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 max-w-4xl mx-auto leading-tight">
          Банкротство физических лиц - ваш законный метод освобождения из долговой ямы
        </h2>
        <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto">
          Не ждите, пока долги станут неподъемными. Начните процедуру банкротства уже сегодня
        </p>
        <Button
          size="lg"
          variant="secondary"
          className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6 h-auto"
        >
          Начать <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  )
}
