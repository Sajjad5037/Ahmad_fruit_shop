import { useState } from "react";

export default function Section({ title, content }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="section">
      <button className="section-header" onClick={() => setOpen(!open)}>
        <span>{open ? "▾" : "▸"}</span>
        <span>{title}</span>
      </button>

      {open && <div className="section-content">{content}</div>}
    </div>
  );
}
