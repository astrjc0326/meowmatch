import * as React from "react"
import Svg, { Circle, Ellipse, Path } from "react-native-svg"

function SvgComponent(props: any) {
  return (
    <Svg
      width={290}
      height={290}
      viewBox="0 0 290 290"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={145} cy={145} r={145} fill="#D9D9D9" />
      <Ellipse cx={146.54} cy={150.54} rx={85.5} ry={69.5} fill="#C9EDED" />
      <Path
        d="M228.428 80.216l-10.318 68.509-54.172-43.19 64.49-25.32zM62.516 76.632l64.242 25.942-54.587 42.664-9.655-68.606z"
        fill="#C9EDED"
      />
      <Path
        stroke="#C9EDED"
        strokeWidth={8}
        d="M36.5371 169.072L107.537 160.072"
      />
      <Path
        stroke="#C9EDED"
        strokeWidth={8}
        d="M186.581 160.077L252.581 169.077"
      />
      <Path d="M62.54 166.04l44.997-5.968" stroke="#fff" strokeWidth={8} />
      <Path
        stroke="#C9EDED"
        strokeWidth={8}
        d="M41.5371 190.072L112.537 181.072"
      />
      <Path
        d="M71.54 186.04l40.997-4.968M182.04 160.307l46.362 4.587"
        stroke="#fff"
        strokeWidth={8}
      />
      <Path
        stroke="#C9EDED"
        strokeWidth={8}
        d="M170.672 178.09L239.672 189.122"
      />
      <Path d="M178.04 180.008l41 5.032" stroke="#fff" strokeWidth={8} />
    </Svg>
  )
}

export default SvgComponent
