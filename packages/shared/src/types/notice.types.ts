export type NoticeType = "notice" | "alert" | "update";

export interface NoticeItem {
  id: string;
  title: string;
  content: string;
  type: NoticeType;
  publishedAt: string;
  expiresAt?: string;
  isPinned: boolean;
}
