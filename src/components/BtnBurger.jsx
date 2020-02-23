import React, { useState } from "react";

export function BtnBurger() {
  const [open, setOpen] = useState(false);
  return (
    <div className="App">
      <div
        className={`menu-btn ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <div className="menu-btn--burger" />
      </div>
    </div>
  );
}
