import React from "react";

const Wrapper = ({ children }) => {
  return (
    <main className="section">
      <div className="container">{children}</div>
    </main>
  );
};

export default Wrapper;
