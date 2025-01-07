import { useNavigate } from 'react-router-dom';
import { BrandColor } from '../enums/BrandColor.enum';
import { ButtonVariant } from '../enums/ButtonVariant.enum';
import Button from '../hoc/Button';
import { Project } from '../models/Project';
import MotionContainer from '../hoc/MotionContainer';

interface ProjectCardProps {
  project: Partial<Project>;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const navigate = useNavigate();

  return (
    <MotionContainer className="card bg-base-100 w-fit shadow-xl">
      <figure>
        <img
          src={project.featuredImage}
          alt={`featured image for ${project.title}`}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{project.title}</h2>
        <div className="text-start flex gap-2">
          <span className="text-sm text-gray-500">{project.date}</span>
          {project.inProgress && (
            <span className="badge badge-warning badge-sm font-semibold">
              In Progress
            </span>
          )}
        </div>
        <p className="text-start">{project.description}</p>
        <div className="card-actions justify-start">
          {project.technologies?.map((technology: string) => (
            <div className="badge badge-outline" key={technology}>
              {technology}
            </div>
          ))}
        </div>
        <div className="flex justify-start mt-2">
          <Button
            color={BrandColor.PRIMARY}
            variant={ButtonVariant.PRIMARY}
            handleClick={() => navigate(`${project.slug!.split('/')[1]}`)}
          >
            Details &rarr;
          </Button>
        </div>
      </div>
    </MotionContainer>
  );
};

export default ProjectCard;
