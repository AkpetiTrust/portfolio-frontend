import React, { useState, useEffect } from "react";
import { useInterval } from "../../utils/hooks";
import style from "./index.module.css";

function Typer() {
  const [words, setWords] = useState(
    "BUILD-DESIGN-CREATE-DEVELOP-ENGINEER-SOLVE PROBLEMS-"
  );
  const [word, setWord] = useState("");
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delay, setDelay] = useState(null);

  const delayAnimation = (delay) => {
    setTimeout(() => {
      setDelay(150);
    }, delay);
  };

  useEffect(() => {
    delayAnimation(1500);
  }, []);

  useInterval(() => {
    let deleteMarker = "-";
    let aboutToDelete = words[activeWordIndex] === deleteMarker;

    if (aboutToDelete) {
      setIsDeleting(true);
      setDelay(null);
      delayAnimation(1500);
    }
    if (isDeleting) {
      setWord((prevWord) => prevWord.slice(0, prevWord.length - 1));
    } else {
      setWord((prevWord) =>
        aboutToDelete ? prevWord : prevWord + words[activeWordIndex]
      );
      setActiveWordIndex((prevValue) => prevValue + 1);
    }
    if (!word) {
      setIsDeleting(false);
    }

    if (activeWordIndex === words.length - 1) {
      setActiveWordIndex(0);
    }
  }, delay);

  return <p className={style.typer}>I {word}</p>;
}

export default Typer;
