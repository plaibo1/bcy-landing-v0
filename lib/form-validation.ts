// Типы для валидации
export interface FormData {
  firstName: string;
  lastName: string;
  middleName: string;
  phone: string;
  email: string;
  birthYear: string;
  passport: string;
  address: string;
}

export interface FormErrors {
  firstName?: string;
  lastName?: string;
  middleName?: string;
  phone?: string;
  email?: string;
  birthYear?: string;
}

// Маска для телефона
export function formatPhoneNumber(value: string): string {
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
    return `+7 (${normalizedNumber.slice(1, 4)}) ${normalizedNumber.slice(4)}`;
  if (normalizedNumber.length <= 9)
    return `+7 (${normalizedNumber.slice(1, 4)}) ${normalizedNumber.slice(
      4,
      7
    )}-${normalizedNumber.slice(7)}`;
  return `+7 (${normalizedNumber.slice(1, 4)}) ${normalizedNumber.slice(
    4,
    7
  )}-${normalizedNumber.slice(7, 9)}-${normalizedNumber.slice(9, 11)}`;
}

// Маска для паспортных данных
export function formatPassportNumber(value: string): string {
  // Удаляем все нецифровые символы
  const passportNumber = value.replace(/\D/g, "");

  // Применяем маску XXXX XXXXXX
  if (passportNumber.length === 0) return "";
  if (passportNumber.length <= 4) return passportNumber;
  return `${passportNumber.slice(0, 4)} ${passportNumber.slice(4, 10)}`;
}

// Валидация полей формы
export function validateForm(formData: FormData): FormErrors {
  const errors: FormErrors = {};

  // Валидация имени
  if (!formData.firstName.trim()) {
    errors.firstName = "Имя обязательно для заполнения";
  } else if (formData.firstName.trim().length < 2) {
    errors.firstName = "Имя должно содержать минимум 2 символа";
  } else if (!/^[а-яёА-ЯЁ\s-]+$/.test(formData.firstName.trim())) {
    errors.firstName = "Имя должно содержать только русские буквы";
  }

  // Валидация фамилии
  if (!formData.lastName.trim()) {
    errors.lastName = "Фамилия обязательна для заполнения";
  } else if (formData.lastName.trim().length < 2) {
    errors.lastName = "Фамилия должна содержать минимум 2 символа";
  } else if (!/^[а-яёА-ЯЁ\s-]+$/.test(formData.lastName.trim())) {
    errors.lastName = "Фамилия должна содержать только русские буквы";
  }

  // Валидация отчества
  if (!formData.middleName.trim()) {
    errors.middleName = "Отчество обязательно для заполнения";
  } else if (formData.middleName.trim().length < 2) {
    errors.middleName = "Отчество должно содержать минимум 2 символа";
  } else if (!/^[а-яёА-ЯЁ\s-]+$/.test(formData.middleName.trim())) {
    errors.middleName = "Отчество должно содержать только русские буквы";
  }

  // Валидация телефона
  const phoneDigits = formData.phone.replace(/\D/g, "");
  if (!formData.phone.trim()) {
    errors.phone = "Номер телефона обязателен для заполнения";
  } else if (phoneDigits.length !== 11) {
    errors.phone = "Номер телефона должен содержать 11 цифр";
  }

  // Валидация email (только если заполнен)
  if (formData.email.trim()) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      errors.email = "Введите корректный email адрес";
    }
  }

  // Валидация года рождения (только если заполнен)
  if (formData.birthYear.trim()) {
    const currentYear = new Date().getFullYear();
    const birthYear = Number.parseInt(formData.birthYear);
    if (isNaN(birthYear) || birthYear < 1940 || birthYear > currentYear - 18) {
      errors.birthYear = "Введите корректный год рождения (возраст от 18 лет)";
    }
  }

  return errors;
}

// Проверка, есть ли ошибки валидации
export function hasValidationErrors(errors: FormErrors): boolean {
  return Object.keys(errors).length > 0;
}

// Очистка ошибки для конкретного поля
export function clearFieldError(
  errors: FormErrors,
  field: keyof FormErrors
): FormErrors {
  const newErrors = { ...errors };
  delete newErrors[field];
  return newErrors;
}

// Применение маски к значению поля
export function applyFieldMask(field: keyof FormData, value: string): string {
  switch (field) {
    case "phone":
      return formatPhoneNumber(value);
    case "passport":
      return formatPassportNumber(value);
    default:
      return value;
  }
}
