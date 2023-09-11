import * as React from "react"
import Svg, { Ellipse, Path } from "react-native-svg"

function SvgComponent(props: any) {
  return (
    <Svg
      width={58}
      height={86}
      viewBox="0 0 58 86"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Ellipse
        cx={59.1078}
        cy={50.4109}
        rx={43.7399}
        ry={35.5547}
        fill="#C9EDED"
        fillOpacity={0.8}
      />
      <Path
        d="M16.123 12.601l32.865 13.271L21.062 47.7 16.122 12.6z"
        fill="#C9EDED"
        fillOpacity={0.8}
      />
      <Path
        stroke="#C9EDED"
        strokeWidth={3}
        d="M2.90133 60.4334L39.2234 55.8292"
      />
      <Path d="M16.135 58.34l23.02-3.053" stroke="#fff" strokeWidth={3} />
      <Path
        stroke="#C9EDED"
        strokeWidth={3}
        d="M5.45923 71.1765L41.7813 66.5723"
      />
      <Path d="M20.74 68.572l20.973-2.542" stroke="#fff" strokeWidth={3} />
    </Svg>
  )
}

export default SvgComponent
