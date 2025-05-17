import React, { useEffect, useRef } from 'react';
import TypeIt from 'typeit';

const textContent =
  'I craft websites that align with your brand and engage your audience – creating meaningful and memorable experiences.';

const Paragraph = () => {
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      new TypeIt(textRef.current, {
        speed: 50,
        cursorChar: '|',
        waitUntilVisible: true,
      })
        .type(textContent)
        .go();
    }
  }, []);

  return (
    <div className="relative text-center md:text-start md:w-1/2 text-lg text-white rounded-lg leading-relaxed mb-8 md:mb-0">
      <p className="invisible whitespace-pre-wrap">{textContent}</p>
      <p
        ref={textRef}
        className="absolute top-0 left-0 whitespace-pre-wrap"
      ></p>
    </div>
  );
};

export default Paragraph;
