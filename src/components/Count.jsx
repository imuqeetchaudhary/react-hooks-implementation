import React, { memo } from "react";

const Count = ({ type, count }) => {
  console.log(`Rendering - ${type}`);
  return (
    <div>
      {type} - {count}
    </div>
  );
};

export default memo(Count);
