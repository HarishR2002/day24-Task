import React from 'react';
import './All.css'; // Import the CSS file

const All = () => {
  return (
    <div className="all-container">
     
      
      <div className="image-grid">
        <img 
          src="https://www.shutterstock.com/image-vector/full-stack-developer-programmer-who-260nw-2273927175.jpg" 
          alt="Full Stack Development" 
          className="course-image" 
        />

        <img 
          src="https://thumbs.dreamstime.com/b/big-data-center-analyzes-data-science-background-presentation-big-data-center-analyzes-data-science-background-159196598.jpg" 
          alt="Data Science" 
          className="course-image" 
        />

        <img 
          src="https://cdn.pixabay.com/photo/2016/10/31/06/12/cyber-security-1784985_640.png" 
          alt="Cyber Security" 
          className="course-image" 
        />

        <img 
          src="https://c8.alamy.com/comp/EA2M7W/career-related-words-concept-in-word-tag-cloud-EA2M7W.jpg" 
          alt="Career" 
          className="course-image" 
        />
        
        
      </div>
    </div>
  );
};

export default All;
