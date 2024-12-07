import { useState } from "react"

export default function Counter({ initialCount }: { initialCount: number }) {
  const [count, setCount] = useState(initialCount)
  return <div>Counter
    <p>Count: {count}</p>
    <button onClick={() => setCount(count + 1)}>Increment</button>
  </div>
}
