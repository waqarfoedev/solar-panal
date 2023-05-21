import React from "react";

const test = () => {
  const handle = () => {};
  return (
    <>
      <a onClick={handle} className="2">
        test
      </a>
      <a onClick={handle} className="3">
        hsd
      </a>
      <a onClick={handle} className="1">
        tsdjsdest
      </a>
    </>
  );
};

export default test;
