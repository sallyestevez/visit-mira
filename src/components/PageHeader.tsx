import React from "react";

function PageHeader({ pageTitle, backgroundImage }) {
  return (
    <div
      className="page-header"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1>{pageTitle}</h1>
    </div>
  );
}

export default PageHeader;
