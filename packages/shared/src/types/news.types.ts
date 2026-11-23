export type NewsCategory = "general" | "announcement" | "event" | "development";

export type NewsStatus = "draft" | "published" | "archived";

export interface NewsItem {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  category: NewsCategory;
  status: NewsStatus;
  imageUrl?: string;
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
}
