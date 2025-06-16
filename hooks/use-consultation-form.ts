"use client";

import type React from "react";

import { useState } from "react";
import type { FormData, FormErrors } from "@/lib/form-validation";
import {
  validateForm,
  hasValidationErrors,
  clearFieldError,
  applyFieldMask,
} from "@/lib/form-validation";
import { submitLead, sendVerificationCode, verifyPhoneCode } from "@/lib/api";

interface UseConsultationFormOptions {
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

export function useConsultationForm(options: UseConsultationFormOptions = {}) {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    middleName: "",
    phone: "",
    email: "",
    birthYear: "",
    passport: "",
    address: "",
    privacyConsent: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVerificationModalOpen, setIsVerificationModalOpen] = useState(false);

  // Обработка изменения поля
  const handleInputChange = (
    field: keyof FormData,
    value: string | boolean
  ) => {
    if (field === "privacyConsent") {
      setFormData((prev) => ({ ...prev, [field]: value as boolean }));
    } else {
      // Применяем маску к значению
      const maskedValue = applyFieldMask(field, value as string);
      setFormData((prev) => ({ ...prev, [field]: maskedValue }));
    }

    // Очищаем ошибку для поля при изменении
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => clearFieldError(prev, field as keyof FormErrors));
    }
  };
  // Валидация формы
  const validateFormData = (): boolean => {
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);
    return !hasValidationErrors(validationErrors);
  };

  // Отправка формы
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateFormData()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Отправляем заявку
      // await submitLead(formData);

      // Отправляем код верификации
      await sendVerificationCode(formData.phone);

      // Открываем модальное окно для подтверждения
      setIsVerificationModalOpen(true);
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Произошла ошибка при отправке заявки";
      options.onError?.(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Верификация кода
  const handleVerifyCode = async (code: string) => {
    try {
      // await verifyPhoneCode(formData.phone, code);

      await submitLead(formData);

      // Закрываем модальное окно
      setIsVerificationModalOpen(false);

      // Сбрасываем форму
      resetForm();

      // Вызываем колбэк успеха
      options.onSuccess?.();
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Неверный код. Попробуйте еще раз.";
      throw new Error(errorMessage);
    }
  };

  // Повторная отправка кода
  const handleResendCode = async () => {
    try {
      await sendVerificationCode(formData.phone);
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Не удалось отправить код. Попробуйте позже.";
      throw new Error(errorMessage);
    }
  };

  // Сброс формы
  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      middleName: "",
      phone: "",
      email: "",
      birthYear: "",
      passport: "",
      address: "",
      privacyConsent: false,
    });
    setErrors({});
  };

  // Закрытие модального окна верификации
  const closeVerificationModal = () => {
    setIsVerificationModalOpen(false);
  };

  return {
    // Данные формы
    formData,
    errors,
    isSubmitting,
    isVerificationModalOpen,

    // Методы
    handleInputChange,
    handleSubmit,
    handleVerifyCode,
    handleResendCode,
    closeVerificationModal,
    resetForm,
  };
}
