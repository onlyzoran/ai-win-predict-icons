/** Minimal className join (no clsx / tailwind-merge dependency). */
export function cn(...parts: Array<string | undefined | null | false>): string {
  return parts.filter(Boolean).join(' ')
}
