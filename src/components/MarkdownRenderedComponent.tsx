import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import PlaintextCodeBlock from './PlainTextCodeBlock';
import BashCodeBlock from './BashCodeBlock';

const MarkdownRenderedComponent: React.FC<{ content: string }> = ({
  content,
}) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h2: ({ ...props }) => (
          <h2
            className="text-base md:text-lg font-semibold my-4 break-words"
            {...props}
          />
        ),

        h3: ({ ...props }) => (
          <h3
            className="text-md md:text-base font-semibold my-2 break-words"
            {...props}
          />
        ),

        p: ({ ...props }) => (
          <p className="text-md md:text-base break-words" {...props} />
        ),

        li: ({ ...props }) => (
          <li className="text-md md:text-base break-words" {...props} />
        ),

        strong: ({ ...props }) => (
          <strong className="text-md md:text-base break-words" {...props} />
        ),

        a: ({ ...props }) => (
          <a className="text-md md:text-base link link-primary" {...props} />
        ),

        img: ({ ...props }) => (
          <div className="flex justify-center my-2">
            <img className="rounded-xl shadow-lg" {...props} />
          </div>
        ),

        ul: ({ ...props }) => <ul className="list-disc pl-5 my-2" {...props} />,

        ol: ({ ...props }) => (
          <ol className="list-decimal pl-5 my-2" {...props} />
        ),

        pre: ({ children, ...props }) => (
          <pre
            className="overflow-x-auto max-w-96 md:max-w-full text-xs md:text-sm"
            {...props}
          >
            {children}
          </pre>
        ),

        code: ({ className, children, ...props }) => {
          const language = className?.replace('language-', '');

          if (language === 'plaintext') {
            return (
              <PlaintextCodeBlock>{String(children).trim()}</PlaintextCodeBlock>
            );
          } else if (language === 'bash') {
            return <BashCodeBlock>{String(children).trim()}</BashCodeBlock>;
          } else {
            return (
              <code
                className={`${className} font-mono text-xs lg:text-sm items-center bg-warning text-primary-content p-0.5 rounded-md max-w-full break-words`}
                {...props}
              >
                {children}
              </code>
            );
          }
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownRenderedComponent;
