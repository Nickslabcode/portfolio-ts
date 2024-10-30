import React, { useState } from 'react';
import Technologies from '../components/Technologies.tsx';
import { data } from '../data/data.ts';
import { Project } from '../models/Project.ts';
import ProjectCard from '../components/ProjectCard.tsx';
import Divider from '../components/Divider.tsx';

const Projects: React.FC = () => {
  const [projects, _] = useState<Project[]>(() => data);
  const [activeTechnologies, setActiveTechnologies] = useState<string[]>([]);

  return (
    <div className="flex flex-col items-center justify-center pt-10 gap-5">
      <Divider value="Work" />
      <Technologies
        activeTechnologies={activeTechnologies}
        setActiveTechnologies={setActiveTechnologies}
      />
      <div className="w-3/4 flex flex-wrap justify-center xl:justify-start gap-3">
        {projects.map((project: Project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
