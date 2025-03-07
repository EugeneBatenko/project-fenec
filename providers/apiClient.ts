const baseUrl =
    process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : process.env.NEXT_PUBLIC_API_BASE_URL || "https://my-production-url.com";


class ApiClient {
    private readonly baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    async request<T>(
        endpoint: string,
        method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH",
        body?: unknown,
        headers: Record<string, string> = {}
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

            return (await response.json()) as T;
        } catch (error) {
            console.error("API Request Error:", error);
            throw error;
        }
    }

    get<T>(endpoint: string, headers?: Record<string, string>) {
        return this.request<T>(endpoint, "GET", undefined, headers);
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
