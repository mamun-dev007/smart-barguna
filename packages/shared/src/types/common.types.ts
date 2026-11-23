export interface ApiResponse<TData> {
  success: boolean;
  data?: TData;
  message?: string;
  error?: string;
}

export interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface PaginatedResponse<TItem> {
  success: boolean;
  data: TItem[];
  pagination: Pagination;
}
