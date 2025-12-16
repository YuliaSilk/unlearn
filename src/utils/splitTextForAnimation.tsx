import React from "react";
import type {SplitTextProps} from "../types/utils";

const SplitTextForAnimation: React.FC<SplitTextProps> = ({text, className}) => {
 const words = text.split(" ");

 return (
  <span className={className}>
   {words.map((word, wordIndex) => (
    <span
     key={wordIndex}
     className="word-split-item"
     style={{display: "inline-block", overflow: "hidden"}}
    >
     {word.split("").map((char, charIndex) => (
      <span
       key={charIndex}
       className="char-split-inner"
       style={{display: "inline-block"}}
      >
       {char}
      </span>
     ))}
     {wordIndex < words.length - 1 && "\u00A0"}
    </span>
   ))}
  </span>
 );
};

export default SplitTextForAnimation;
