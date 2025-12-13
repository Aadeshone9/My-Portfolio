"use client";

import React from "react";
import { cn } from "@/lib/utils";

type BlurInProps = {
  text: string;
  className?: string;
  stagger?: number;
  as?: React.ElementType;
};

const BlurIn: React.FC<BlurInProps> = ({
  text,
  className,
  stagger = 0.02,
  as = "h1",
}) => {
  const Tag = as;
  
  const words = text.split(" ");

  return (
    <Tag className={cn("flex flex-wrap", className)}>
      {words.map((word, wordIndex) => (
        <React.Fragment key={wordIndex}>
          <span className="flex">
            {word.split("").map((char, charIndex) => {
              const totalIndex = words.slice(0, wordIndex).join("").length + charIndex;
              return (
                <span
                  key={charIndex}
                  className="animate-blur-in"
                  style={{ animationDelay: `${totalIndex * stagger}s` }}
                >
                  {char}
                </span>
              );
            })}
          </span>
          {wordIndex < words.length - 1 && <span>&nbsp;</span>}
        </React.Fragment>
      ))}
    </Tag>
  );
};

export default BlurIn;
