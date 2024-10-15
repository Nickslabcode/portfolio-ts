import React from 'react';
import { FaSquareUpwork } from 'react-icons/fa6';

const Timeline: React.FC = () => {
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
      <li>
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-start mb-10 md:text-end timeline-box shadow-md">
          <time className="font-mono italic">04.2024 - 09.2024</time>
          <div className="text-lg font-black">
            Telerik Alpha JavaScript Track
          </div>
          Graduated Telerik's Academy School with JavaScript with excellence.
          <br />
          Won Best{' '}
          <a
            href="https://github.com/Team-06-alpha-A62/veil?tab=readme-ov-file"
            className="inline-block btn-link"
          >
            Final Project
          </a>{' '}
          award.
        </div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-end mb-10 md:text-start timeline-box shadow-md">
          <time className="font-mono italic">09.2020 - 03.2024</time>
          <div className="text-lg font-black">Siteground Hosting</div>
          Provided expert technical support to global clients in English,
          resolving issues related to WordPress, DNS, domain management, FTP,
          email and SSH configuration.
        </div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-start mb-10 md:text-end timeline-box shadow-md">
          <time className="font-mono italic">03.2019 - 12.2019</time>
          <div className="text-lg font-black">Independent Freelancer</div>
          <a
            href="https://www.upwork.com/freelancers/~019b57b5b048ed8468"
            className="btn btn-outline btn-primary rounded-3xl btn-sm my-1 items-center"
            target="_blank"
          >
            <FaSquareUpwork size={20} />
            Profile
          </a>
          <p>
            Gained experience in various front-end tasks, including UI/UX
            design, WordPress updates, and responsive web design.
          </p>
        </div>
      </li>
    </ul>
  );
};

export default Timeline;
