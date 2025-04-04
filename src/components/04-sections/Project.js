import React, { useState, useEffect } from 'react';

const Project = () => {
  const [angle, setAngle] = useState(0);  // État pour l'angle
  const radius = 100;  // Rayon du cercle
  const centerX = 200; // Position du centre du cercle en X
  const centerY = 200; // Position du centre du cercle en Y
  const speed = 0.05;  // Vitesse de rotation

  // Utilisation d'un effet pour gérer l'animation
  useEffect(() => {
    const animate = () => {
      // Mise à jour de l'angle
      setAngle(prevAngle => prevAngle + speed);
    };

    // Fonction d'animation
    const animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame); // Nettoyage de l'animation
  }, [angle]);  // Redémarre l'animation quand l'angle change

  // Calcul des coordonnées de l'objet en fonction de l'angle
  const x = centerX + radius * Math.cos(angle);
  const y = centerY + radius * Math.sin(angle);

  return (
    <div
      style={{
        position: 'absolute',
        top: `${y}px`,
        left: `${x}px`,
        width: '20px',
        height: '20px',
        backgroundColor: 'red',
        borderRadius: '50%', // Pour rendre l'objet circulaire
      }}
    ></div>
  );
};

export default Project;
