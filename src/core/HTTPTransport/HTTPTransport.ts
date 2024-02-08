import { HOST } from "#constants/constants";

export enum METHOD {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

type Options = {
  method: METHOD;
  data?: any;
};

type OptionsWithoutMethod = Omit<Options, "method">;

export class HTTPTransport {
  private apiUrl: string = "";
  constructor(apiPath: string) {
    this.apiUrl = `${HOST}${apiPath}`;
  }

  get<TResponse>(url: string, options: OptionsWithoutMethod = {}): Promise<TResponse> {
    return this.request<TResponse>(url, { ...options, method: METHOD.GET });
  }

  post<TResponse>(url: string, options: OptionsWithoutMethod = {}): Promise<TResponse> {
    return this.request<TResponse>(url, { ...options, method: METHOD.POST });
  }

  put<TResponse>(url: string, options: OptionsWithoutMethod = {}): Promise<TResponse> {
    return this.request<TResponse>(url, { ...options, method: METHOD.PUT });
  }

  patch<TResponse>(url: string, options: OptionsWithoutMethod = {}): Promise<TResponse> {
    return this.request<TResponse>(url, { ...options, method: METHOD.PATCH });
  }

  async request<TResponse>(
    url: string,
    options: Options = { method: METHOD.GET },
  ): Promise<TResponse> {
    const { method, data } = options;

    const response = await fetch(`${this.apiUrl}${url}`, {
      method,
      credentials: "include",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: data ? JSON.stringify(data) : null,
    });

    const isJson = response.headers.get("content-type")?.includes("application/json");
    const resultData = isJson ? response.json() : null;

    return resultData as unknown as TResponse;
  }

  async fileRequset(url: string, form: FormData) {
    const response = await fetch(`${this.apiUrl}${url}`, {
      method: "PUT",
      credentials: "include",
      mode: "cors",
      body: form,
    });

    const isJson = response.headers.get("content-type")?.includes("application/json");
    const resultData = isJson ? response.json() : null;

    return resultData;
  }
}

export const authApi = new HTTPTransport("/auth");

export const chatApi = new HTTPTransport("/chats");

export const userApi = new HTTPTransport("/user");
