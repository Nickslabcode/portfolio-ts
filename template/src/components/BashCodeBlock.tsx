import React from 'react';

const BashCodeBlock: React.FC<{ children: string }> = ({ children }) => (
  <div className="mockup-code my-3 text-sm">
    <pre data-prefix="$">
      <code>{children}</code>
    </pre>
  </div>
);

export default BashCodeBlock;
