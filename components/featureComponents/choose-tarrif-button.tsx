"use client";

import { useConsultationModal } from "@/hooks/use-consultation-modal";
import { Button } from "../ui/button";
import { ConsultationModal } from "../ui/consultation-modal";

export const ChooseTariffButton = () => {
  const { isOpen, openModal, closeModal } = useConsultationModal();

  return (
    <>
      <Button
        onClick={openModal}
        className="w-full h-12 text-base bg-primary hover:bg-primary-600 text-white"
      >
        Выбрать тариф
      </Button>

      <ConsultationModal isOpen={isOpen} onClose={closeModal} />
    </>
  );
};
