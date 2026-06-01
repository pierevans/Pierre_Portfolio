import { useState } from "react";
import { motion } from "framer-motion";

interface Props {
  text: string;
}

const ScrambleText = ({ text }: Props) => {
  const [displayText, setDisplayText] = useState("");

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const startScramble = () => {
    let iteration = 0;

    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((_, index) => {
            if (index < iteration) return text[index];

            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("")
      );

      if (iteration >= text.length) clearInterval(interval);

      iteration += 1 / 3;
    }, 30);
  };

  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onViewportEnter={startScramble}
    >
      {displayText}
    </motion.span>
  );
};

export default ScrambleText;