"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface VerificationModalProps {
  isOpen: boolean
  onClose: () => void
  onVerify: (code: string) => Promise<void>
  phone: string
  onResendCode?: () => Promise<void>
}

export function VerificationModal({ isOpen, onClose, onVerify, phone, onResendCode }: VerificationModalProps) {
  const [code, setCode] = useState<string[]>(["", "", "", ""])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [countdown, setCountdown] = useState(60)
  const [isResending, setIsResending] = useState(false)

  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ]

  // Запуск таймера обратного отсчета
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null

    if (isOpen && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1)
      }, 1000)
    }

    return () => {
      if (timer) clearInterval(timer)
    }
  }, [isOpen, countdown])

  // Автофокус на первом поле при открытии
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRefs[0].current?.focus()
      }, 100)
    }
  }, [isOpen])

  const handleInputChange = (index: number, value: string) => {
    // Разрешаем только цифры
    if (value && !/^\d+$/.test(value)) return

    // Обновляем значение в текущем поле
    const newCode = [...code]
    newCode[index] = value.slice(-1) // Берем только последнюю цифру
    setCode(newCode)

    // Если ввели цифру и есть следующее поле, переходим к нему
    if (value && index < 3) {
      inputRefs[index + 1].current?.focus()
    }

    // Сбрасываем ошибку при вводе
    if (error) setError(null)
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    // При нажатии Backspace, если поле пустое, переходим к предыдущему
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs[index - 1].current?.focus()
    }

    // При нажатии стрелки влево переходим к предыдущему полю
    if (e.key === "ArrowLeft" && index > 0) {
      inputRefs[index - 1].current?.focus()
    }

    // При нажатии стрелки вправо переходим к следующему полю
    if (e.key === "ArrowRight" && index < 3) {
      inputRefs[index + 1].current?.focus()
    }
  }

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 4)

    if (pastedData) {
      const newCode = [...code]
      for (let i = 0; i < pastedData.length; i++) {
        if (i < 4) {
          newCode[i] = pastedData[i]
        }
      }
      setCode(newCode)

      // Фокус на последнем заполненном поле или на следующем пустом
      const focusIndex = Math.min(pastedData.length, 3)
      inputRefs[focusIndex]?.current?.focus()
    }
  }

  const handleSubmit = async () => {
    const fullCode = code.join("")

    if (fullCode.length !== 4) {
      setError("Введите все 4 цифры кода")
      return
    }

    setIsSubmitting(true)
    setError(null)

    try {
      await onVerify(fullCode)
      // Если верификация прошла успешно, закрываем модальное окно
      onClose()
    } catch (err) {
      setError("Неверный код. Попробуйте еще раз.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleResendCode = async () => {
    if (countdown > 0) return

    setIsResending(true)
    try {
      if (onResendCode) {
        await onResendCode()
      }
      setCountdown(60) // Сбрасываем таймер
      setError(null)
    } catch (err) {
      setError("Не удалось отправить код. Попробуйте позже.")
    } finally {
      setIsResending(false)
    }
  }

  const formatPhone = (phone: string) => {
    return phone || "+7 (XXX) XXX-XX-XX"
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl">Подтверждение номера телефона</DialogTitle>
        </DialogHeader>

        <div className="py-6">
          <p className="text-center text-gray-600 mb-6">
            Мы отправили 4-значный код на номер <br />
            <span className="font-medium text-gray-900">{formatPhone(phone)}</span>
          </p>

          <div className="flex justify-center gap-2 mb-6">
            {code.map((digit, index) => (
              <Input
                key={index}
                ref={inputRefs[index]}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleInputChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={index === 0 ? handlePaste : undefined}
                className="w-12 h-12 text-center text-xl font-bold focus:ring-blue-500"
              />
            ))}
          </div>

          {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

          <div className="text-center text-sm text-gray-500 mb-6">
            {countdown > 0 ? (
              <p>Отправить код повторно через {countdown} сек.</p>
            ) : (
              <button
                onClick={handleResendCode}
                disabled={isResending}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                {isResending ? "Отправка..." : "Отправить код повторно"}
              </button>
            )}
          </div>
        </div>

        <DialogFooter className="flex-col sm:flex-row sm:justify-center gap-2">
          <Button type="button" variant="outline" onClick={onClose} className="w-full sm:w-auto">
            Отмена
          </Button>
          <Button
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting || code.some((digit) => !digit)}
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700"
          >
            {isSubmitting ? "Проверка..." : "Подтвердить"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
