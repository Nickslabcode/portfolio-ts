import React, { useState } from 'react';
import { data } from '../data/data.ts';
import { Project } from '../models/Project.ts';
import ProjectCard from '../components/ProjectCard.tsx';
import Divider from '../components/Divider.tsx';
import Footer from '../components/Footer.tsx';
import MotionContainer from '../hoc/MotionContainer.tsx';

const Projects: React.FC = () => {
  const [projects, _] = useState<Project[]>(() => data);

  return (
    <MotionContainer className="flex flex-col items-center justify-center pt-10 gap-5 mt-5">
      <Divider value="Work" />
      <div className="w-3/4 grid grid-cols-1 lg:grid-cols-2 justify-between gap-3">
        {projects.map((project: Project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
      <Footer />
    </MotionContainer>
  );
};

export default Projects;
