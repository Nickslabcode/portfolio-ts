import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../data/data';
import { Project } from '../models/Project';
import Breadcrumbs from '../components/Breadcrumbs';

import TableOfContents from '../components/TableOfContents';
import { ActiveSection } from '../enums/ActiveSection.enum';
import MarkdownRenderedComponent from '../components/MarkdownRenderedComponent';
import Footer from '../components/Footer';
import ProjectOverview from '../components/ProjectOverview';
import MotionContainer from '../hoc/MotionContainer';

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
    fetch(`https://raw.githubusercontent.com/${project.slug}/dev/README.md`)
      .then(response => response.text())
      .then(response =>
        setProjectRawData(response.split('<!-- End of Section -->'))
      )
      .then(data => console.log(data))
      .catch((err: Error) => console.error(err.message))
      .finally(() => setTimeout(() => setIsLoading(false), 500));
  }, [project.slug]);

  return (
    <div className="flex flex-col items-center justify-center pt-10 gap-5 mt-5">
      <div className="w-3/4">
        <Breadcrumbs currentViewTitle={project.title} />
        {isLoading ? (
          <span className="loading loading-ring loading-md"></span>
        ) : (
          <>
            <TableOfContents
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
            <MotionContainer className="max-w-full flex flex-wrap justify-center xl:justify-start text-start">
              {activeSection === ActiveSection.OVERVIEW && (
                <MotionContainer>
                  <ProjectOverview project={project} />
                  <MarkdownRenderedComponent content={projectRawData[2]} />
                </MotionContainer>
              )}
              {activeSection === ActiveSection.SETUP && (
                <MotionContainer>
                  {
                    <MarkdownRenderedComponent
                      content={
                        projectRawData[3]?.length > 4
                          ? projectRawData[3]
                          : 'No instructions for this project.'
                      }
                    />
                  }
                </MotionContainer>
              )}
            </MotionContainer>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default DetailedProjectView;
