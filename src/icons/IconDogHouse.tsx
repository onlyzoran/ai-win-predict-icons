import { cn } from '../cn'
import type { IconProps } from '../types'

const cls = 'tabler-icon-dog-house'

export function IconDogHouse({ size = 24, stroke = 2, className }: IconProps) {
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
      {/* Source: Tabler home-2 (MIT) */}
      <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
      <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
      <path d="M10 12h4v4h-4l0 -4" />
    </svg>
  )
}
