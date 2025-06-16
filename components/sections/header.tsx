"use client";
import { Button } from "@/components/ui/button";
import { Scale, Phone } from "lucide-react";
import { ConsultationModal } from "@/components/ui/consultation-modal";
import { useConsultationModal } from "@/hooks/use-consultation-modal";

export function Header() {
  const { isOpen, openModal, closeModal } = useConsultationModal();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Scale className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-gray-900">
              Свобода от долгов
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("stages")}
              className="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
            >
              Этапы работы
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
            >
              Вопросы
            </button>
            <button
              onClick={() => scrollToSection("reviews")}
              className="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
            >
              Отзывы
            </button>
            <button
              onClick={() => scrollToSection("tariffs")}
              className="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
            >
              Тарифы
            </button>
          </nav>
          <div className="flex items-center space-x-6">
            {/* <div className="hidden md:flex items-center space-x-2">
              <Phone className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">+7 (800) 123-45-67</span>
            </div> */}
            <Button
              onClick={openModal}
              className="bg-primary hover:bg-primary-600"
            >
              Консультация
            </Button>
          </div>
        </div>
      </header>

      <ConsultationModal isOpen={isOpen} onClose={closeModal} />
    </>
  );
}
