import { useRef } from "react";

/**
 * A React component that demonstrates the usage of useRef hook for DOM element references.
 * This component includes a div element and an input field with a button to focus the input.
 * @returns {JSX.Element} A React component with a div, input field, and a focus button
 */
export default function RefExample() {
  const ref = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  /**
   * Focuses the input element when called.
   * Uses the inputRef to access and focus the input DOM element.
   */
  function focusInput() {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  return (
    <>
      <div ref={ref}>Ref Example</div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Click</button>
    </>
  )
}
