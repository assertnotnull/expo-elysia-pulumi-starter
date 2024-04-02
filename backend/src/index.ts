import { Elysia } from "elysia";

const app = new Elysia().get("/", () => "Hello from Elysia").listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

export type App = typeof app;
