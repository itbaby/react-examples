import { useState } from "react";
import { useDebounce } from "react-use";


export default function UseDebounceExample() {
  const [state, setState] = useState('');
  const [val, setVal] = useState('');
  const [debouncedValue, setDebouncedValue] = useState('');
  const [, cancel] = useDebounce(() => {
    setState('typing stopped')
    setDebouncedValue(val);
  }, 2000, [val])
  return <>
    <input value={val} onChange={e => setVal(e.target.value)} />
    <div>{state}{debouncedValue}</div>
    <div>UseDebounceExample</div>
    <button onClick={cancel}>Cancel</button>
  </>
}
