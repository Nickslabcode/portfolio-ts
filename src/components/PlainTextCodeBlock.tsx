import React from 'react';

const PlaintextCodeBlock: React.FC<{ children: string }> = ({ children }) => {
  const lines = children.trim().split('\n');
  return (
    <div className="overflow-x-auto mockup-code my-3 text-xs md:text-sm max-w-full">
      {lines.map((line, index) => (
        <pre key={index} data-prefix={index + 1}>
          <code>{line}</code>
        </pre>
      ))}
    </div>
  );
};

export default PlaintextCodeBlock;
