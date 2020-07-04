import React from "react";

export default function Project({ project, onClick }) {
  return (
    <button onClick={onClick} className="project">
      <div className="project__icon">
        <div className="project__icon-circle" style={{ background: project.color }} />
      </div>
      {project.name}
    </button>
  );
}
