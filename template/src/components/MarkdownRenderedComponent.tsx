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
          <h2 className="text-lg font-semibold my-4" {...props} />
        ),

        h3: ({ ...props }) => (
          <h2 className="text-md font-semibold my-2" {...props} />
        ),

        p: ({ ...props }) => <h2 className="text-md" {...props} />,

        a: ({ ...props }) => (
          <a className="text-md link link-primary" {...props} />
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
                className={`${className} font-mono text-sm items-center bg-warning text-primary-content p-0.5 rounded-md`}
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
