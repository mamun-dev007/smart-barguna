import type { ErrorRequestHandler } from "express";

export const errorHandler: ErrorRequestHandler = (error, _req, res, _next) => {
  const status = (error as { status?: number }).status ?? 500;
  const message =
    status === 500 ? "Internal Server Error" : (error as Error).message;

  res.status(status).json({ success: false, message });
};
