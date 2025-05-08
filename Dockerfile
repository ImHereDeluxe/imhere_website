# Сборка проекта
FROM node:20-alpine AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Статический nginx сервер
FROM nginx:1.24
COPY --from=build /app/dist /usr/share/nginx/html
