"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { VerificationModal } from "@/components/ui/verification-modal";
import { MessageCircle, Phone, Mail } from "lucide-react";

interface FormData {
  firstName: string;
  lastName: string;
  middleName: string;
  phone: string;
  email: string;
  birthYear: string;
  passport: string;
  address: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  middleName?: string;
  phone?: string;
  email?: string;
  birthYear?: string;
}

export function ConsultationForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    middleName: "",
    phone: "",
    email: "",
    birthYear: "",
    passport: "",
    address: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVerificationModalOpen, setIsVerificationModalOpen] = useState(false);

  // Маска для телефона
  const formatPhoneNumber = (value: string) => {
    // Удаляем все нецифровые символы
    const phoneNumber = value.replace(/\D/g, "");

    // Если номер начинается с 8, заменяем на 7
    const normalizedNumber = phoneNumber.startsWith("8")
      ? "7" + phoneNumber.slice(1)
      : phoneNumber;

    // Применяем маску +7 (999) 999-999-99
    if (normalizedNumber.length === 0) return "";
    if (normalizedNumber.length <= 1) return `+7`;
    if (normalizedNumber.length <= 4) return `+7 (${normalizedNumber.slice(1)}`;
    if (normalizedNumber.length <= 7)
      return `+7 (${normalizedNumber.slice(1, 4)}) ${normalizedNumber.slice(
        4
      )}`;
    if (normalizedNumber.length <= 9)
      return `+7 (${normalizedNumber.slice(1, 4)}) ${normalizedNumber.slice(
        4,
        7
      )}-${normalizedNumber.slice(7)}`;
    return `+7 (${normalizedNumber.slice(1, 4)}) ${normalizedNumber.slice(
      4,
      7
    )}-${normalizedNumber.slice(7, 9)}-${normalizedNumber.slice(9, 11)}`;
  };

  // Маска для паспортных данных
  const formatPassportNumber = (value: string) => {
    // Удаляем все нецифровые символы
    const passportNumber = value.replace(/\D/g, "");

    // Применяем маску XXXX XXXXXX
    if (passportNumber.length === 0) return "";
    if (passportNumber.length <= 4) return passportNumber;
    return `${passportNumber.slice(0, 4)} ${passportNumber.slice(4, 10)}`;
  };

  // Валидация полей
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Валидация имени
    if (!formData.firstName.trim()) {
      newErrors.firstName = "Имя обязательно для заполнения";
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = "Имя должно содержать минимум 2 символа";
    } else if (!/^[а-яёА-ЯЁ\s-]+$/.test(formData.firstName.trim())) {
      newErrors.firstName = "Имя должно содержать только русские буквы";
    }

    // Валидация фамилии
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Фамилия обязательна для заполнения";
    } else if (formData.lastName.trim().length < 2) {
      newErrors.lastName = "Фамилия должна содержать минимум 2 символа";
    } else if (!/^[а-яёА-ЯЁ\s-]+$/.test(formData.lastName.trim())) {
      newErrors.lastName = "Фамилия должна содержать только русские буквы";
    }

    // Валидация отчества
    if (!formData.middleName.trim()) {
      newErrors.middleName = "Отчество обязательно для заполнения";
    } else if (formData.middleName.trim().length < 2) {
      newErrors.middleName = "Отчество должно содержать минимум 2 символа";
    } else if (!/^[а-яёА-ЯЁ\s-]+$/.test(formData.middleName.trim())) {
      newErrors.middleName = "Отчество должно содержать только русские буквы";
    }

    // Валидация телефона
    const phoneDigits = formData.phone.replace(/\D/g, "");
    if (!formData.phone.trim()) {
      newErrors.phone = "Номер телефона обязателен для заполнения";
    } else if (phoneDigits.length !== 11) {
      newErrors.phone = "Номер телефона должен содержать 11 цифр";
    }

    // Валидация email (только если заполнен)
    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = "Введите корректный email адрес";
      }
    }

    // Валидация года рождения (только если заполнен)
    if (formData.birthYear.trim()) {
      const currentYear = new Date().getFullYear();
      const birthYear = Number.parseInt(formData.birthYear);
      if (
        isNaN(birthYear) ||
        birthYear < 1940 ||
        birthYear > currentYear - 18
      ) {
        newErrors.birthYear =
          "Введите корректный год рождения (возраст от 18 лет)";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    if (field === "phone") {
      value = formatPhoneNumber(value);
    } else if (field === "passport") {
      value = formatPassportNumber(value);
    }

    setFormData((prev) => ({ ...prev, [field]: value }));

    // Очищаем ошибку для поля при изменении
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Имитация отправки кода на телефон
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Открываем модальное окно для подтверждения
      setIsVerificationModalOpen(true);
    } catch (error) {
      alert("Произошла ошибка при отправке заявки. Попробуйте еще раз.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleVerifyCode = async (code: string) => {
    // Имитация проверки кода
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        // Для демонстрации принимаем любой код
        if (code === "0000") {
          reject(new Error("Неверный код"));
        } else {
          resolve(true);
        }
      }, 1500);
    });

    // Если код верный, завершаем процесс
    finishSubmission();
  };

  const handleResendCode = async () => {
    // Имитация повторной отправки кода
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return true;
  };

  const finishSubmission = () => {
    // Сброс формы после успешной отправки
    setFormData({
      firstName: "",
      lastName: "",
      middleName: "",
      phone: "",
      email: "",
      birthYear: "",
      passport: "",
      address: "",
    });

    alert("Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.");
  };

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
                    ⭐ Более 2000 успешно решенных дел
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

                      <Button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary-600 text-white h-12 text-base font-medium rounded-xl mt-6"
                        disabled={isSubmitting}
                      >
                        {isSubmitting
                          ? "Отправляем..."
                          : "Получить консультацию"}
                      </Button>

                      <p className="text-xs text-gray-500 text-center leading-relaxed">
                        Нажимая кнопку, вы соглашаетесь с{" "}
                        <span className="text-primary hover:text-primary-600 cursor-pointer">
                          политикой конфиденциальности
                        </span>
                      </p>
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
        onClose={() => setIsVerificationModalOpen(false)}
        onVerify={handleVerifyCode}
        phone={formData.phone}
        onResendCode={handleResendCode}
      />
    </>
  );
}
