import React from 'react';
import './JobDetails.css'
const JobDetails = ({ selectedTab, careerData, searchQuery, handleCourseSelect, selectedCourse }) => {
  // Filter career data based on the selected tab
  const filteredCareerData = careerData[selectedTab] || [];

  // Filter courses based on search query
  const searchFilteredCareerData = filteredCareerData.filter(course => 
    course.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="career-details">
      {/* <h2>Career Options</h2> */}
      <div className="course-list">
        {searchFilteredCareerData.map((course, index) => (
          <div key={index} className="course-item" onClick={() => handleCourseSelect(course)}>
            <h3>{course.name}</h3>
            <p><strong>Domain:</strong>{course.domain}</p>
            <p><strong>Fields:</strong>{course.fields}</p>
          </div>
        ))}
      </div>

      {/* Show specializations when a course is selected */}
      
     
     
    </div>
  );
};

export default JobDetails;
