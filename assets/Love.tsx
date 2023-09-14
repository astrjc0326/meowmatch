import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent({color}: any) {
  return (
    <Svg
      width={56}
      height={49}
      viewBox="0 0 56 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // {...props}
    >
      <Path d="M27.813 48L7.89 21.466h39.945L27.813 48.001z" fill={color} />
      <Path
        d="M37.382 33.425c-4.894 4.807-15.537 1.713-23.786-5.398C5.348 20.917 3.458 12.91 8.352 8.103c4.894-4.806 10.583-5.969 18.831 1.142 8.248 7.11 15.092 19.374 10.199 24.18z"
        fill={color}
      />
      <Path
        d="M20.256 34.067c-5.405-4.294-2.062-13.575 5.324-21.447 7.386-7.872 15.137-10 20.543-5.706 5.405 4.294 4.681 12.802-2.705 20.674-7.386 7.873-17.756 10.773-23.162 6.479z"
        fill={color}
      />
    </Svg>
  )
}

export default SvgComponent
