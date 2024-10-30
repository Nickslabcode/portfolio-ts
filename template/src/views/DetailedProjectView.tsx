import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../data/data';
import { Project } from '../models/Project';
import Breadcrumbs from '../components/Breadcrumbs';

const DetailedProjectView: React.FC = () => {
  const { slug } = useParams();
  const [project, _] = useState<Project>(
    () => data.find(p => p.slug === slug)!
  );
  // useEffect(() => {
  //   fetch(
  //     'https://raw.githubusercontent.com/Team-06-alpha-A62/veil/main/README.md'
  //   )
  //     .then(response => response.text())
  //     .then(console.log);
  // }, []);
  return (
    <div className="flex flex-col items-center justify-center pt-10 gap-5">
      <div className="w-3/4 flex flex-wrap justify-center xl:justify-start">
        <Breadcrumbs currentViewTitle={project.title} />
      </div>
    </div>
  );
};

export default DetailedProjectView;
