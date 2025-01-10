import React, { useState, useCallback, MouseEventHandler } from 'react';

interface ClickEvent {
  onClick:MouseEventHandler
}

// 子组件
const Child = React.memo(({ onClick }:ClickEvent) => {
  console.log('Child component rendered');
  return <button onClick={onClick}>Click Me</button>;
});

// 父组件
function UseCallBackExample() {
  const [count, setCount] = useState(0);

  // 使用 useCallback 缓存函数
  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []); // 依赖项为空数组，表示函数不会重新创建

  return (
    <div>
      <h1>Use CallBack Example</h1>
      <p>Count: {count}</p>
      <Child onClick={handleClick} />
    </div>
  );
}

export default UseCallBackExample;
