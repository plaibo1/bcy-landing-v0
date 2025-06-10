// Типы для API
export interface LeadData {
  firstName: string
  lastName: string
  middleName: string
  phone: string
  email?: string
  birthYear?: string
  passport?: string
  address?: string
}

export interface ApiResponse<T = any> {
  success: boolean
  message?: string
  error?: string
  code?: string
  data?: T
}

export interface LeadResponse {
  id: string
  status: string
  createdAt: string
  estimatedCallTime: string
}

export interface VerificationResponse {
  phone: string
  expiresIn: number
  canResendAfter: number
}

// API клиент для отправки заявки
export async function submitLead(data: LeadData): Promise<ApiResponse<LeadResponse>> {
  try {
    const response = await fetch("/api/external-lead", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    const result = await response.json()

    if (!response.ok) {
      throw new Error(result.error || "Ошибка при отправке заявки")
    }

    return result
  } catch (error) {
    console.error("Ошибка при отправке заявки:", error)
    throw error
  }
}

// API клиент для отправки кода верификации
export async function sendVerificationCode(phone: string): Promise<ApiResponse<VerificationResponse>> {
  try {
    const response = await fetch("/api/verification-phone", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phone,
        action: "send",
      }),
    })

    const result = await response.json()

    if (!response.ok) {
      throw new Error(result.error || "Ошибка при отправке кода")
    }

    return result
  } catch (error) {
    console.error("Ошибка при отправке кода:", error)
    throw error
  }
}

// API клиент для проверки кода верификации
export async function verifyPhoneCode(phone: string, code: string): Promise<ApiResponse> {
  try {
    const response = await fetch("/api/verification-phone", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phone,
        code,
        action: "verify",
      }),
    })

    const result = await response.json()

    if (!response.ok) {
      throw new Error(result.error || "Ошибка при проверке кода")
    }

    return result
  } catch (error) {
    console.error("Ошибка при проверке кода:", error)
    throw error
  }
}
