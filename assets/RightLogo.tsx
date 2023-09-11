import * as React from "react"
import Svg, { Ellipse, Path } from "react-native-svg"

function SvgComponent(props: any) {
  return (
    <Svg
      width={67}
      height={86}
      viewBox="0 0 67 86"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Ellipse
        cx={9.10778}
        cy={50.4109}
        rx={43.7399}
        ry={35.5547}
        fill="#C9EDED"
        fillOpacity={0.8}
      />
      <Path
        d="M51 14.434l-5.278 35.048-27.714-22.095L51 14.434z"
        fill="#C9EDED"
        fillOpacity={0.8}
      />
      <Path
        stroke="#C9EDED"
        strokeWidth={3}
        d="M29.5178 55.831L63.2819 60.4352"
      />
      <Path d="M27.269 55.407l23.718 2.347" stroke="#fff" strokeWidth={3} />
      <Path
        stroke="#C9EDED"
        strokeWidth={3}
        d="M21.3667 65.0445L56.6656 70.6881"
      />
      <Path d="M25.223 65.486l20.974 2.574" stroke="#fff" strokeWidth={3} />
    </Svg>
  )
}

export default SvgComponent
