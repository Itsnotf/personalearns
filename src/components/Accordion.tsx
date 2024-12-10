import React, { useState } from "react";
import { marked } from "marked";

interface AccordionProps {
  title: string;
  content: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-300">
      <button
        className="flex justify-between items-center w-full py-3 text-left focus:outline-none"
        onClick={toggleAccordion}
      >
        <span className="text-lg font-medium text-primary">{title}</span>
        <span className="text-gray-500">{isOpen ? "−" : "+"}</span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[100vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className="text-base my-4 text-justify"
          dangerouslySetInnerHTML={{ __html: marked.parse(content) }}
        />
      </div>
    </div>
  );
};

export default Accordion;
