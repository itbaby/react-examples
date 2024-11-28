import { Suspense } from "react";
/*
 *通常用于异步加载组件
 */
export default function SuspenseExample() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <div>Suspense Example</div>
      </Suspense>
    </>
  )
}
