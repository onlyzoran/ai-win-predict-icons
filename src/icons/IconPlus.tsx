import { cn } from '../cn'
import type { IconProps } from '../types'

const cls = 'tabler-icon-plus'

export function IconPlus({ size = 24, stroke = 2, className }: IconProps) {
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
      <path d="M12 5l0 14" />
      <path d="M5 12l14 0" />
    </svg>
  )
}
