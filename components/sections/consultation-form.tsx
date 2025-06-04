"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { VerificationModal } from "@/components/ui/verification-modal"

export function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  })
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

  const handleInputChange = (field: string, value: string) => {
    if (field === "phone") {
      value = formatPhoneNumber(value)
    }
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Простая валидация
    if (!formData.name || !formData.phone || !formData.email) {
      alert("Пожалуйста, заполните все поля")
      return
    }

    // Проверка формата телефона
    const phoneDigits = formData.phone.replace(/\D/g, "")
    if (phoneDigits.length !== 11) {
      alert("Введите корректный номер телефона")
      return
    }

    // Проверка формата email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      alert("Введите корректный email адрес")
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
      name: "",
      phone: "",
      email: "",
    })

    alert("Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.")
  }

  return (
    <>
      <section className="py-24 bg-gradient-to-r from-primary to-primary-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8">Бесплатная консультация</h2>
            <p className="text-xl mb-10 opacity-90">Получите профессиональную консультацию по вашей ситуации</p>
            <Card className="bg-white/10 backdrop-blur-md border-0 shadow-2xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <Input
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="bg-white/20 border-0 h-14 text-white placeholder:text-white/70 focus:ring-primary-400"
                    />
                    <Input
                      placeholder="Номер телефона"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="bg-white/20 border-0 h-14 text-white placeholder:text-white/70 focus:ring-primary-400"
                    />
                  </div>
                  <Input
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="mb-6 bg-white/20 border-0 h-14 text-white placeholder:text-white/70 focus:ring-primary-400"
                  />
                  <Button
                    type="submit"
                    className="w-full bg-white text-primary hover:bg-white/90 h-14 text-lg font-medium"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Отправляем..." : "Получить консультацию"}
                  </Button>
                </form>
              </CardContent>
            </Card>
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
  )
}
