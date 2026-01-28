/**
 * Garante que uma URL tenha o protocolo http:// ou https://
 * Se a URL não tiver protocolo, adiciona https://
 */
export function ensureExternalUrl(url: string | null | undefined): string {
  if (!url) return "";

  const trimmedUrl = url.trim();
  if (!trimmedUrl) return "";

  // Se já tem protocolo, retorna como está
  if (trimmedUrl.startsWith("http://") || trimmedUrl.startsWith("https://")) {
    return trimmedUrl;
  }

  // Se começa com //, adiciona https:
  if (trimmedUrl.startsWith("//")) {
    return `https:${trimmedUrl}`;
  }

  // Caso contrário, adiciona https://
  return `https://${trimmedUrl}`;
}
