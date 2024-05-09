import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props: any) {
  return (
    <Svg
      width={28}
      height={19}
      viewBox="0 0 28 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M1.186 8.964c-2.498 4.55 12.634 10.189 25.554 9.104V1.511L1.186 8.964z"
        fill="#C9EDED"
        stroke="#C9EDED"
      />
    </Svg>
  )
}

export default SvgComponent
