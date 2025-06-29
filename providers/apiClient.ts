const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL ?? process.env.NEXT_PUBLIC_VERCEL_URL

class ApiClient {
    private readonly baseUrl: string | undefined;

  constructor(baseUrl: string | undefined) {
        this.baseUrl = baseUrl;
    }

    async request<T>(
        endpoint: string,
        method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH",
        body?: unknown,
        headers: Record<string, string> = {},
        isBinary: boolean = false
    ): Promise<T> {
        try {
            const response = await fetch(`${this.baseUrl}${endpoint}`, {
                method,
                headers: {
                    "Content-Type": "application/json",
                    "Cache-Control": "public, max-age=86400, immutable",
                    ...headers,
                },
                body: body ? JSON.stringify(body) : undefined,
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

          return isBinary ? ((await response.blob()) as T) : ((await response.json()) as T);

        } catch (error) {
            console.error("API Request Error:", error);
            throw error;
        }
    }

    get<T>(endpoint: string, headers?: Record<string, string>, isBinary: boolean = false) {
        return this.request<T>(endpoint, "GET", undefined, headers, isBinary);
    }

    post<T>(endpoint: string, body: unknown, headers?: Record<string, string>) {
        return this.request<T>(endpoint, "POST", body, headers);
    }

    put<T>(endpoint: string, body: unknown, headers?: Record<string, string>) {
        return this.request<T>(endpoint, "PUT", body, headers);
    }

    patch<T>(endpoint: string, body: unknown, headers?: Record<string, string>) {
        return this.request<T>(endpoint, "PATCH", body, headers);
    }

    delete<T>(endpoint: string, headers?: Record<string, string>) {
        return this.request<T>(endpoint, "DELETE", undefined, headers);
    }
}

const apiClient = new ApiClient(baseUrl);
export default apiClient;
