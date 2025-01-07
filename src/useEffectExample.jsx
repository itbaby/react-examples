import { useEffect, useLayoutEffect, useRef, useState } from "react"

/**
for most side effects
runs after paint
asynchronous
used more often

**/
export default function UseEffectExample(){
  const ref = useRef(null)
  const [count,setCount] = useState(0)

  useLayoutEffect(()=>{
    if(ref.current){
      
    const {height} = ref.current.getBoundingClientRect()
    setCount(height)
    }
  },[])

  useEffect(()=>{
    document.title = `You clicked ${count} times`
  },[count])

  return (
    <>
      <button ref={ref} onClick={()=>setCount(count+1)}>Change Page Title</button>
    </>
  )
}
