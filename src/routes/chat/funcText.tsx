import React, { useEffect, useState } from 'react';

export const TypingEffect: React.FC<{
  text: string;
  onComplete?: () => void;
}> = ({ text, onComplete }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let currentText = '';
    let index = 0;

    const interval = setInterval(() => {
      currentText = text.slice(0, index);
      setDisplayText(currentText);
      index++;

      if (index > text.length) {
        onComplete && onComplete();
        clearInterval(interval);
      }
    }, 110); // 타이핑 속도: 100ms 마다 한 글자씩

    return () => clearInterval(interval);
  }, [text]);

  return <>{displayText}</>;
};
