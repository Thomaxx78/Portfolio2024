import React, { Component } from 'react';
import Hero from '../04-sections/hero';
import Model3D from '../03-organisms/model3d';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollProgress: 0,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.initStarsCanvas(); // Initialise les étoiles
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const progress = Math.min(scrollY / windowHeight, 1);
    this.setState({ scrollProgress: progress });
  };

  initStarsCanvas() {
    const canvas = document.getElementById('aestheticCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let stars = [];
    const starCount = 120;

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        alpha: Math.random(),
        delta: (Math.random() * 0.02 + 0.005) * (Math.random() < 0.5 ? -1 : 1)
      });
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let star of stars) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#bb86fc';
        ctx.fill();

        star.alpha += star.delta;
        if (star.alpha <= 0 || star.alpha >= 1) star.delta *= -1;
      }

      requestAnimationFrame(draw);
    }

    draw();

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }

  render() {
    return (
      <section className="home h-screen h-screen-dvh sticky top-0 overflow-hidden z-0 relative">
        <canvas id="aestheticCanvas" className="absolute inset-0 w-full h-full -z-10" />
        <Model3D modelUrl="/models/oceanic.glb" scrollProgress={this.state.scrollProgress} />
        <Hero />
      </section>
    );
  }
}

export default Home;
