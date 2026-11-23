export interface ApiEnv {
  PORT: number;
  NODE_ENV: "development" | "production" | "test";
  CLIENT_URL: string;
}
