# Используем официальный Node.js образ
FROM node:22-alpine AS base

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json (если есть)
COPY package*.json ./

# Этап установки зависимостей
FROM base AS deps
# Устанавливаем зависимости с флагом --legacy-peer-deps
RUN npm ci --legacy-peer-deps --only=production && npm cache clean --force

# Этап сборки
FROM base AS builder
# Копируем зависимости из предыдущего этапа
COPY --from=deps /app/node_modules ./node_modules
# Копируем исходный код
COPY . .

# Устанавливаем все зависимости (включая dev) для сборки
RUN npm ci --legacy-peer-deps

# Собираем приложение
RUN npm run build

# Производственный этап
FROM base AS runner

# Создаем пользователя для безопасности
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Копируем публичные файлы
COPY --from=builder /app/public ./public

# Копируем собранное приложение
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Переключаемся на непривилегированного пользователя
USER nextjs

# Экспонируем порт
EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# Запускаем приложение
CMD ["node", "server.js"]