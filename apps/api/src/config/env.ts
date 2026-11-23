import "dotenv/config";
import { z } from "zod";
import type { ApiEnv } from "../types/env.types";

const envSchema = z.object({
  PORT: z.coerce.number().int().min(1).max(65535).default(5000),
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  CLIENT_URL: z.string().url().default("http://localhost:3000"),
});

export const env: ApiEnv = envSchema.parse(process.env);
