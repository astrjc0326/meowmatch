import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function SvgComponent({color}: any) {
  return (
    <Svg
      width={54}
      height={39}
      viewBox="0 0 54 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // {...props}
    >
      <Rect x={6.45844} width={47.31} height={39} rx={19.5} fill={color} />
      <Path
        d="M0 30.488c.215 1.618 2.997 4.066 12.408.91l-3.706-4.35L0 30.488z"
        fill={color}
      />
    </Svg>
  )
}

export default SvgComponent
