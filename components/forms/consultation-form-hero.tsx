"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { VerificationModal } from "@/components/ui/verification-modal"

interface FormData {
  firstName: string
  lastName: string
  middleName: string
  phone: string
  email: string
  birthYear: string
  passport: string
  address: string
}

interface FormErrors {
  firstName?: string
  lastName?: string
  middleName?: string
  phone?: string
  email?: string
  birthYear?: string
}

export function ConsultationFormHero() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    middleName: "",
    phone: "",
    email: "",
    birthYear: "",
    passport: "",
    address: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isVerificationModalOpen, setIsVerificationModalOpen] = useState(false)

  // Маска для телефона
  const formatPhoneNumber = (value: string) => {
    // Удаляем все нецифровые символы
    const phoneNumber = value.replace(/\D/g, "")

    // Если номер начинается с 8, заменяем на 7
    const normalizedNumber = phoneNumber.startsWith("8") ? "7" + phoneNumber.slice(1) : phoneNumber

    // Применяем маску +7 (999) 999-99-99
    if (normalizedNumber.length === 0) return ""
    if (normalizedNumber.length <= 1) return `+7`
    if (normalizedNumber.length <= 4) return `+7 (${normalizedNumber.slice(1)}`
    if (normalizedNumber.length <= 7) return `+7 (${normalizedNumber.slice(1, 4)}) ${normalizedNumber.slice(4)}`
    if (normalizedNumber.length <= 9)
      return `+7 (${normalizedNumber.slice(1, 4)}) ${normalizedNumber.slice(4, 7)}-${normalizedNumber.slice(7)}`
    return `+7 (${normalizedNumber.slice(1, 4)}) ${normalizedNumber.slice(4, 7)}-${normalizedNumber.slice(7, 9)}-${normalizedNumber.slice(9, 11)}`
  }

  // Валидация полей
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Валидация имени
    if (!formData.firstName.trim()) {
      newErrors.firstName = "Имя обязательно для заполнения"
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = "Имя должно содержать минимум 2 символа"
    } else if (!/^[а-яёА-ЯЁ\s-]+$/.test(formData.firstName.trim())) {
      newErrors.firstName = "Имя должно содержать только русские буквы"
    }

    // Валидация фамилии
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Фамилия обязательна для заполнения"
    } else if (formData.lastName.trim().length < 2) {
      newErrors.lastName = "Фамилия должна содержать минимум 2 символа"
    } else if (!/^[а-яёА-ЯЁ\s-]+$/.test(formData.lastName.trim())) {
      newErrors.lastName = "Фамилия должна содержать только русские буквы"
    }

    // Валидация отчества
    if (!formData.middleName.trim()) {
      newErrors.middleName = "Отчество обязательно для заполнения"
    } else if (formData.middleName.trim().length < 2) {
      newErrors.middleName = "Отчество должно содержать минимум 2 символа"
    } else if (!/^[а-яёА-ЯЁ\s-]+$/.test(formData.middleName.trim())) {
      newErrors.middleName = "Отчество должно содержать только русские буквы"
    }

    // Валидация телефона
    const phoneDigits = formData.phone.replace(/\D/g, "")
    if (!formData.phone.trim()) {
      newErrors.phone = "Номер телефона обязателен для заполнения"
    } else if (phoneDigits.length !== 11) {
      newErrors.phone = "Номер телефона должен содержать 11 цифр"
    }

    // Валидация email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = "Email обязателен для заполнения"
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Введите корректный email адрес"
    }

    // Валидация года рождения
    const currentYear = new Date().getFullYear()
    const birthYear = Number.parseInt(formData.birthYear)
    if (!formData.birthYear.trim()) {
      newErrors.birthYear = "Год рождения обязателен для заполнения"
    } else if (isNaN(birthYear) || birthYear < 1940 || birthYear > currentYear - 18) {
      newErrors.birthYear = "Введите корректный год рождения (возраст от 18 лет)"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    if (field === "phone") {
      value = formatPhoneNumber(value)
    }

    setFormData((prev) => ({ ...prev, [field]: value }))

    // Очищаем ошибку для поля при изменении
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Имитация отправки кода на телефон
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Открываем модальное окно для подтверждения
      setIsVerificationModalOpen(true)
    } catch (error) {
      alert("Произошла ошибка при отправке заявки. Попробуйте еще раз.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleVerifyCode = async (code: string) => {
    // Имитация проверки кода
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        // Для демонстрации принимаем любой код
        if (code === "0000") {
          reject(new Error("Неверный код"))
        } else {
          resolve(true)
        }
      }, 1500)
    })

    // Если код верный, завершаем процесс
    finishSubmission()
  }

  const handleResendCode = async () => {
    // Имитация повторной отправки кода
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return true
  }

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
    })

    alert("Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.")
  }

  return (
    <>
      <Card className="w-full max-w-3xl mx-auto bg-white/80 backdrop-blur-sm shadow-xl border-0 mt-12">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Получить консультацию</CardTitle>
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
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  className={`h-12 focus:ring-primary ${errors.firstName ? "border-red-500" : ""}`}
                />
                {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Фамилия *</Label>
                <Input
                  id="lastName"
                  placeholder="Иванов"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  className={`h-12 focus:ring-primary ${errors.lastName ? "border-red-500" : ""}`}
                />
                {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="middleName">Отчество *</Label>
                <Input
                  id="middleName"
                  placeholder="Иванович"
                  value={formData.middleName}
                  onChange={(e) => handleInputChange("middleName", e.target.value)}
                  className={`h-12 focus:ring-primary ${errors.middleName ? "border-red-500" : ""}`}
                />
                {errors.middleName && <p className="text-red-500 text-sm">{errors.middleName}</p>}
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
                  className={`h-12 focus:ring-primary ${errors.phone ? "border-red-500" : ""}`}
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="ivan@example.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className={`h-12 focus:ring-primary ${errors.email ? "border-red-500" : ""}`}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="birthYear">Год рождения *</Label>
                <Input
                  id="birthYear"
                  type="number"
                  placeholder="1985"
                  min="1940"
                  max="2005"
                  value={formData.birthYear}
                  onChange={(e) => handleInputChange("birthYear", e.target.value)}
                  className={`h-12 focus:ring-primary ${errors.birthYear ? "border-red-500" : ""}`}
                />
                {errors.birthYear && <p className="text-red-500 text-sm">{errors.birthYear}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="passport">Паспортные данные</Label>
                <Input
                  id="passport"
                  placeholder="1234 567890 (необязательно)"
                  value={formData.passport}
                  onChange={(e) => handleInputChange("passport", e.target.value)}
                  className="h-12 focus:ring-primary"
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

            <Button type="submit" className="w-full bg-primary hover:bg-primary-600" size="lg" disabled={isSubmitting}>
              {isSubmitting ? "Отправляем..." : "Получить консультацию"}
            </Button>
            <p className="text-xs text-gray-500 text-center">
              Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
            </p>
          </form>
        </CardContent>
      </Card>

      <VerificationModal
        isOpen={isVerificationModalOpen}
        onClose={() => setIsVerificationModalOpen(false)}
        onVerify={handleVerifyCode}
        phone={formData.phone}
        onResendCode={handleResendCode}
      />
    </>
  )
}
