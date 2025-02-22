import { motion } from "framer-motion";

const Sobre = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>Bem-vindo ao meu Sobre!</h1>
    </motion.div>
  );
};

export default Sobre;