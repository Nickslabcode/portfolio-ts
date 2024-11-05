import { useNavigate } from 'react-router-dom';
import { BrandColor } from '../enums/BrandColor.enum';
import { ButtonVariant } from '../enums/ButtonVariant.enum';
import Button from '../hoc/Button';
import { Project } from '../models/Project';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Partial<Project>;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="card bg-base-100 w-80 shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <figure>
        <img
          src={project.featuredImage}
          alt={`featured image for ${project.title}`}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{project.title}</h2>
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
    </motion.div>
  );
};

export default ProjectCard;
