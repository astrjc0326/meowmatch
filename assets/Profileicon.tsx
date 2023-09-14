import * as React from "react"
import Svg, { Ellipse, Path } from "react-native-svg"

function SvgComponent(props: any) {
  return (
    <Svg
      width={56}
      height={51}
      viewBox="0 0 56 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Ellipse cx={28} cy={25.3474} rx={28} ry={25.3474} fill="#CBEEEE" />
      <Ellipse cx={28} cy={25.3474} rx={28} ry={25.3474} fill="#CBEEEE" />
      <Path
        d="M47.318 7.477l-1.587 10.54-8.333-6.645 9.92-3.895zM8.826 7.624l10.224 3.262-9.529 7.448-.695-10.71z"
        fill="#fff"
        fillOpacity={0.8}
      />
      <Path
        d="M38.093 27.916l16.096-.315M37.577 32.411l14.777 3.819M19.101 29.522L2.909 28.256M19.112 33.41L4.335 37.227"
        stroke="#fff"
        strokeWidth={3}
      />
    </Svg>
  )
}

export default SvgComponent
