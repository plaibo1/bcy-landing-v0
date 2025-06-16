"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { VerificationModal } from "@/components/ui/verification-modal";
import { useConsultationForm } from "@/hooks/use-consultation-form";
import { PrivacyText } from "../ui/privacy-text";

export function ConsultationFormHero() {
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
      alert("Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.");
    },
    onError: (error) => {
      alert(`Ошибка: ${error}`);
    },
  });

  return (
    <>
      <Card className="w-full max-w-3xl mx-auto bg-white/80 backdrop-blur-sm shadow-xl border-0 mt-12">
        <CardHeader>
          <CardTitle className="text-center text-2xl">
            Получить консультацию
          </CardTitle>
          <CardDescription className="text-center text-base">
            Заполните форму и мы свяжемся с вами в течение 15 минут
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">Имя *</Label>
                <Input
                  id="firstName"
                  placeholder="Иван"
                  value={formData.firstName}
                  onChange={(e) =>
                    handleInputChange("firstName", e.target.value)
                  }
                  className={`h-12 focus:ring-primary ${
                    errors.firstName ? "border-red-500" : ""
                  }`}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm">{errors.firstName}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Фамилия *</Label>
                <Input
                  id="lastName"
                  placeholder="Иванов"
                  value={formData.lastName}
                  onChange={(e) =>
                    handleInputChange("lastName", e.target.value)
                  }
                  className={`h-12 focus:ring-primary ${
                    errors.lastName ? "border-red-500" : ""
                  }`}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm">{errors.lastName}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="middleName">Отчество *</Label>
                <Input
                  id="middleName"
                  placeholder="Иванович"
                  value={formData.middleName}
                  onChange={(e) =>
                    handleInputChange("middleName", e.target.value)
                  }
                  className={`h-12 focus:ring-primary ${
                    errors.middleName ? "border-red-500" : ""
                  }`}
                />
                {errors.middleName && (
                  <p className="text-red-500 text-sm">{errors.middleName}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="phone">Номер телефона *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+7 (999) 999-99-99"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className={`h-12 focus:ring-primary ${
                    errors.phone ? "border-red-500" : ""
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="ivan@example.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className={`h-12 focus:ring-primary ${
                    errors.email ? "border-red-500" : ""
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="birthYear">Год рождения</Label>
                <Input
                  id="birthYear"
                  type="number"
                  placeholder="1985"
                  min="1940"
                  max="2005"
                  value={formData.birthYear}
                  onChange={(e) =>
                    handleInputChange("birthYear", e.target.value)
                  }
                  className={`h-12 focus:ring-primary ${
                    errors.birthYear ? "border-red-500" : ""
                  }`}
                />
                {errors.birthYear && (
                  <p className="text-red-500 text-sm">{errors.birthYear}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="passport">Паспортные данные</Label>
                <Input
                  id="passport"
                  placeholder="1234 567890"
                  value={formData.passport}
                  onChange={(e) =>
                    handleInputChange("passport", e.target.value)
                  }
                  className="h-12 focus:ring-primary"
                  maxLength={11}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Адрес регистрации</Label>
                <Input
                  id="address"
                  placeholder="г. Москва, ул. Примерная, д. 1"
                  value={formData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  className="h-12 focus:ring-primary"
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
              className="w-full bg-primary hover:bg-primary-600"
              size="lg"
              disabled={isSubmitting || !formData.privacyConsent}
            >
              {isSubmitting ? "Отправляем..." : "Получить консультацию"}
            </Button>
          </form>
        </CardContent>
      </Card>

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
