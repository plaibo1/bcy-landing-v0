import Link from "next/link";
import { Gavel, Phone } from "lucide-react";
import { HeaderButton } from "../featureComponents/header-button";

export function Header() {
  return (
    <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Gavel className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-gray-900">ЮрПомощь</span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="#services"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Услуги
          </Link>
          <Link
            href="#stages"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Этапы
          </Link>
          <Link
            href="#tariffs"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Тарифы
          </Link>
          <Link
            href="#reviews"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Отзывы
          </Link>
        </nav>
        <div className="flex items-center space-x-6">
          <div className="hidden md:flex items-center space-x-2">
            <Phone className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">+7 (800) 123-45-67</span>
          </div>

          <HeaderButton />
        </div>
      </div>
    </header>
  );
}
