import * as React from "react"
import Svg, { Ellipse, Path } from "react-native-svg"

function SvgComponent(props: any) {
  return (
    <Svg
      width={229}
      height={169}
      viewBox="0 0 229 169"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Ellipse cx={115.54} cy={98.5401} rx={85.5} ry={69.5} fill="#C9EDED" />
      <Path
        d="M197.428 28.216l-10.318 68.51-54.172-43.19 64.49-25.32zM31.516 24.632l64.242 25.942L41.17 93.238l-9.655-68.606z"
        fill="#C9EDED"
      />
      <Path
        stroke="#C9EDED"
        strokeWidth={8}
        d="M5.53705 117.072L76.537 108.072"
      />
      <Path
        stroke="#C9EDED"
        strokeWidth={8}
        d="M155.581 108.077L221.581 117.077"
      />
      <Path d="M31.54 114.04l44.997-5.968" stroke="#fff" strokeWidth={8} />
      <Path
        stroke="#C9EDED"
        strokeWidth={8}
        d="M10.5371 138.072L81.537 129.072"
      />
      <Path
        d="M40.54 134.04l40.997-4.968M151.04 108.307l46.362 4.587"
        stroke="#fff"
        strokeWidth={8}
      />
      <Path
        stroke="#C9EDED"
        strokeWidth={8}
        d="M139.672 126.09L208.672 137.122"
      />
      <Path d="M147.04 128.008l41 5.032" stroke="#fff" strokeWidth={8} />
    </Svg>
  )
}

export default SvgComponent
