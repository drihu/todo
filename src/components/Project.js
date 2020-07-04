import React from "react";

export default function Project({ project }) {
  return (
    <div className="project">
      <div className="project__icon">
        <div className="project__icon-circle" />
      </div>
      {project.name}
    </div>
  );
}
