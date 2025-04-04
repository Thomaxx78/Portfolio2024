import React, { Component } from 'react';
import Hero from '../04-sections/hero';
import Star from '../scripts/Stars';

class Home extends Component {

    generateStars(num) {
        const stars = [];
        
        while (stars.length < num) {
          const x = Math.random() * (window.innerWidth - 30);
          const y = Math.random() * (window.innerHeight - 30);
          const newStar = { x, y };
          
          const isFarEnough = stars.every((star) => {
            const distance = Math.sqrt(
              Math.pow(newStar.x - star.x, 2) + Math.pow(newStar.y - star.y, 2)
            );
            return distance >= 50;
          });
    
          if (isFarEnough) {
            stars.push(newStar);
          }
        }
    
        return stars;
      }

  render() {
    // const starCount = 25;
    // const stars = this.generateStars(starCount);
    return (
        <section className="home h-screen sticky top-0 overflow-hidden z-0"> {/* Ajout de z-0 */}
          {/* <div className="absolute inset-0 -z-10">
            {stars.map((position, index) => (
              <Star key={index} position={position} />
            ))}
          </div> */}
          <Hero />
        </section>
    );
  }
}

export default Home;

