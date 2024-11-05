import { Link } from 'react-router-dom';
import ThemeController from './ThemeController.tsx';
import { FaGithub } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="flex justify-around items-center backdrop-blur-md fixed left-0 right-0  z-10 top-0 py-4">
      <div className="flex items-center">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden mr-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm gap-2 items-center dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/projects" className="link-hover text-base">
                Projects
              </Link>
            </li>
            <li>
              <a
                href="https://github.com/Nickslabcode/portfolio-ts"
                className="flex gap-2 link-hover text-base"
                target="_blank"
              >
                <FaGithub size={25} />
                Source
              </a>
            </li>
          </ul>
        </div>
        <div>
          <Link
            to="/"
            className="font-semibold text-lg hover:text-primary w-1/4"
          >
            Nikola Nenovski
          </Link>
        </div>
        <div className="hidden lg:flex">
          <ul className=" ml-4 flex gap-4 px-1 items-center">
            <li>
              <Link to="/projects" className="link-hover text-base">
                Projects
              </Link>
            </li>
            <li>
              <a
                href="https://github.com/Nickslabcode/portfolio-ts"
                className="flex gap-2 link-hover text-base"
                target="_blank"
              >
                <FaGithub size={25} />
                Source
              </a>
            </li>
          </ul>
        </div>
      </div>
      <ThemeController />
    </div>
  );
};

export default Navbar;
