import { createPortal } from "react-dom";
/**
 * 用于将Componet 移动到另一个 DOM 节点
 * createPortal(children, container)
 * Modals, dropdown menus, and tooltips
 * */
export default function PortalsExample() {
  return (
    <div>
      <h1>Portals Example</h1>
      <hr />
      {
        createPortal(<h2>Portal Content</h2>, document.body)
      }
    </div>
  );
}
