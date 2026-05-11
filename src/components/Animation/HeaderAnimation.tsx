import { motion } from "framer-motion";

interface Props {
  headline: string;
}

const HeaderAnimation = ({ headline }: Props) => {
  const words: string[] = headline.split(" ");

  return (
    <div className="header-animation" style={{ display: "inline-flex", gap: "15px", alignItems: "flex-start"}}>
      {words.map((word: string, i: number) => (
        <motion.h2
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          transition={{ duration: 0.3, delay: i * 0.1}}
          viewport={{once: true}}
          
          key={i}
        >
          {word}
        </motion.h2>
      ))}
    </div>
  );
};

export default HeaderAnimation;
