import { useRef } from "react";
import { useState } from "react"

export default function UseRefExample(){
  const [timer,setTimer] = useState(0);
  const intervalRef = useRef(null);

  const startTimer=()=>{
    intervalRef.current = setInterval(()=>{
      setTimer((pt)=>pt+1)
    },1000)
  }
  const stopTimer=()=>{
    clearInterval(intervalRef.current)
  }
  
  return (
    <>
      <p >timer : {timer} seconds</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </>
  )  
}
