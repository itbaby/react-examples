import React from "react";

// 用于显示文章的标题和内容
function Detail({ title, content }: { title: string; content: string }) {
  return (
    <>
      <p>{content}</p>
      <div>Detail {title}</div>
    </>
  )
}
// 用于显示文章
function Article({ title, content, active }: { title: string; content: string; active?: boolean }) {
  return (
    <>
      <p>{content}</p>
      {active && <p>Active</p>}
      <hr />
      <div>Article {title}</div>
      <Detail title={title} content={content} />
      <Detail {...{ title, content }} />
    </>
  )
}
// 用于显示列表
function List({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ul>
        {children}
      </ul>
    </>
  )
}
// 用于显示复杂的列表
function CList({ title, footer = <div>Default Footer</div>, children }: { title: string; footer?: React.ReactNode; children: React.ReactNode }) {
  return (
    <>
      <h5>{title}</h5>
      <ol>
        {children}
      </ol>
      {footer}
    </>
  )
}

export default function ArticleExample() {
  const article = { title: "Hello", content: "World", active: true };
  return (
    <>
      <Article {...article} />
      <Article title="World" content="Hello" />
      <div>ArticleExample</div>
      <hr />
      <List>
        <li>Item 1</li>
        <li>Item 2</li>
      </List>
      <hr />
      <CList title="Hello" footer={<div>Footer</div>}>
        <li>Item 1</li>
      </CList>
    </>
  );
}
