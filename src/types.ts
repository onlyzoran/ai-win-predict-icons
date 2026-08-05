import type { ComponentType } from 'react'

/**
 * Shared props for Tabler-style icons in this package.
 * Outline: 24×24 viewBox, size + stroke. Filled: size only, fill="currentColor".
 */
export interface IconProps {
  size?: number | string
  stroke?: number | string
  className?: string
}

export type IconComponent = ComponentType<IconProps>
