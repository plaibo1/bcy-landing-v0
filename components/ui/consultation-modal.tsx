"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ConsultationFormModal } from "@/components/forms/consultation-form-modal";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const handleSuccess = () => {
    alert("Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.");
    onClose();
  };

  const handleError = (error: string) => {
    alert(`Ошибка: ${error}`);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-center text-xl">
            Получить бесплатную консультацию
          </DialogTitle>
        </DialogHeader>

        <div className="py-4">
          <p className="text-center text-gray-600 mb-6">
            Заполните форму и мы свяжемся с вами в течение 15 минут
          </p>

          <ConsultationFormModal
            onSuccess={handleSuccess}
            onError={handleError}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
