import { marked } from "marked";
import sanitizeHtml from "sanitize-html";

function ServerComponentExample() {
  const html = sanitizeHtml(marked("Hello *Markdown*"));
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}


function Node() {
  return <div><ServerComponentExample /></div>;
}
//组件支持实时更新
//不能使用useEffect,useState, 用于展示服务端渲染
//props 必须
