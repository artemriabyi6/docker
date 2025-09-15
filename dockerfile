FROM node:20-alpine

WORKDIR /app

# Копіюємо package.json
COPY package.json ./

# Встановлюємо ВСІ залежності (включаючи devDependencies для TypeScript)
RUN npm install

# Копіюємо решту файлів
COPY . .

# Створюємо production build
RUN npm run build

EXPOSE 3000

# Запускаємо production версію
CMD ["npm", "start"]