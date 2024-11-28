import { ErrorBoundary } from "react-error-boundary"
/*
* 通常用于错误边界
*
* */
function Fallback({ error }: { error: Error }) {
  return (
    <div>Something went wrong,{error.message}</div>
  )
}

export default function ErrorBoundaryExample() {
  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <div>Error Boundary Example</div>
    </ErrorBoundary>
  )
}
