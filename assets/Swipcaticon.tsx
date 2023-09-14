import * as React from "react"
import Svg, { Ellipse, Path } from "react-native-svg"

function SvgComponent({color}: any) {
  return (
    <Svg
      width={61}
      height={45}
      viewBox="0 0 61 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // {...props}
    >
      <Ellipse
        cx={30.8169}
        cy={26.2826}
        rx={22.8046}
        ry={18.5371}
        fill={color}
      />
      <Path
        d="M52.658 7.526l-2.752 18.273-14.449-11.52 17.201-6.753zM8.406 6.57l17.135 6.92-14.56 11.379-2.575-18.3z"
        fill={color}
      />
      <Path
        stroke={color}
        strokeWidth={3}
        d="M1.42239 30.7957L20.3595 28.3952"
      />
      <Path
        stroke={color}
        strokeWidth={3}
        d="M41.555 28.3971L59.1585 30.7976"
      />
      <Path d="M8.412 30.417l12.002-1.592" stroke="#fff" strokeWidth={3} />
      <Path
        stroke={color}
        strokeWidth={3}
        d="M2.75601 36.3969L21.6931 33.9964"
      />
      <Path
        d="M10.813 35.751l10.935-1.325M40.285 28.888l12.366 1.223"
        stroke="#fff"
        strokeWidth={3}
      />
      <Path
        stroke={color}
        strokeWidth={3}
        d="M37.3217 33.2031L55.7253 36.1455"
      />
      <Path d="M39.219 34.142l10.935 1.342" stroke="#fff" strokeWidth={3} />
    </Svg>
  )
}

export default SvgComponent
