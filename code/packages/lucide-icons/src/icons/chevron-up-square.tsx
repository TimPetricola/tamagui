import { memo } from 'react'
import type { IconProps } from '@tamagui/helpers-icon'
import { Svg, Path, Rect } from 'react-native-svg'
import { themed } from '@tamagui/helpers-icon'

const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <Rect width="18" height="18" x="3" y="3" rx="2" stroke={color} />
      <Path d="m8 14 4-4 4 4" stroke={color} />
    </Svg>
  )
}

Icon.displayName = 'ChevronUpSquare'

export const ChevronUpSquare = memo<IconProps>(
  themed(Icon, { resolveValues: process.env.TAMAGUI_ICON_COLOR_DYNAMIC ? 'auto' : 'web' })
)
