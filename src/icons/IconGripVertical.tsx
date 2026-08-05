import { cn } from '../cn'
import type { IconProps } from '../types'

const cls = 'tabler-icon-grip-vertical'

export function IconGripVertical({ size = 24, stroke = 2, className }: IconProps) {
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
      <path d="M8 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <path d="M8 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <path d="M8 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <path d="M14 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <path d="M14 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <path d="M14 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    </svg>
  )
}
