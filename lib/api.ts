import type { FormData } from "@/lib/form-validation";

// Типы для трансформированных данных API
export interface ApiFormData {
  firstName: string;
  middleName: string;
  lastName: string;
  phone: string;
  amountOwed: number;
  email?: string;
  passportSerial?: string;
  passportNumber?: string;
  address?: string;
}

/**
 * Нормализует номер телефона в формат +7XXXXXXXXXX
 */
function normalizePhoneNumber(phone: string): string {
  const digitsOnly = phone.replace(/[^\d+]/g, "");
  const numbersOnly = digitsOnly.replace(/\D/g, "");

  if (!numbersOnly) return "";

  const normalizedNumber = numbersOnly.startsWith("8")
    ? "7" + numbersOnly.slice(1)
    : numbersOnly;

  if (normalizedNumber.startsWith("7") && normalizedNumber.length === 11) {
    return "+" + normalizedNumber;
  }

  if (normalizedNumber.length === 10) {
    return "+7" + normalizedNumber;
  }

  if (normalizedNumber.startsWith("7") && normalizedNumber.length === 11) {
    return "+" + normalizedNumber;
  }

  return "+7" + normalizedNumber.slice(-10);
}

/**
 * Разделяет паспортные данные на серию и номер
 */
function parsePassportData(passport: string): {
  serial: string;
  number: string;
} {
  const digitsOnly = passport.replace(/\D/g, "");

  if (!digitsOnly) {
    return { serial: "", number: "" };
  }

  if (digitsOnly.length <= 4) {
    return { serial: digitsOnly, number: "" };
  }

  const serial = digitsOnly.slice(0, 4);
  const number = digitsOnly.slice(4);

  return { serial, number };
}

/**
 * Трансформирует данные формы в формат для API
 */
function transformFormDataForApi(formData: FormData): ApiFormData {
  const normalizedPhone = normalizePhoneNumber(formData.phone);
  const { serial: passportSerial, number: passportNumber } = parsePassportData(
    formData.passport
  );

  return {
    firstName: formData.firstName.trim(),
    middleName: formData.middleName.trim(),
    lastName: formData.lastName.trim(),
    phone: normalizedPhone,
    amountOwed: Number(formData.amountOwed),
    email: formData.email.trim() || undefined,
    passportSerial: passportSerial || undefined,
    passportNumber: passportNumber || undefined,
    address: formData.address.trim() || undefined,
  };
}

/**
 * Валидирует трансформированные данные перед отправкой в API
 */
function validateApiData(apiData: ApiFormData): {
  isValid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  if (!apiData.firstName) errors.push("Имя обязательно для заполнения");
  if (!apiData.lastName) errors.push("Фамилия обязательна для заполнения");
  if (!apiData.middleName) errors.push("Отчество обязательно для заполнения");
  if (!apiData.phone) errors.push("Телефон обязателен для заполнения");
  if (!apiData.amountOwed)
    errors.push("Сумма долга обязательна для заполнения");

  if (apiData.phone && !/^\+7\d{10}$/.test(apiData.phone)) {
    errors.push("Некорректный формат телефона");
  }

  if (apiData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(apiData.email)) {
    errors.push("Некорректный формат email");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

/**
 * Логирует трансформацию данных (для отладки)
 */
function logTransformation(
  originalData: FormData,
  transformedData: ApiFormData
): void {
  if (process.env.NODE_ENV === "development") {
    console.group("🔄 Form Data Transformation");
    console.log("📝 Original:", originalData);
    console.log("🚀 Transformed:", transformedData);
    console.groupEnd();
  }
}

// Типы для API ответов
export interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  error?: string;
  code?: string;
  data?: T;
}

export interface LeadResponse {
  id: string;
  status: string;
  createdAt: string;
  estimatedCallTime: string;
}

export interface VerificationResponse {
  phone: string;
  expiresIn: number;
  canResendAfter: number;
}

/**
 * API клиент для отправки заявки
 * @param formData - данные из формы
 * @returns ответ от API
 */
export async function submitLead(
  formData: FormData
): Promise<ApiResponse<LeadResponse>> {
  try {
    // Трансформируем данные формы в формат API
    const apiData = transformFormDataForApi(formData);

    // Логируем трансформацию в режиме разработки
    logTransformation(formData, apiData);

    // Валидируем трансформированные данные
    const validation = validateApiData(apiData);
    if (!validation.isValid) {
      throw new Error(
        `Ошибка валидации данных: ${validation.errors.join(", ")}`
      );
    }

    // Отправляем запрос
    const response = await fetch("/api/external-lead", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiData),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || "Ошибка при отправке заявки");
    }

    return result;
  } catch (error) {
    console.error("Ошибка при отправке заявки:", error);
    throw error;
  }
}

/**
 * API клиент для отправки кода верификации
 * @param phone - номер телефона (будет нормализован)
 * @returns ответ от API
 */
export async function sendVerificationCode(
  phone: string
): Promise<ApiResponse<VerificationResponse>> {
  try {
    // Нормализуем телефон перед отправкой
    const normalizedPhone = transformFormDataForApi({
      phone,
      firstName: "",
      lastName: "",
      middleName: "",
      email: "",
      birthYear: "",
      passport: "",
      address: "",
      amountOwed: "",
      privacyConsent: false,
    }).phone;

    const response = await fetch("/api/verification-phone", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phone: normalizedPhone,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || "Ошибка при отправке кода");
    }

    return result;
  } catch (error) {
    console.error("Ошибка при отправке кода:", error);
    throw error;
  }
}

/**
 * API клиент для проверки кода верификации
 * @param phone - номер телефона (будет нормализован)
 * @param code - код верификации
 * @returns ответ от API
 */
export async function verifyPhoneCode(
  phone: string,
  code: string
): Promise<ApiResponse> {
  try {
    // Нормализуем телефон перед отправкой
    const normalizedPhone = transformFormDataForApi({
      phone,
      firstName: "",
      lastName: "",
      middleName: "",
      email: "",
      birthYear: "",
      passport: "",
      address: "",
      amountOwed: "",
      privacyConsent: false,
    }).phone;

    const response = await fetch("/api/verification-phone", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phone: normalizedPhone,
        code,
        action: "verify",
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || "Ошибка при проверке кода");
    }

    return result;
  } catch (error) {
    console.error("Ошибка при проверке кода:", error);
    throw error;
  }
}

// Экспортируем трансформер для использования в других местах
export { transformFormDataForApi };
