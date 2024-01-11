enum METHODS {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

type HTTPMethod = (
  url: string,
  options?: HttpRequestOptions,
) => Promise<XMLHttpRequest>;

export class HTTPTransport {
  get: HTTPMethod = (url, options = {}) =>
    this.request(url, { ...options, method: METHODS.GET });
  put: HTTPMethod = (url, options = {}) =>
    this.request(url, { ...options, method: METHODS.PUT });
  post: HTTPMethod = (url, options = {}) =>
    this.request(url, { ...options, method: METHODS.POST });
  delete: HTTPMethod = (url, options = {}) =>
    this.request(url, { ...options, method: METHODS.DELETE });

  request(
    url: string,
    options: HttpRequestOptions = { method: METHODS.GET },
  ): Promise<XMLHttpRequest> {
    const { method, data, timeout, headers } = options;

    return new Promise<XMLHttpRequest>((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      if (method === METHODS.GET && data) {
        url += `?${this.queryStringify(data)}`;
      }

      if (method) xhr.open(method, url);

      xhr.timeout = timeout || 0;

      if (headers) {
        Object.keys(headers).forEach((key) => {
          xhr.setRequestHeader(key, headers[key]);
        });
      }

      xhr.onload = function () {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = function () {
        reject(new Error("Request timeout"));
      };

      if (method === METHODS.GET || !data) {
        xhr.send();
      } else {
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify(data));
      }
    });
  }

  private queryStringify(data: Record<string, any>): string {
    const result = Object.keys(data)
      .map((key) => {
        const value = data[key];

        if (typeof value === "object") {
          if (Array.isArray(value)) {
            return `${key}=${value.join(",")}`;
          } else {
            return `${key}=${value.toString()}`;
          }
        }

        return `${key}=${value}`;
      })
      .join("&");

    return result;
  }
}

interface HttpRequestOptions {
  method?: METHODS;
  data?: Record<string, any>;
  timeout?: number;
  headers?: Record<string, string>;
}
