import { Link } from 'react-router-dom';
import ThemeController from './ThemeController.tsx';
import { FaGithub } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-6">
        <Link to="/" className="font-semibold text-lg">
          Nikola Nenovski
        </Link>
        <Link to="/projects">Projects</Link>
        <a
          href="https://github.com/Nickslabcode/portfolio-ts"
          className="flex gap-2"
          target="_blank"
        >
          <FaGithub size={25} />
          Source
        </a>
      </div>
      <ThemeController />
    </div>
  );
};

export default Header;
