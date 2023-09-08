import * as React from "react"
const SvgComponent = (props:any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={67}
    height={86}
    fill="none"
    {...props}
  >
    <ellipse
      cx={9.108}
      cy={50.411}
      fill="#C9EDED"
      fillOpacity={0.8}
      rx={43.74}
      ry={35.555}
    />
    <path
      fill="#C9EDED"
      fillOpacity={0.8}
      d="m51 14.434-5.278 35.048-27.714-22.095L51 14.434Z"
    />
    <path stroke="#C9EDED" strokeWidth={3} d="m29.518 55.831 33.764 4.604" />
    <path stroke="#fff" strokeWidth={3} d="m27.269 55.407 23.718 2.347" />
    <path stroke="#C9EDED" strokeWidth={3} d="m21.367 65.044 35.299 5.644" />
    <path stroke="#fff" strokeWidth={3} d="m25.223 65.486 20.974 2.574" />
  </svg>
)
export default SvgComponent
