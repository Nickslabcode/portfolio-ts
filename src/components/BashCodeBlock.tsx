import React from 'react';

const BashCodeBlock: React.FC<{ children: string }> = ({ children }) => (
  <div className="overflow-x-auto mockup-code my-3 text-xs md:text-sm max-w-full">
    <pre data-prefix="$">
      <code>{children}</code>
    </pre>
  </div>
);

export default BashCodeBlock;
