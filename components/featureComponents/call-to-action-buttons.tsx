"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ConsultationModal } from "../ui/consultation-modal";
import { useConsultationModal } from "@/hooks/use-consultation-modal";

export const CallToActionButtons = () => {
  const { isOpen, openModal, closeModal } = useConsultationModal();

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-4">
        <Button
          size="lg"
          onClick={openModal}
          className="bg-primary hover:bg-primary-600 text-white px-6 py-5 h-auto text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
        >
          Начать процедуру
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>

        <Button
          size="lg"
          variant="outline"
          onClick={openModal}
          className="border-2 border-primary text-primary hover:bg-primary-50 px-6 py-5 h-auto text-base font-semibold rounded-xl backdrop-blur-sm bg-white/50"
        >
          Консультация
        </Button>
      </div>

      <ConsultationModal isOpen={isOpen} onClose={closeModal} />
    </>
  );
};
