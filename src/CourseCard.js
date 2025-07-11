
import React from "react";
import "./App.css";

function CourseCard({ title, description, link }) {
  return (
    <div className="course-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        Go to Course
      </a>
    </div>
  );
}

export default CourseCard;
