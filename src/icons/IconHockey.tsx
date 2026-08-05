import { cn } from '../cn'
import type { IconProps } from '../types'

const cls = 'tabler-icon-hockey'

export function IconHockey({ size = 24, stroke = 2, className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(`tabler-icon ${cls}`, className)}
      aria-hidden={true}
    >
      <path d="M4 8a8 3 0 1 0 16 0a8 3 0 1 0 -16 0" />
      <path d="M4 8v5c0 1.657 3.582 3 8 3s8 -1.343 8 -3v-5" />
    </svg>
  )
}
