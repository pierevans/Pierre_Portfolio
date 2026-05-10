import { motion } from "framer-motion";

interface Props {
  headline: string;
}

const HeaderAnimation = ({ headline }: Props) => {
  const words: string[] = headline.split(" ");

  return (
    <div>
      {words.map((word: string, i: number) => (
        <motion.h1 initial={{}} animate={{}} transition={{}} key={i}>
          {word}
        </motion.h1>
      ))}
    </div>
  );
};

export default HeaderAnimation;
