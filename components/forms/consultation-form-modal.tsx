"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { VerificationModal } from "@/components/ui/verification-modal";
import { useConsultationForm } from "@/hooks/use-consultation-form";
import { PrivacyText } from "@/components/ui/privacy-text";

interface ConsultationFormModalProps {
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

export function ConsultationFormModal({
  onSuccess,
  onError,
}: ConsultationFormModalProps) {
  const {
    formData,
    errors,
    isSubmitting,
    isVerificationModalOpen,
    handleInputChange,
    handleSubmit,
    handleVerifyCode,
    handleResendCode,
    closeVerificationModal,
  } = useConsultationForm({
    onSuccess: () => {
      onSuccess?.();
    },
    onError: (error) => {
      onError?.(error);
    },
  });

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* ФИО в одну строку */}
        <div className="grid grid-cols-3 gap-3">
          <div className="space-y-1">
            <Label
              htmlFor="modal-firstName"
              className="text-xs font-medium text-gray-700"
            >
              Имя *
            </Label>
            <Input
              id="modal-firstName"
              placeholder="Иван"
              value={formData.firstName}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
              className={`h-10 text-sm focus:ring-primary focus:border-primary ${
                errors.firstName
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                  : ""
              }`}
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs">{errors.firstName}</p>
            )}
          </div>

          <div className="space-y-1">
            <Label
              htmlFor="modal-lastName"
              className="text-xs font-medium text-gray-700"
            >
              Фамилия *
            </Label>
            <Input
              id="modal-lastName"
              placeholder="Иванов"
              value={formData.lastName}
              onChange={(e) => handleInputChange("lastName", e.target.value)}
              className={`h-10 text-sm focus:ring-primary focus:border-primary ${
                errors.lastName
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                  : ""
              }`}
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs">{errors.lastName}</p>
            )}
          </div>

          <div className="space-y-1">
            <Label
              htmlFor="modal-middleName"
              className="text-xs font-medium text-gray-700"
            >
              Отчество *
            </Label>
            <Input
              id="modal-middleName"
              placeholder="Иванович"
              value={formData.middleName}
              onChange={(e) => handleInputChange("middleName", e.target.value)}
              className={`h-10 text-sm focus:ring-primary focus:border-primary ${
                errors.middleName
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                  : ""
              }`}
            />
            {errors.middleName && (
              <p className="text-red-500 text-xs">{errors.middleName}</p>
            )}
          </div>
        </div>

        {/* Контактные данные */}
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1">
            <Label
              htmlFor="modal-phone"
              className="text-xs font-medium text-gray-700"
            >
              Телефон *
            </Label>
            <Input
              id="modal-phone"
              type="tel"
              placeholder="+7 (999) 999-99-99"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              className={`h-10 text-sm focus:ring-primary focus:border-primary ${
                errors.phone
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                  : ""
              }`}
            />
            {errors.phone && (
              <p className="text-red-500 text-xs">{errors.phone}</p>
            )}
          </div>

          <div className="space-y-1">
            <Label
              htmlFor="modal-email"
              className="text-xs font-medium text-gray-700"
            >
              Email
            </Label>
            <Input
              id="modal-email"
              type="email"
              placeholder="ivan@example.com"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className={`h-10 text-sm focus:ring-primary focus:border-primary ${
                errors.email
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                  : ""
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email}</p>
            )}
          </div>
        </div>

        {/* Дополнительные данные */}
        <div className="grid grid-cols-3 gap-3">
          <div className="space-y-1">
            <Label
              htmlFor="modal-birthYear"
              className="text-xs font-medium text-gray-700"
            >
              Год рождения
            </Label>
            <Input
              id="modal-birthYear"
              type="number"
              placeholder="1985"
              min="1940"
              max="2005"
              value={formData.birthYear}
              onChange={(e) => handleInputChange("birthYear", e.target.value)}
              className={`h-10 text-sm focus:ring-primary focus:border-primary ${
                errors.birthYear
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                  : ""
              }`}
            />
            {errors.birthYear && (
              <p className="text-red-500 text-xs">{errors.birthYear}</p>
            )}
          </div>

          <div className="space-y-1">
            <Label
              htmlFor="modal-passport"
              className="text-xs font-medium text-gray-700"
            >
              Паспорт
            </Label>
            <Input
              id="modal-passport"
              placeholder="1234 567890"
              value={formData.passport}
              onChange={(e) => handleInputChange("passport", e.target.value)}
              className="h-10 text-sm focus:ring-primary focus:border-primary"
              maxLength={11}
            />
          </div>

          <div className="space-y-1">
            <Label
              htmlFor="modal-address"
              className="text-xs font-medium text-gray-700"
            >
              Адрес
            </Label>
            <Input
              id="modal-address"
              placeholder="г. Москва"
              value={formData.address}
              onChange={(e) => handleInputChange("address", e.target.value)}
              className="h-10 text-sm focus:ring-primary focus:border-primary"
            />
          </div>
        </div>

        <PrivacyText
          checked={formData.privacyConsent}
          onCheckedChange={(checked) =>
            handleInputChange("privacyConsent", checked)
          }
          error={errors.privacyConsent}
          className="text-xs text-gray-500"
        />

        <Button
          type="submit"
          className="w-full bg-primary hover:bg-primary-600 text-white h-12 text-base font-medium rounded-xl mt-6"
          disabled={isSubmitting || !formData.privacyConsent}
        >
          {isSubmitting ? "Отправляем..." : "Получить консультацию"}
        </Button>
      </form>

      <VerificationModal
        isOpen={isVerificationModalOpen}
        onClose={closeVerificationModal}
        onVerify={handleVerifyCode}
        phone={formData.phone}
        onResendCode={handleResendCode}
      />
    </>
  );
}
