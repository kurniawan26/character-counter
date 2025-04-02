import { useEffect, useState } from 'react';

function readingTime(text, wpm = 200) {
  let words = text.split(/\s+/).length;
  return (words / wpm).toFixed(2);
}

function useDebounce(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

function letterCounters(sentence) {
  let letterCounts = {};

  for (let char of sentence) {
    if (/[a-zA-Z]/.test(char)) {
      letterCounts[char] = (letterCounts[char] || 0) + 1;
    }
  }

  return Object.entries(letterCounts)
    .map(([letter, count]) => ({
      letter,
      count,
    }))
    .sort((a, b) => b.count - a.count);
}

export { readingTime, useDebounce, letterCounters };
