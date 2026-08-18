import { cn } from '../cn'
import type { IconProps } from '../types'

const cls = 'tabler-icon-chart-sankey'

export function IconChartSankey({ size = 24, stroke = 2, className }: IconProps) {
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
      {/* Source: Tabler chart-sankey (MIT) */}
      <path d="M4 6c6.944 0 9.056 8 16 8" />
      <path d="M4 12c6.37 0 9.63 6 16 6" />
      <path d="M20 6c-7.526 0 -7.905 12 -16 12" />
    </svg>
  )
}
