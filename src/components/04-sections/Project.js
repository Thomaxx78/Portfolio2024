import React, { useState, useEffect, useRef } from 'react';
import { Flip } from 'gsap/Flip';
import { gsap } from 'gsap';

gsap.registerPlugin(Flip);

const logs = [
  {
    date: 'Day 42 - 15.04.2025',
    project: 'MBDA',
    type: 'pro',
    content: "Creation of the main site for MBDA, Europe's leading missile producer. Integration of complex components and animations. Focus on accessibility, SEO, and eco-design. Technologies used: Twig, Tailwind, Drupal.",
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgoarASK9ojgiqRS5tVIz3SHY9n9Ks8M2e9Q&s',
    link: 'https://www.mbda-systems.com/',
    stack: [
      'https://www.svgrepo.com/show/374142/twig.svg',
      'https://www.svgrepo.com/show/374118/tailwind.svg',
      'https://cdn.worldvectorlogo.com/logos/drupal.svg',
      'https://www.svgrepo.com/show/448226/gitlab.svg',
    ],
  },
  {
    date: 'Day 57 - 22.04.2025',
    project: 'FRANCE VALLEY',
    type: 'pro',
    content: "Creation of a complete landing page for the company using WordPress/Elementor, including the website mockup.",
    logo: 'https://media.licdn.com/dms/image/v2/D4E0BAQHk3dVGftNIZw/company-logo_200_200/company-logo_200_200/0/1727123157392/francevalley_logo?e=2147483647&v=beta&t=rH8FS5iogKKcMa41L15wV16J2xr2OaRhnGePnbrReeY',
    link: 'https://france-valley.de',
    stack: [
      'https://www.svgrepo.com/show/452136/wordpress.svg',
      'https://www.svgrepo.com/show/452202/figma.svg',
    ],
  },
  {
    date: 'Day 57 - 22.04.2025',
    project: 'NEXTON',
    type: 'pro',
    content: "Development of a web scraping script to collect data from various online sources. The script stores the gathered data in a MongoDB database. Additionally, a web interface was built to display and sort the data, providing users with an easy-to-navigate platform for managing and analyzing the scraped content.",
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSctWxUB5bSOfdOg8HA9jmE1-MNwDqGXeNJLw&s',
    stack: [
      'https://www.svgrepo.com/show/452091/python.svg',
      'https://www.svgrepo.com/show/331488/mongodb.svg',
      'https://www.svgrepo.com/show/355140/node.svg',
      'https://www.svgrepo.com/show/374118/tailwind.svg',
    ],
  },
  {
    date: 'Day 73 - 04.05.2025',
    project: 'COQUE DE NACRE',
    type: 'pro',
    content: "Development of an internal e-commerce website. Full autonomy in the development process, with the creation of complex and custom designs. Focused on providing a seamless user experience with an intuitive interface and optimized performance for the company’s internal sales platform.",
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDKRoFp-8Avgx_ozqsrQEjdCQxHj5zZ8vMbQ&s',
    stack: [
      'https://www.svgrepo.com/show/374142/twig.svg',
      'https://www.svgrepo.com/show/374118/tailwind.svg',
      'https://cdn.worldvectorlogo.com/logos/drupal.svg',
      'https://www.svgrepo.com/show/448226/gitlab.svg',
    ],
  },
  {
    date: 'Day 73 - 04.05.2025',
    project: 'FIDESIO',
    type: 'pro',
    content: "Complete overhaul of the website for the agency I work at. Focused on improving accessibility and SEO, with the goal of enhancing user experience and search engine visibility. The redesign includes a more modern interface, streamlined navigation, and optimized performance to support both user engagement and search rankings.",
    logo: 'https://media.licdn.com/dms/image/v2/D4E0BAQGACBmVMmI_cQ/company-logo_200_200/company-logo_200_200/0/1733135514521/fidesio_logo?e=2147483647&v=beta&t=RMWKoBGWAIsOIGT6j8h7DPcik1pELFMI9ct43xbrc0M',
    link: 'https://fidesio.com/',
    stack: [
      'https://www.svgrepo.com/show/374142/twig.svg',
      'https://www.svgrepo.com/show/374118/tailwind.svg',
      'https://www.svgrepo.com/show/448226/gitlab.svg',
    ],
  },
  {
    date: 'Day 57 - 22.04.2025',
    project: 'MAIRIE DE CLAMART',
    type: 'school',
    content: "As a Project Manager, I led a team of 11 people in collaboration with the local government to address a critical issue: raising awareness among residents about adopting responsible technological habits to reduce environmental impact. This project involved close communication with the client to ensure the development of effective strategies that would promote eco-friendly technology usage within the community.",
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ9T9JmBZW13YY1n8cA4nNPLNeA8HGDNmKUA&s',
    link: 'https://github.com/TobogganDev/BAP-14_Clamart/',
    stack: [
    ],
  },
  {
    date: 'Day 57 - 22.04.2025',
    project: 'FICTIONAL WEB AGENCY',
    type: 'school',
    content: "Creation of a website for a fictional agency using React, Next.js, and Supabase. The project involved building a fully functional, modern website with dynamic content",
    logo: 'https://storage.letudiant.fr/osp/cards/800/Logo-IIM-2024-fond-orange-1-241211041343.png',
    link: 'https://storage.letudiant.fr/osp/cards/800/Logo-IIM-2024-fond-orange-1-241211041343.png',
    stack: [
      'https://www.svgrepo.com/show/452092/react.svg',
      'https://www.svgrepo.com/show/452202/figma.svg',
      'https://www.svgrepo.com/show/475654/github-color.svg',
    ],
  },
  {
    date: 'Day 57 - 22.04.2025',
    project: 'REACT NATIVE EVENT APP',
    type: 'school',
    content: "Creation of a React native application to manage events, including their location, dates, and details. The app uses Supabase for authentication, event management, and tracking user participation in events. Push notifications are implemented to remind users of upcoming events and updates, ensuring they stay informed about the events they are joining.",
    logo: 'https://storage.letudiant.fr/osp/cards/800/Logo-IIM-2024-fond-orange-1-241211041343.png',
    stack: [
      'https://cdn.worldvectorlogo.com/logos/react-2.svg',
      'https://www.svgrepo.com/show/475654/github-color.svg',
    ],
  },
  {
    date: 'Day 57 - 22.04.2025',
    project: 'SWIFT UI TASK APP',
    type: 'school',
    content: "Creation of a Swift application to manage events, including their location, dates, and details. The app uses Supabase for authentication, event management, and tracking user participation in events. Push notifications are implemented to remind users of upcoming events and updates, ensuring they stay informed about the events they are joining.",
    logo: 'https://storage.letudiant.fr/osp/cards/800/Logo-IIM-2024-fond-orange-1-241211041343.png',
    stack: [
      'https://www.svgrepo.com/show/374112/swift.svg',
      'https://www.svgrepo.com/show/475654/github-color.svg',
    ],
  },
  {
    date: 'Day 57 - 22.04.2025',
    project: 'COVER CANVAS',
    type: 'school',
    content: "Creation of a website that generates covers using HTML5 Canvas. The project draws inspiration from the iconic covers of Daft Punk, implementing complex designs and animations. Users can interact with the site to create their own covers with dynamic visual effects, offering a personalized and engaging experience.",
    logo: 'https://storage.letudiant.fr/osp/cards/800/Logo-IIM-2024-fond-orange-1-241211041343.png',
    stack: [
      'https://www.svgrepo.com/show/452045/js.svg',
      'https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg',
      'https://www.svgrepo.com/show/475654/github-color.svg',
    ],
  },
];

const LogEntry = ({ date, project, content, logo, link, stack }) => {
  return (
    <div className="h-full relative p-6 border-l backdrop-brightness-75 backdrop-blur-md bg-[#010a25]/50 border-[#9fffd8] rounded shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex flex-col space-y-4 hover:translate-y-2 hover:ring-2 hover:ring-[#9fffd8] hover:ring-offset-2 min-h-[250px]">
      <div className="flex items-center space-x-4">
        <img
          src={logo}
          alt={`${project} logo`}
          className="w-12 h-12 rounded-full border-2 border-[#9fffd8] hover:scale-110 transition-all"
        />
        <div>
          <div className="text-sm text-[#88ffcc] tracking-wider">{date}</div>
          <h2 className="text-lg md:text-xl font-semibold text-[#cafff4]">{project}</h2>
        </div>
      </div>

      <p className="text-sm text-[#b6eac9] whitespace-pre-wrap">{content}</p>

      <div className="flex flex-wrap items-center gap-2 mt-4">
        {stack.map((tech, idx) => (
          <img key={idx} src={tech} alt="tech" className="h-6 w-6 object-contain" />
        ))}
      </div>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-sm text-[#9fffd8] underline underline-offset-4 decoration-dotted hover:text-[#cafff4] transition duration-200"
        >
          → Access the project
        </a>
      )}
    </div>
  );
};

const DevLogbook = () => {
  const [filter, setFilter] = useState('all');
  const containerRef = useRef(null);

  const filteredLogs = logs.filter(log => {
    if (filter === 'all') return true;
    return log.type === filter;
  });

  useEffect(() => {
    const items = Array.from(containerRef.current.querySelectorAll('.log-entry'));
    const state = Flip.getState(items);

    Flip.from(state, {
      duration: 0.7,
      scale: true,
      ease: 'power1.inOut',
      stagger: 0.08,
      absolute: true,
      onEnter: elements => gsap.fromTo(elements, { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 0.6 }),
      onLeave: elements => gsap.to(elements, { opacity: 0, scale: 0, duration: 0.6, onComplete: () => elements.forEach(element => element.remove()) }),
    });
  }, [filter]);

  return (
    <section id="Projects" className="relative z-10 min-h-screen text-[#d2f0d2] font-mono p-6 md:p-12 overflow-hidden mt-20 pt-40">
      <h1 className="text-3xl md:text-4xl text-center mb-12 tracking-widest text-[#9fffd8]">📔 Development Logbook</h1>

      {/* Filter buttons */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
      <button
        onClick={() => setFilter('all')}
        className={`z-10 px-6 py-2 rounded-full border transition-all ${
          filter === 'all' ? 'bg-[#9fffd8] text-[#0b0f14]' : 'border-[#9fffd8] text-[#9fffd8]'
        } hover:bg-[#9fffd8] hover:text-[#0b0f14]`}
      >
        All
      </button>
      <button
        onClick={() => setFilter('pro')}
        className={`z-10 px-6 py-2 rounded-full border transition-all ${
          filter === 'pro' ? 'bg-[#9fffd8] text-[#0b0f14]' : 'border-[#9fffd8] text-[#9fffd8]'
        } hover:bg-[#9fffd8] hover:text-[#0b0f14]`}
      >
        Professional
      </button>
      <button
        onClick={() => setFilter('school')}
        className={`z-10 px-6 py-2 rounded-full border transition-all ${
          filter === 'school' ? 'bg-[#9fffd8] text-[#0b0f14]' : 'border-[#9fffd8] text-[#9fffd8]'
        } hover:bg-[#9fffd8] hover:text-[#0b0f14]`}
      >
        School
      </button>
    </div>


      <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mx-auto">
        {filteredLogs.map((log, index) => (
          <div key={index} className="log-entry">
            <LogEntry {...log} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default DevLogbook;
