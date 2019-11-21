import React from "react";

const ProjectDetails = props => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depthe-0">
        <div className="card-content">
          <span className="card-title">Project Title -{id}</span>
          <p>
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </p>
        </div>
        <div className="card-action great lighten-4 grey-text">
          <div>Posted by elimax mwangi</div>
          <div>21 november, 2am</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
