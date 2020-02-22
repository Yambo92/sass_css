import React, {useState} from "react";
import "./styles.scss";

export default function App() {
  const [open, setOpen] = useState(false)

  return (
    <div className="App">
      <div className={`menu-btn ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
        <div className="menu-btn--burger"></div>
      </div>
    </div>
  );
}
