import { useEffect, useState } from "react";

export function useTypedText(words: string[], typingSpeed = 100, pause = 1200) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [text, setText] = useState("");
  
  useEffect(() => {
    if (index === words.length) setIndex(0);

    if (!deleting && subIndex === words[index].length) {
      setTimeout(() => setDeleting(true), pause);
      return;
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) =>
        deleting ? prev - 1 : prev + 1
      );
      setText(words[index].substring(0, subIndex));
    }, deleting ? typingSpeed / 2 : typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, words, typingSpeed, pause]);

  useEffect(() => {
    setText(words[index].substring(0, subIndex));
  }, [subIndex, index, words]);

  return text;
} 