import React from 'react';
import { Project } from '../models/Project';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const ProjectOverview: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="flex flex-col gap-2 mb-5">
      <p className="my-2 text-justify">&emsp;{project.overview}</p>
      <div className="flex gap-3 items-center">
        <span className="text-sm items-center bg-warning text-primary-content py-0.5 px-1 font-semibold rounded-md mr-2">
          Links
        </span>
        <a
          href={project.githubLink}
          className="flex gap-1 link link-primary text-sm font-semibold"
          target="_blank"
        >
          <FaGithub size={20} />
          Source
        </a>
        <a
          href={project.demo}
          className="flex gap-1 link link-primary text-sm font-semibold"
          target="_blank"
        >
          <FaExternalLinkAlt size={18} />
          Live demo
        </a>
      </div>
      <div className="flex gap-3 items-center">
        <span className="text-sm items-center bg-warning text-primary-content py-0.5 px-1 font-semibold rounded-md mr-2">
          Stack
        </span>
        <p>{project.technologies.join(', ')}</p>
      </div>
    </div>
  );
};

export default ProjectOverview;
