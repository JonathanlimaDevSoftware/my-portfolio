import React from 'react';
import { motion } from 'framer-motion';

interface ProfileImageProps {
  imgSrc: string; // Recebe a URL da imagem como prop
  altText: string; // Recebe o texto alternativo da imagem
  class?: string
}

const ProfileImage: React.FC<ProfileImageProps> = ({ imgSrc, altText }) => {
  return (
    <motion.div
      className="profile-img"
      animate={{
        y: [0, -7, 0], // Movimento de subida e descida
      }}
      transition={{
        duration: 2, // Duração de cada ciclo
        repeat: Infinity, // Repetir a animação infinitamente
        repeatType: 'loop', // Animação contínua
        ease: 'easeInOut', // Suaviza a animação
      }}
    >
      <img src={imgSrc} alt={altText} />
    </motion.div>
  );
};

export default ProfileImage;
