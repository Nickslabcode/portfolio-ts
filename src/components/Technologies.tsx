import React, { useState } from 'react';
import { data } from '../data/data.ts';
import { Project } from '../models/Project.ts';

interface TechnologiesProps {
  activeTechnologies: string[];
  setActiveTechnologies: React.Dispatch<React.SetStateAction<string[]>>;
}

const Technologies: React.FC<TechnologiesProps> = ({
  activeTechnologies,
  setActiveTechnologies,
}) => {
  const [technologies] = useState<string[]>(() =>
    data.reduce((acc: string[], currentProject: Project) => {
      currentProject.technologies.forEach((technology: string) => {
        if (!acc.includes(technology)) acc.push(technology);
      });
      return acc;
    }, [])
  );

  const handleTechnologyToggle = (value: string): void => {
    setActiveTechnologies(
      activeTechnologies.includes(value)
        ? activeTechnologies.filter(tech => tech !== value)
        : [...activeTechnologies, value]
    );
  };

  return (
    <div className="w-3/4 text-start">
      {technologies.map(tech => (
        <div
          key={tech}
          className={`m-1 cursor-pointer badge ${
            activeTechnologies.includes(tech)
              ? 'badge-primary'
              : 'badge-outline'
          }`}
          onClick={() => {
            handleTechnologyToggle(tech);
          }}
        >
          {tech}
        </div>
      ))}
    </div>
  );
};

export default Technologies;
