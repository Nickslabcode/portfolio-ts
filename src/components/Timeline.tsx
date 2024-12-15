import React from "react";
import { FaSquareUpwork } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Timeline: React.FC = () => {
  const navigate = useNavigate();

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
          <time className="font-mono italic">11.2024 - 12.2024</time>
          <h2 className="text-lg font-semibold">Telerik Mentorship program</h2>
          Mentored a group of three mentees in Telerik Academy's Alpha
          JavaScript track, guiding them through their final project with React,
          TypeScript and Firebase.
        </div>
        <hr />
      </li>
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
        <div className="timeline-end mb-10 md:text-start timeline-box shadow-md">
          <time className="font-mono italic">04.2024 - 09.2024</time>
          <h2 className="text-lg font-semibold">
            Telerik Alpha JavaScript Track
          </h2>
          Graduated Telerik's Academy School with JavaScript with excellence.
          <br />
          Won Best{" "}
          <span className="link link-primary" onClick={() => navigate('/projects/veil')}>
            Final Project
          </span>{" "}
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
        <div className="timeline-start mb-10 md:text-end timeline-box shadow-md">
          <time className="font-mono italic">09.2020 - 03.2024</time>
          <h2 className="text-lg font-semibold">SiteGround Hosting</h2>
          Provided expert technical support to global clients in English,
          resolving issues related to WordPress, DNS, domain management, FTP,
          email and SSH configuration, and more.
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
          <time className="font-mono italic">03.2019 - 12.2019</time>
          <h2 className="text-lg font-semibold">Independent Freelancer</h2>

          <a
            href="https://www.upwork.com/freelancers/~019b57b5b048ed8468"
            className="btn btn-outline rounded-3xl btn-sm my-1 items-center"
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
