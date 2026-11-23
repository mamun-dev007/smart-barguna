export const APP_NAME = "Smart Barguna";

export const DEFAULT_LANGUAGE = "bn";

export const SUPPORTED_LANGUAGES = ["bn", "en"] as const;

export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];
