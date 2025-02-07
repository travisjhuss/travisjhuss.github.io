'use client';
import { useEffect, useState } from 'react';

interface TextFadeInOutProps {
  text: string;
  delay?: number;
}

const TextFadeInOut = ({ text, delay = 100 }: TextFadeInOutProps) => {
  const [visibleLetters, setVisibleLetters] = useState<string[]>([]);

  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setVisibleLetters((prev) => [...prev, text[currentIndex]]);
        currentIndex++;
      } else {
        // Reset the animation after all letters are shown
        setTimeout(() => {
          setVisibleLetters([]);
          currentIndex = 0;
        }, delay * text.length); // Wait for all letters to fade out before restarting
      }
    }, delay);

    return () => clearInterval(interval);
  }, [text, delay]);

  return (
    <div className="flex flex-wrap space-x-1">
      {visibleLetters.map((letter, index) => (
        <span
          key={index}
          className="opacity-0 animate-fade-in-out"
          style={{ animationDelay: `${index * delay}ms` }}
        >
          {letter}
        </span>
      ))}
    </div>
  );
};

export default TextFadeInOut;