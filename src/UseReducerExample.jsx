import { useReducer } from "react"

const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1
  }
}


export default function  UseReducerExample() {
  const [count, dispatch] = useReducer(reducer, 0)

  return (
    <>
      <p>{count}</p>
      <button onClick={() => dispatch('increment')}>Increament</button>
    </>
  )
}
