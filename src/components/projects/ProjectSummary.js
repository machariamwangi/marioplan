import React from "react";

const ProjectSummary = ({ project }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>posted by elimax mwangi</p>
        <p className="grey-text">3rd sept, 2am</p>
      </div>
    </div>
  );
};

export default ProjectSummary;
