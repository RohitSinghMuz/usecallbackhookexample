import React, { memo } from "react";

const Child = ({ callbackfun, count }) => {
  console.log("Child Pgae");
  return (
    <>
      <div>Child</div>
    </>
  );
};

export default memo(Child);
