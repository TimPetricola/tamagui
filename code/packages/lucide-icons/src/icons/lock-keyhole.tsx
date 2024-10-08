import { memo } from 'react'
import type { IconProps } from '@tamagui/helpers-icon'
import { Svg, Circle as _Circle, Path, Rect } from 'react-native-svg'
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
      <_Circle cx="12" cy="16" r="1" stroke={color} />
      <Rect x="3" y="10" width="18" height="12" rx="2" stroke={color} />
      <Path d="M7 10V7a5 5 0 0 1 10 0v3" stroke={color} />
    </Svg>
  )
}

Icon.displayName = 'LockKeyhole'

export const LockKeyhole = memo<IconProps>(
  themed(Icon, { resolveValues: process.env.TAMAGUI_ICON_COLOR_DYNAMIC ? 'auto' : 'web' })
)
