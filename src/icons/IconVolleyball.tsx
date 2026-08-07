import { cn } from '../cn'
import type { IconProps } from '../types'

const cls = 'tabler-icon-ball-volleyball'

export function IconVolleyball({ size = 24, stroke = 2, className }: IconProps) {
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
      {/* Source: Tabler ball-volleyball (MIT) */}
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <path d="M12 12a8 8 0 0 0 8 4" />
      <path d="M7.5 13.5a12 12 0 0 0 8.5 6.5" />
      <path d="M12 12a8 8 0 0 0 -7.464 4.928" />
      <path d="M12.951 7.353a12 12 0 0 0 -9.88 4.111" />
      <path d="M12 12a8 8 0 0 0 -.536 -8.928" />
      <path d="M15.549 15.147a12 12 0 0 0 1.38 -10.611" />
    </svg>
  )
}
