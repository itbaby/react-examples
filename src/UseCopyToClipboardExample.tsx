import { useState } from "react";
import { useCopyToClipboard } from "react-use";

//
export default function UseCopytoClipboardExample() {
  const [text, setText] = useState('');
  const [state, copyToClipboard] = useCopyToClipboard();
  return (
    <>
      <input value={text} onChange={e => setText(e.target.value)} />
      <h1>UseCopytoClipboardExample</h1>
      <button onClick={() => copyToClipboard(text)}>Copy</button>
      {state.value}
    </>
  )
}
