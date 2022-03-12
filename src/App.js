import "./styles.css";
import React, { useState } from "react";
import Switch from "react-switch";

export default function App() {
  const [isToggled, setIsToggled] = useState(false);
  const [theme, setTheme] = useState("dark");

  function handleToggle() {
    setIsToggled((prevState) => !prevState);
    setTheme((mode) => (mode === "dark" ? "light" : "dark"));
  }

  const selectedTheme = theme === "light" ? "dark" : "light";
  return (
    <div className={`app ${selectedTheme}-theme`}>
      <Switch
        onChange={handleToggle}
        checked={isToggled}
        checkedIcon={false}
        uncheckedIcon={false}
      />
      <span> Switch {theme}</span>
      <h1>How fast can you type?</h1>
      <textarea
        className={`textbox-${selectedTheme}`}
        placeholder="Start typing!"
      />
      <h4>Time remaining: 0</h4>
      <button className={`btn-${selectedTheme}`}>Start</button>
      <h1>Word count: 0</h1>
    </div>
  );
}
