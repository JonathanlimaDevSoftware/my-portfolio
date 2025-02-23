import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

interface SocialIconsProps {
  githubUrl: string;
  linkedinUrl: string;
  whatsappUrl: string;
  gmailUrl: string;
}

const SocialIcons: React.FC<SocialIconsProps> = ({
  githubUrl,
  linkedinUrl,
  whatsappUrl,
  gmailUrl,
}) => {
  return (
    <div className="social-icons">
      <motion.a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="icon"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          delay: 0.2,  // Delay para alternar o brilho entre os ícones
        }}
        style={{ color: "#64ffda" }}
      >
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </motion.a>
      <motion.a
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="icon"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          delay: 0.4,  // Delay para alternar o brilho entre os ícones
        }}
        style={{ color: "#64ffda" }}
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </motion.a>
      <motion.a
        href={`https://wa.me/${whatsappUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="icon"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          delay: 0.6,  // Delay para alternar o brilho entre os ícones
        }}
        style={{ color: "#64ffda" }}
      >
        <FontAwesomeIcon icon={faWhatsapp} size="2x" />
      </motion.a>
      <motion.a
        href={`mailto:${gmailUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="icon"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          delay: 0.8,  // Delay para alternar o brilho entre os ícones
        }}
        style={{ color: "#64ffda" }}
      >
        <FontAwesomeIcon icon={faEnvelope} size="2x" />
      </motion.a>
    </div>
  );
};

export default SocialIcons;
