import { marked } from "marked";
import fs from "node:fs/promises";
// import { useEffect, useState } from "react";
import sanitizeHtml from "sanitize-html";

/*
function Page({ page }: { page: string }) {
  const [content, setContent] = useState('');
  useEffect(() => {
    fetch('/api/content/${page}')
      .then(response => response.text())
      .then(text => setContent(text));
  }, [page]);
  return <div>{sanitizeHtml(marked(content) as string)}</div>;
}*/


export default async function Page({ page }: { page: string }) {
  // const response = await fetch(`/api/content/${page}`);
  const content = await fs.readFile(`${page}.md`, 'utf-8');
  return <div>{sanitizeHtml(marked(content) as string)}</div>
}
