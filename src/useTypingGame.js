import { useState, useEffect, useRef } from "react";

export function useTypingGame({ defaultTime }) {
  const [text, setText] = useState("");
  const [startTime, setStartTime] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(defaultTime);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);

  const textBoxRef = useRef(null);

  function handleText(e) {
    const { value } = e.target;
    setText(value);
  }

  function handleStartTime(e) {
    const { value } = e.target;
    setStartTime(value);
  }

  function getWordCount(textInput) {
    const words = textInput.trim().split(" ");
    return words.filter((word) => word !== "").length;
  }

  function start() {
    setText("");
    setWordCount(0);
    setTimeRemaining(startTime > 0 ? startTime : defaultTime);
    setIsTimeRunning(true);
  }

  function end() {
    setWordCount(getWordCount(text));
    setIsTimeRunning(false);
    setTimeRemaining(startTime > 0 ? startTime : defaultTime);
  }

  function startTimer() {
    textBoxRef.current.focus();
    setTimeout(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);
  }

  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
      startTimer();
    } else {
      end();
    }
  }, [timeRemaining, isTimeRunning]);

  return {
    text,
    handleText,
    startTime,
    handleStartTime,
    timeRemaining,
    isTimeRunning,
    wordCount,
    start,
    textBoxRef
  };
}
