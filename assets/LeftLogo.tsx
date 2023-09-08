import * as React from "react"
const SvgComponent = (props:any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={58}
    height={86}
    fill="none"
    {...props}
  >
    <ellipse
      cx={59.108}
      cy={50.411}
      fill="#C9EDED"
      fillOpacity={0.8}
      rx={43.74}
      ry={35.555}
    />
    <path
      fill="#C9EDED"
      fillOpacity={0.8}
      d="m16.123 12.601 32.865 13.271L21.062 47.7 16.122 12.6Z"
    />
    <path stroke="#C9EDED" strokeWidth={3} d="m2.901 60.433 36.322-4.604" />
    <path stroke="#fff" strokeWidth={3} d="m16.135 58.34 23.02-3.053" />
    <path stroke="#C9EDED" strokeWidth={3} d="m5.459 71.177 36.322-4.605" />
    <path stroke="#fff" strokeWidth={3} d="m20.74 68.572 20.973-2.542" />
  </svg>
)
export default SvgComponent
