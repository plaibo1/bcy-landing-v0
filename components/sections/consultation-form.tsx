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
  name: string;
  phone: string;
  email: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
}

export function ConsultationForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
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

    // Применяем маску +7 (999) 999-99-99
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

  // Валидация полей
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Валидация имени
    if (!formData.name.trim()) {
      newErrors.name = "Имя обязательно для заполнения";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Имя должно содержать минимум 2 символа";
    }

    // Валидация телефона
    const phoneDigits = formData.phone.replace(/\D/g, "");
    if (!formData.phone.trim()) {
      newErrors.phone = "Номер телефона обязателен для заполнения";
    } else if (phoneDigits.length !== 11) {
      newErrors.phone = "Номер телефона должен содержать 11 цифр";
    }

    // Валидация email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email обязателен для заполнения";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Введите корректный email адрес";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    if (field === "phone") {
      value = formatPhoneNumber(value);
    }
    setFormData((prev) => ({ ...prev, [field]: value }));

    // Очищаем ошибку для поля при изменении
    if (errors[field]) {
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
      // Здесь можно добавить обработку ошибок
      console.error("Ошибка при отправке заявки:", error);
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
      name: "",
      phone: "",
      email: "",
    });

    alert("Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.");
  };

  return (
    <>
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
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
                  <CardContent className="p-8">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Заполните форму
                      </h3>
                      <p className="text-gray-600">
                        И получите консультацию в течение 15 минут
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label
                          htmlFor="consultation-name"
                          className="text-sm font-medium text-gray-700"
                        >
                          Ваше имя *
                        </Label>
                        <Input
                          id="consultation-name"
                          placeholder="Введите ваше имя"
                          value={formData.name}
                          onChange={(e) =>
                            handleInputChange("name", e.target.value)
                          }
                          className={`h-12 focus:ring-primary focus:border-primary ${
                            errors.name
                              ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                              : ""
                          }`}
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm">{errors.name}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="consultation-phone"
                          className="text-sm font-medium text-gray-700"
                        >
                          Номер телефона *
                        </Label>
                        <Input
                          id="consultation-phone"
                          type="tel"
                          placeholder="+7 (999) 999-99-99"
                          value={formData.phone}
                          onChange={(e) =>
                            handleInputChange("phone", e.target.value)
                          }
                          className={`h-12 focus:ring-primary focus:border-primary ${
                            errors.phone
                              ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                              : ""
                          }`}
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-sm">{errors.phone}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="consultation-email"
                          className="text-sm font-medium text-gray-700"
                        >
                          Email *
                        </Label>
                        <Input
                          id="consultation-email"
                          type="email"
                          placeholder="example@mail.ru"
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          className={`h-12 focus:ring-primary focus:border-primary ${
                            errors.email
                              ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                              : ""
                          }`}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm">{errors.email}</p>
                        )}
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary-600 text-white h-14 text-lg font-medium rounded-xl"
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
                        </span>{" "}
                        и{" "}
                        <span className="text-primary hover:text-primary-600 cursor-pointer">
                          пользовательским соглашением
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
