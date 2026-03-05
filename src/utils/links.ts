const baseUrl = import.meta.env.BASE_URL;

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
  if (baseUrl === "/") {
    return pathname;
  }

  if (!pathname.startsWith(baseUrl)) {
    return pathname;
  }

  const stripped = pathname.slice(baseUrl.length);
  return stripped ? `/${stripped}` : "/";
}
