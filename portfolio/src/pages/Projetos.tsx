import { motion } from "framer-motion";
import { Cards } from "../components/cards/Cards";

const Projetos = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      
      
      <Cards></Cards>


    </motion.div>
  );
};

export default Projetos;
