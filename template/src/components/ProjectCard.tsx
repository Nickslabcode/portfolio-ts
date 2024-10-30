import { Project } from '../models/Project';

interface ProjectCardProps {
  project: Partial<Project>;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="card bg-base-100 w-80 shadow-xl">
      <figure>
        <img
          src={project.featuredImage}
          alt={`featured image for ${project.title}`}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{project.title}</h2>
        <p className="text-start">{project.description}</p>
        <div className="card-actions justify-end">
          {project.technologies?.map((technology: string) => (
            <div className="badge badge-outline" key={technology}>
              {technology}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
