import React from 'react';

const Divider: React.FC<{ value: string }> = ({ value }) => {
  return (
    <div className="flex w-5/6 flex-col">
      <div className="divider">{value}</div>
    </div>
  );
};

export default Divider;
