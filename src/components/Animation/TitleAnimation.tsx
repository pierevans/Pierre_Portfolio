import { motion } from "framer-motion";

interface Props {
  title: string;
}

const TitleAnimation = ({ title }: Props) => {
  const words: string[] = title.split(" ");

  return (
    <div
      className="header-animation"
      style={{ display: "inline-flex", gap: "10px", alignItems: "flex-start" }}
    >
      {words.map((word: string, i: number) => (
        <motion.h3
          initial={{ opacity: 0, y: i % 2 ? -30 : 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: i * 0.1 }}
          viewport={{ once: true }}
          key={i}
        >
          {word}
        </motion.h3>
      ))}
    </div>
  );
};

export default TitleAnimation;
