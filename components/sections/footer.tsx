import { Scale } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Левая часть */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Scale className="h-8 w-8 text-primary-400" />
              <span className="text-2xl font-bold">Свобода от долгов</span>
            </div>
            <div className="text-gray-400 space-y-1">
              <div>09:00 - 18:00 пн-пт</div>
              <div>сб, вс - по предварительной записи</div>
            </div>
          </div>

          {/* Правая часть */}
          <div className="text-gray-400 text-sm md:text-right">
            <div>ИП "Стародубцев Денис Дмитриевич"</div>
            <div>ИНН 616803105903</div>
            <div>ОГРН 324619600189831</div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Свобода от долгов. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
