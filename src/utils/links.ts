const rawBaseUrl = import.meta.env.BASE_URL;
const baseUrl = rawBaseUrl.endsWith("/") ? rawBaseUrl : `${rawBaseUrl}/`;

export function withBase(path: string): string {
  if (!path) {
    return baseUrl;
  }

  if (/^(https?:|mailto:|tel:|#)/.test(path)) {
    return path;
  }

  const trimmed = path.startsWith("/") ? path.slice(1) : path;
  return `${baseUrl}${trimmed}`;
}

export function withoutBase(pathname: string): string {
  if (rawBaseUrl === "/") {
    return pathname;
  }

  if (!pathname.startsWith(baseUrl) && !pathname.startsWith(rawBaseUrl)) {
    return pathname;
  }

  const prefix = pathname.startsWith(baseUrl) ? baseUrl : rawBaseUrl;
  const stripped = pathname.slice(prefix.length);
  return stripped ? `/${stripped}` : "/";
}
