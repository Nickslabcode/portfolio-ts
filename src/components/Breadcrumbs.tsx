import React from 'react';
import { Link } from 'react-router-dom';
import { PiHouseSimple } from 'react-icons/pi';

interface BreadcrumbsProps {
  currentViewTitle: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ currentViewTitle }) => {
  return (
    <div className="breadcrumbs text-sm items-start">
      <ul>
        <li>
          <Link to="/" className="text-primary">
            <PiHouseSimple size={20} className="mr-1" />
            Home
          </Link>
        </li>
        <li>
          <Link to="/projects" className="text-primary">
            Projects
          </Link>
        </li>
        <li className="font-semibold">{currentViewTitle}</li>
      </ul>
    </div>
  );
};

export default Breadcrumbs;
