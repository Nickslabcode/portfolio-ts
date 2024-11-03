import { Link } from 'react-router-dom';
import ThemeController from './ThemeController.tsx';
import { FaGithub } from 'react-icons/fa';
import { useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import { IoClose } from 'react-icons/io5';

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleHamburgerClick = () => {
    setIsExpanded(prevValue => !prevValue);
  };

  return (
    <div className="flex justify-between backdrop-blur-md fixed left-0 right-0 2xl:left-1/4 2xl:right-1/4 z-10 top-0 py-3 px-8">
      <div className="flex items-center gap-6">
        <Link to="/" className="font-semibold text-lg hover:text-primary">
          Nikola Nenovski
        </Link>
        <div className="gap-6 hidden md:flex">
          <Link to="/projects" className="link-hover">
            Projects
          </Link>
          <a
            href="https://github.com/Nickslabcode/portfolio-ts"
            className="flex gap-2 link-hover"
            target="_blank"
          >
            <FaGithub size={25} />
            Source
          </a>
        </div>
      </div>
      <div className="flex gap-2">
        <details
          className="md:hidden dropdown dropdown-end"
          onClick={handleHamburgerClick}
        >
          <summary className="btn btn-ghost">
            {isExpanded ? <IoClose size={25} /> : <IoMenu size={25} />}
          </summary>
          {isExpanded && (
            <ul className="menu dropdown-content bg-base-200 rounded-box z-[1] w-52 p-2 shadow">
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <a
                  href="https://github.com/Nickslabcode/portfolio-ts"
                  className="flex gap-2"
                  target="_blank"
                >
                  Source
                  <FaGithub size={25} />
                </a>
              </li>
            </ul>
          )}
        </details>
        <ThemeController />
      </div>
    </div>
  );
};

export default Navbar;
