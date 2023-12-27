FROM node:alpine
ENV NODE_ENV production
LABEL img="test-api"

RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY packag*.json ./

RUN yarn install --frozen-lockfile
COPY . .

EXPOSE 8080

CMD ["node", "app.js"]
