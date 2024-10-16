import React, { useState } from 'react';
import Technologies from '../components/Technologies.tsx';
import Divider from '../components/Divider.tsx';
import { data } from '../data/data.ts';

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>(() => data);
  const [activeTechnologies, setActiveTechnologies] = useState<string[]>([]);

  return (
    <div className="flex flex-col items-center justify-center pt-10 gap-5">
      <Technologies
        activeTechnologies={activeTechnologies}
        setActiveTechnologies={setActiveTechnologies}
      />
      <div>Projects</div>
    </div>
  );
};

export default Projects;
