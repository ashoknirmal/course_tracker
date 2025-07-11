// src/App.js

import React from "react";
import CourseCard from "./CourseCard";
import courses from "./data";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>📚 Ashok's NPTEL Courses</h1>
      <div className="card-container">
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            title={course.title}
            description={course.description}
            link={course.link}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
