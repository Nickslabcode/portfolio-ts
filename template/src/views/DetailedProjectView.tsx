import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../data/data';
import { Project } from '../models/Project';
import Breadcrumbs from '../components/Breadcrumbs';

import TableOfContents from '../components/TableOfContents';
import { ActiveSection } from '../enums/ActiveSection.enum';
import MarkdownRenderedComponent from '../components/MarkdownRenderedComponent';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const DetailedProjectView: React.FC = () => {
  const { slug } = useParams();
  const [project, _] = useState<Project>(
    () => data.find(p => p.slug.includes(slug!))!
  );
  const [projectRawData, setProjectRawData] = useState<string[]>([]);
  const [activeSection, setActiveSection] = useState<ActiveSection>(
    ActiveSection.OVERVIEW
  );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://raw.githubusercontent.com/${project.slug}/main/README.md`)
      .then(response => response.text())
      .then(response =>
        setProjectRawData(response.split('<!-- End of Section -->'))
      )
      .catch((err: Error) => console.error(err.message))
      .finally(() => setTimeout(() => setIsLoading(false), 500));
  }, [project.slug]);

  console.log(projectRawData[3]);

  return (
    <motion.div
      className="flex flex-col items-center justify-center pt-10 gap-5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <div className="w-3/4">
        <Breadcrumbs currentViewTitle={project.title} />
        {isLoading ? (
          <span className="ml-2 loading loading-ring loading-md"></span>
        ) : (
          <>
            <TableOfContents
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
            <motion.div
              className="max-w-full flex flex-wrap justify-center xl:justify-start text-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              {activeSection === ActiveSection.OVERVIEW && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                  <MarkdownRenderedComponent content={projectRawData[1]} />
                </motion.div>
              )}
              {activeSection === ActiveSection.KEY_FEATURES && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                  <MarkdownRenderedComponent content={projectRawData[2]} />
                </motion.div>
              )}
              {activeSection === ActiveSection.SETUP && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                  <MarkdownRenderedComponent content={projectRawData[3]} />
                </motion.div>
              )}
            </motion.div>
          </>
        )}
      </div>
      <Footer />
    </motion.div>
  );
};

export default DetailedProjectView;
