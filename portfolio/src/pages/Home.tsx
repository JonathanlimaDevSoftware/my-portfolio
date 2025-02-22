import { motion } from "framer-motion";
import Avatar from '../assets/img/profile04.jpeg'
import DownloadButton from "../components/button/FileDownlod";
const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <section id="intro" className="intro">
        <div className="container">
          <h1>Olá, Bem-vindo</h1>
          <p>
            Desenvolvedor Full Stack apaixonado por criar experiências digitais incríveis.
          </p>
          
          <p>
            Tenho experiência em HTML, CSS, JavaScript, React, TypeScript e muito mais.
          </p>
          
          <DownloadButton fileName={"programador-currículo"} filePath={"../assets/img/profile04.jpeg"}/>
        </div>

        <div className="profile-img">
          
          <img src={Avatar} alt="foto programador" />
        </div>

      </section>
    
    
    
    </motion.div>
  );
};

export default Home;
