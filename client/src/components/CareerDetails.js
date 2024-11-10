import React from 'react';
import './CareerDetails.css'
const CareerDetails = ({ selectedTab, careerData, searchQuery, handleCourseSelect, handleSpecializationSelect, selectedCourse, selectedSpecialization }) => {
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
            <p><strong>Duration:</strong>{course.duration}</p>
            <p><strong>Description:</strong>{course.description}</p>
          </div>
        ))}
      </div>

      {/* Show specializations when a course is selected */}
      {selectedCourse && !selectedSpecialization && (
        <div className="specialization-list">
          <h3>Select Specialization for {selectedCourse.name}</h3>
          {selectedCourse.specializations.map((specialization, index) => (
            <div 
              key={index} 
              className="specialization-item" 
              onClick={() => handleSpecializationSelect(specialization)}
            >
              <p>{specialization}</p>
            </div>
          ))}
        </div>
      )}

      {/* Show specialization details if selected */}
      {selectedSpecialization && (
        <div className="specialization-details">
          <h3>Details for {selectedSpecialization}</h3>
          <p>Information and description about {selectedSpecialization} specialization.</p>
          {/* You can add further details about the specialization here */}
        </div>
      )}
    </div>
  );
};

export default CareerDetails;
