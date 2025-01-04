FROM node:16

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

CMD ["npm", "run", "preview"]

# Expose port 4173 for the Vite preview server
EXPOSE 4173