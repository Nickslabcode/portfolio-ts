import React from 'react';
import { ActiveSection } from '../enums/ActiveSection.enum';

interface TableOfContentsProps {
  activeSection: ActiveSection;
  setActiveSection: React.Dispatch<React.SetStateAction<ActiveSection>>;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({
  activeSection,
  setActiveSection,
}) => {
  return (
    <div role="tablist" className="tabs tabs-bordered my-4">
      {Object.values(ActiveSection).map(
        (section: ActiveSection, id: number) => (
          <a
            key={id}
            role="tab"
            className={`tab ${activeSection === section && 'tab-active'}`}
            onClick={() => setActiveSection(section)}
          >
            {section}
          </a>
        )
      )}
    </div>
  );
};

export default TableOfContents;
