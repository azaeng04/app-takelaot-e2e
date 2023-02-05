FROM mcr.microsoft.com/playwright:v1.30.0-focal

WORKDIR /e2e/

COPY package.json pnpm-lock.yaml /e2e/

RUN npm install -g pnpm

RUN pnpm install
