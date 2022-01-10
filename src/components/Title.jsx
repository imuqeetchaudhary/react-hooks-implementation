import React, { memo } from "react";

const Title = () => {
  console.log(`Rendering Title`);
  return <div>useCallback() Hook</div>;
};

export default memo(Title);
