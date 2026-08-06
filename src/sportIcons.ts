import { IconBallAmericanFootball } from './icons/IconBallAmericanFootball'
import { IconBallBaseball } from './icons/IconBallBaseball'
import { IconBallBasketball } from './icons/IconBallBasketball'
import { IconBallFootball } from './icons/IconBallFootball'
import { IconBallRugby } from './icons/IconBallRugby'
import { IconBallTennis } from './icons/IconBallTennis'
import { IconBoxingGlove } from './icons/IconBoxingGlove'
import { IconFlag } from './icons/IconFlag'
import { IconGolf } from './icons/IconGolf'
import { IconHockey } from './icons/IconHockey'
import { IconSteeringWheel } from './icons/IconSteeringWheel'
import type { IconComponent } from './types'

/** Keys aligned with ai-win-predict `Sport` / `sportIcons`. */
export type SportIconKey =
  | 'football'
  | 'basketball'
  | 'americanFootball'
  | 'hockey'
  | 'baseball'
  | 'motorsport'
  | 'golf'
  | 'politics'
  | 'tennis'
  | 'rugby'
  | 'boxing'

export const sportIcons: Record<SportIconKey, IconComponent> = {
  football: IconBallFootball,
  basketball: IconBallBasketball,
  americanFootball: IconBallAmericanFootball,
  hockey: IconHockey,
  baseball: IconBallBaseball,
  motorsport: IconSteeringWheel,
  golf: IconGolf,
  politics: IconFlag,
  tennis: IconBallTennis,
  rugby: IconBallRugby,
  boxing: IconBoxingGlove,
}
