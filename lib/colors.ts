// Централизованная система цветов
export const colors = {
  // Основные цвета бренда
  primary: {
    50: "#e6f7f0",
    100: "#ccefe1",
    200: "#99dfc3",
    300: "#66cfa5",
    400: "#33bf87",
    500: "#009F55", // Основной цвет
    600: "#008a4a",
    700: "#00753f",
    800: "#006034",
    900: "#004b29",
  },

  // Дополнительные цвета
  secondary: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
  },

  // Цвета состояний
  success: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d",
  },

  error: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
  },

  warning: {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f",
  },

  // Нейтральные цвета
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
  },

  // Специальные цвета
  white: "#ffffff",
  black: "#000000",
  transparent: "transparent",
}

// Функция для конвертации HEX в HSL
function hexToHsl(hex: string): string {
  const r = Number.parseInt(hex.slice(1, 3), 16) / 255
  const g = Number.parseInt(hex.slice(3, 5), 16) / 255
  const b = Number.parseInt(hex.slice(5, 7), 16) / 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h = 0
  let s = 0
  const l = (max + min) / 2

  if (max !== min) {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0)
        break
      case g:
        h = (b - r) / d + 2
        break
      case b:
        h = (r - g) / d + 4
        break
    }
    h /= 6
  }

  return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`
}

// CSS переменные для использования в компонентах
export const cssVariables = {
  // Основные цвета
  "--color-primary": hexToHsl(colors.primary[500]),
  "--color-primary-foreground": hexToHsl(colors.white),

  // Цвета состояний
  "--color-success": hexToHsl(colors.success[500]),
  "--color-error": hexToHsl(colors.error[500]),
  "--color-warning": hexToHsl(colors.warning[500]),

  // Нейтральные цвета
  "--color-background": hexToHsl(colors.white),
  "--color-foreground": hexToHsl(colors.gray[900]),
  "--color-muted": hexToHsl(colors.gray[100]),
  "--color-muted-foreground": hexToHsl(colors.gray[500]),
  "--color-border": hexToHsl(colors.gray[200]),
  "--color-input": hexToHsl(colors.gray[200]),
  "--color-ring": hexToHsl(colors.primary[500]),

  // Карточки
  "--color-card": hexToHsl(colors.white),
  "--color-card-foreground": hexToHsl(colors.gray[900]),

  // Поповеры
  "--color-popover": hexToHsl(colors.white),
  "--color-popover-foreground": hexToHsl(colors.gray[900]),

  // Вторичные цвета
  "--color-secondary": hexToHsl(colors.gray[100]),
  "--color-secondary-foreground": hexToHsl(colors.gray[900]),

  // Акцентные цвета
  "--color-accent": hexToHsl(colors.gray[100]),
  "--color-accent-foreground": hexToHsl(colors.gray[900]),

  // Деструктивные цвета
  "--color-destructive": hexToHsl(colors.error[500]),
  "--color-destructive-foreground": hexToHsl(colors.white),
}
