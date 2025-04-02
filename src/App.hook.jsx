import { useEffect, useMemo, useState } from 'react';
import { letterCounters, readingTime, useDebounce } from './utils';

const useApp = () => {
  const [text, setText] = useState('');
  const textDounce = useDebounce(text, 500);

  const readTime = useMemo(() => {
    const time = readingTime(textDounce);
    return time;
  }, [textDounce]);

  const totalCharacters = useMemo(() => {
    return textDounce.length;
  }, [textDounce]);

  const totalWords = useMemo(() => {
    const words = textDounce.split(' ').filter((word) => word.length > 0);
    return words.length;
  }, [textDounce]);

  const totalSentences = useMemo(() => {
    const sentences = textDounce
      .split(/[.!?]/)
      .filter((sentence) => sentence.length > 0);
    return sentences.length;
  }, [textDounce]);

  const letterDensity = useMemo(() => {
    const letterCounts = letterCounters(textDounce);
    const totalLetters = letterCounts.reduce(
      (sum, { count }) => sum + count,
      0
    );

    const density = letterCounts.map(({ letter, count }) => ({
      letter,
      density: (count / totalLetters) * 100,
      totalLetters: count,
    }));

    return density;
  }, [textDounce]);

  useEffect(() => {
    document.documentElement.classList.toggle(
      'dark',
      localStorage.theme === 'dark' ||
        (!('theme' in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
    );
  }, []);

  return {
    text,
    setText,
    readTime,
    totalCharacters,
    totalWords,
    totalSentences,
    letterDensity,
  };
};

export default useApp;
