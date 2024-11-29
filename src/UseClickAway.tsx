import React from "react";
import { useClickAway } from "react-use";

export default function UseClickAway() {
  const ref = React.useRef<HTMLDivElement>(null);
  useClickAway(ref, () => {
    console.log('OutSide Clicked')
  })
  return (
    <>
      <div ref={ref} style={{
        width: 200,
        height: 200,
        background: 'gray'
      }}></div>
    </>
  )
}
