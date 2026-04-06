import React, { useState, useEffect } from "react";

const TypingText = ({ texts = ["Hello, I'm John!", "I'm a Frontend Developer."] , speed = 150 }) => {
  const [index, setIndex] = useState(0); // current text index
  const [displayedText, setDisplayedText] = useState(""); // text to show
  const [charIndex, setCharIndex] = useState(0); // current character index

  useEffect(() => {
    const typingTimeout = setTimeout(() => {
      setDisplayedText((prev) => prev + texts[index][charIndex]);
      setCharIndex((prev) => prev + 1);
    }, speed);

    // when text fully typed, move to next
    if (charIndex === texts[index].length) {
      clearTimeout(typingTimeout);
      const nextTimeout = setTimeout(() => {
        setCharIndex(0);
        setDisplayedText("");
        setIndex((prev) => (prev + 1) % texts.length); // loop back
      }, 2000); // pause before next text
      return () => clearTimeout(nextTimeout);
    }

    return () => clearTimeout(typingTimeout);
  }, [charIndex, index, texts, speed]);

  return (
    <h1 className="typing-text">{displayedText}<span className="cursor">|</span></h1>
  );
};

export default TypingText;
