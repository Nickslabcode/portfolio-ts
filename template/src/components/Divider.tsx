import React from 'react';

const Divider: React.FC<{ value: string }> = ({ value }) => {
  return (
    <div className="flex w-3/4 flex-col">
      <div className="divider divider-start font-semibold">{value}</div>
    </div>
  );
};

export default Divider;
