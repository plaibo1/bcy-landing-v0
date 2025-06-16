"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { VerificationModal } from "@/components/ui/verification-modal";
import { MessageCircle, Phone, Mail } from "lucide-react";
import { useConsultationForm } from "@/hooks/use-consultation-form";
import { PrivacyText } from "../ui/privacy-text";

export function ConsultationForm() {
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
      <section
        id="consultation"
        className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Левая часть - информация */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                    Получите бесплатную консультацию
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Наши эксперты проанализируют вашу ситуацию и предложат
                    оптимальное решение для списания долгов
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-100 p-3 rounded-xl">
                      <MessageCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">
                        Персональный подход
                      </h3>
                      <p className="text-gray-600">
                        Каждый случай уникален. Мы изучим именно вашу ситуацию и
                        найдем лучший способ решения проблемы
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-100 p-3 rounded-xl">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">
                        Быстрый ответ
                      </h3>
                      <p className="text-gray-600">
                        Свяжемся с вами в течение 15 минут после подачи заявки в
                        рабочее время
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-100 p-3 rounded-xl">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">
                        Конфиденциальность
                      </h3>
                      <p className="text-gray-600">
                        Ваши данные защищены. Консультация проводится с
                        соблюдением полной конфиденциальности
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-primary-50 p-6 rounded-2xl border border-primary-100">
                  <p className="text-primary-800 font-medium text-center">
                    ⭐ Более 1000 успешно решенных дел
                  </p>
                </div>
              </div>

              {/* Правая часть - форма */}
              <div>
                <Card className="bg-white shadow-2xl border-0 overflow-hidden">
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Заполните форму
                      </h3>
                      <p className="text-gray-600 text-sm">
                        И получите консультацию в течение 15 минут
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* ФИО в одну строку */}
                      <div className="grid grid-cols-3 gap-3">
                        <div className="space-y-1">
                          <Label
                            htmlFor="consultation-firstName"
                            className="text-xs font-medium text-gray-700"
                          >
                            Имя *
                          </Label>
                          <Input
                            id="consultation-firstName"
                            placeholder="Иван"
                            value={formData.firstName}
                            onChange={(e) =>
                              handleInputChange("firstName", e.target.value)
                            }
                            className={`h-10 text-sm focus:ring-primary focus:border-primary ${
                              errors.firstName
                                ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                                : ""
                            }`}
                          />
                          {errors.firstName && (
                            <p className="text-red-500 text-xs">
                              {errors.firstName}
                            </p>
                          )}
                        </div>

                        <div className="space-y-1">
                          <Label
                            htmlFor="consultation-lastName"
                            className="text-xs font-medium text-gray-700"
                          >
                            Фамилия *
                          </Label>
                          <Input
                            id="consultation-lastName"
                            placeholder="Иванов"
                            value={formData.lastName}
                            onChange={(e) =>
                              handleInputChange("lastName", e.target.value)
                            }
                            className={`h-10 text-sm focus:ring-primary focus:border-primary ${
                              errors.lastName
                                ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                                : ""
                            }`}
                          />
                          {errors.lastName && (
                            <p className="text-red-500 text-xs">
                              {errors.lastName}
                            </p>
                          )}
                        </div>

                        <div className="space-y-1">
                          <Label
                            htmlFor="consultation-middleName"
                            className="text-xs font-medium text-gray-700"
                          >
                            Отчество *
                          </Label>
                          <Input
                            id="consultation-middleName"
                            placeholder="Иванович"
                            value={formData.middleName}
                            onChange={(e) =>
                              handleInputChange("middleName", e.target.value)
                            }
                            className={`h-10 text-sm focus:ring-primary focus:border-primary ${
                              errors.middleName
                                ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                                : ""
                            }`}
                          />
                          {errors.middleName && (
                            <p className="text-red-500 text-xs">
                              {errors.middleName}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Контактные данные */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="space-y-1">
                          <Label
                            htmlFor="consultation-phone"
                            className="text-xs font-medium text-gray-700"
                          >
                            Телефон *
                          </Label>
                          <Input
                            id="consultation-phone"
                            type="tel"
                            placeholder="+7 (999) 999-99-99"
                            value={formData.phone}
                            onChange={(e) =>
                              handleInputChange("phone", e.target.value)
                            }
                            className={`h-10 text-sm focus:ring-primary focus:border-primary ${
                              errors.phone
                                ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                                : ""
                            }`}
                          />
                          {errors.phone && (
                            <p className="text-red-500 text-xs">
                              {errors.phone}
                            </p>
                          )}
                        </div>

                        <div className="space-y-1">
                          <Label
                            htmlFor="consultation-email"
                            className="text-xs font-medium text-gray-700"
                          >
                            Email
                          </Label>
                          <Input
                            id="consultation-email"
                            type="email"
                            placeholder="ivan@example.com"
                            value={formData.email}
                            onChange={(e) =>
                              handleInputChange("email", e.target.value)
                            }
                            className={`h-10 text-sm focus:ring-primary focus:border-primary ${
                              errors.email
                                ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                                : ""
                            }`}
                          />
                          {errors.email && (
                            <p className="text-red-500 text-xs">
                              {errors.email}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Дополнительные данные */}
                      <div className="grid grid-cols-3 gap-3">
                        <div className="space-y-1">
                          <Label
                            htmlFor="consultation-birthYear"
                            className="text-xs font-medium text-gray-700"
                          >
                            Год рождения
                          </Label>
                          <Input
                            id="consultation-birthYear"
                            type="number"
                            placeholder="1985"
                            min="1940"
                            max="2005"
                            value={formData.birthYear}
                            onChange={(e) =>
                              handleInputChange("birthYear", e.target.value)
                            }
                            className={`h-10 text-sm focus:ring-primary focus:border-primary ${
                              errors.birthYear
                                ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                                : ""
                            }`}
                          />
                          {errors.birthYear && (
                            <p className="text-red-500 text-xs">
                              {errors.birthYear}
                            </p>
                          )}
                        </div>

                        <div className="space-y-1">
                          <Label
                            htmlFor="consultation-passport"
                            className="text-xs font-medium text-gray-700"
                          >
                            Паспорт
                          </Label>
                          <Input
                            id="consultation-passport"
                            placeholder="1234 567890"
                            value={formData.passport}
                            onChange={(e) =>
                              handleInputChange("passport", e.target.value)
                            }
                            className="h-10 text-sm focus:ring-primary focus:border-primary"
                            maxLength={11}
                          />
                        </div>

                        <div className="space-y-1">
                          <Label
                            htmlFor="consultation-address"
                            className="text-xs font-medium text-gray-700"
                          >
                            Адрес
                          </Label>
                          <Input
                            id="consultation-address"
                            placeholder="г. Москва"
                            value={formData.address}
                            onChange={(e) =>
                              handleInputChange("address", e.target.value)
                            }
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
                        {isSubmitting
                          ? "Отправляем..."
                          : "Получить консультацию"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

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
