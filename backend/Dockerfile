FROM oven/bun:alpine
RUN mkdir /app
WORKDIR /app
COPY package.json bun.lockb /app
COPY src /app/src
RUN bun i
EXPOSE 3000
CMD ["bun", "dev"]