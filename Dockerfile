# Сборка фронтенда
FROM node:20 AS builder

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build

# Финальный образ с nginx
FROM nginx:1.24

# Копируем билд
COPY --from=builder /app/dist /usr/share/nginx/html

# Копируем правильный конфиг nginx
COPY default.conf /etc/nginx/conf.d/default.conf
