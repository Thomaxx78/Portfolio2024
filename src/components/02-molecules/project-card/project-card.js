import React from 'react';

const ProjectCard = ({ project, logo, date, content, stack, link }) => {
  // On choisit dynamiquement le conteneur
  const Container = link ? 'a' : 'div';

  // Props spécifiques au lien si `link` est défini
  const containerProps = link
    ? {
        href: link,
        target: '_blank',
        rel: 'noopener noreferrer',
      }
    : {};

  return (
    <Container
      {...containerProps}
      className="h-full relative p-6 border-l backdrop-brightness-75 backdrop-blur-md bg-[#010a25]/50 border-[#9fffd8] rounded shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex flex-col space-y-4 hover:translate-y-2 hover:ring-2 hover:ring-[#9fffd8] hover:ring-offset-2 min-h-[250px]"
    >
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
    </Container>
  );
};

export default ProjectCard;
