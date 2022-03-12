import "./styles.css";
import React, { useState } from "react";
import Switch from "react-switch";
import { useTypingGame } from "./useTypingGame";

export default function App() {
  const [isToggled, setIsToggled] = useState(false);
  const [theme, setTheme] = useState("dark");
  const {
    text,
    handleText,
    timeRemaining,
    isTimeRunning,
    wordCount,
    start,
    textBoxRef
  } = useTypingGame({ startTime: 5 });

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
        onChange={handleText}
        value={text}
        disabled={!isTimeRunning}
        ref={textBoxRef}
      />
      <h4>Time remaining: {timeRemaining}</h4>
      <button
        className={`btn-${selectedTheme}`}
        onClick={start}
        disabled={isTimeRunning}
      >
        Start
      </button>
      <h1>Word count: {wordCount}</h1>
    </div>
  );
}
