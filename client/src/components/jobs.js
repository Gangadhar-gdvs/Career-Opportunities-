import React, { useState } from 'react';
import Navbar from './Navbar';
import Tabs from './Tabs';
import CareerDetails from './JobDetails.js';
import SearchBar from './Searchbar';
import './jobs.css';

const App = () => {
  const [selectedTab, setSelectedTab] = useState('10th Based');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(null); // To manage selected course
//    const [selectedSpecialization, setSelectedSpecialization] = useState(null); // To manage selected specialization

  // Define course data with their specializations
  const careerData = {
    "After 10th": [
  {
    name: "Technician",
    domain: "Engineering & Technical",
    fields: ["Civil ,", "Mechanical ,", "Electrical ,", "Automobile ,", "Electronics "]
  },
  {
    name: "Teacher's Assistant",
    domain: "Education",
    fields: ["Primary Education ,", "Language Arts ,", "Mathematics ,", "Science "]
  },
  {
    name: "Skilled Tradesman",
    domain: "Trades & Crafts",
    fields: ["Carpentry ,", "Plumbing ,", "Welding ,", "Electrical ,", "HVAC "]
  },
  {
    name: "Factory Worker",
    domain: "Manufacturing & Production",
    fields: ["Assembly ,", "Production Line ,", "Quality Control ,", "Packaging "]
  },
  {
    name: "Retail Associate",
    domain: "Retail & Sales",
    fields: ["Customer Service ,", "Sales ,", "Inventory Management ,", "Store Operations "]
  },
  {
    name: "Computer Support Technician",
    domain: "Information Technology",
    fields: ["Software Support ,", "Hardware Repair ,", "Networking "]
  }
]
,
  "After 12th": [
  {
    name: "Software Developer",
    domain: "Information Technology",
    fields: ["Web Development ,", "App Development ,", "Game Development ,", "Software Engineering "]
  },
  {
    name: "Chartered Accountant",
    domain: "Finance",
    fields: ["Taxation ,", "Auditing ,", "Corporate Finance ,", "Accounting ,"]
  },
  {
    name: "Data Analyst",
    domain: "Data Science & Analytics",
    fields: ["Data Mining ,", "Data Visualization ,", "Business Intelligence "]
  },
  {
    name: "Civil Engineer",
    domain: "Engineering",
    fields: ["Construction ,", "Structural Engineering ,", "Urban Planning "]
  },
  {
    name: "Teacher",
    domain: "Education",
    fields: ["Primary School ,", "Secondary School ,", "Higher Education "]
  },
  {
    name: "Digital Marketing Specialist",
    domain: "Marketing & Advertising",
    fields: ["Social Media Marketing ,", "SEO ,", "Content Creation ,", "PPC Campaigns "]
  }
]
,
  "After Diploma": [
  {
    name: "Civil Engineer",
    domain: "Engineering",
    fields: ["Construction ,", "Structural Engineering ,", "Urban Planning"]
  },
  {
    name: "Mechanical Engineer",
    domain: "Engineering",
    fields: ["Manufacturing ,", "Automobile Engineering ,", "Robotics"]
  },
  {
    name: "Pharmacist",
    domain: "Healthcare",
    fields: ["Pharmacy ,", "Hospital Pharmacy ,", "Retail Pharmacy "]
  },
  {
    name: "Fashion Designer",
    domain: "Design",
    fields: ["Fashion Design ,", "Textile Design ,", "Accessory Design"]
  },
  {
    name: "Interior Designer",
    domain: "Design",
    fields: ["Interior Design ,", "Furniture Design ,", "Space Planning"]
  },
  {
    name: "Computer Programmer",
    domain: "Information Technology",
    fields: ["Software Development ,", "Application Development ,", "Database Management"]
  }
]
,
 "After Degree": [
  {
    name: "Software Engineer",
    domain: "Information Technology",
    fields: ["Backend Development ,", "Frontend Development ,", "Mobile Development ,", "AI & ML"]
  },
  {
    name: "Product Manager",
    domain: "Business & Management",
    fields: ["Product Strategy ,", "Product Design ,", "Market Research ,", "Project Management"]
  },
  {
    name: "Research Scientist",
    domain: "Science & Research",
    fields: ["Physics ,", "Chemistry ,", "Biology ,", "Materials Science"]
  },
  {
    name: "Business Analyst",
    domain: "Business & Finance",
    fields: ["Business Intelligence ,", "Market Analysis ,", "Operations Management"]
  },
  {
    name: "Financial Analyst",
    domain: "Finance",
    fields: ["Investment Banking ,", "Corporate Finance ,", "Risk Management"]
  },
  {
    name: "Marketing Manager",
    domain: "Marketing & Advertising",
    fields: ["Market Research ,", "Brand Strategy ,", "Advertising ,", "Digital Marketing"]
  }
]
,
};

  // Handle selecting a course and showing its specialization
  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
    // setSelectedSpecialization(null); // Reset specialization when changing course
  };

//   const handleSpecializationSelect = (specialization) => {
//     setSelectedSpecialization(specialization); // Set the selected specialization
//   };

  return (
    <div className="App">
      <Navbar />
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <CareerDetails 
        selectedTab={selectedTab} 
        careerData={careerData} 
        searchQuery={searchQuery} 
        handleCourseSelect={handleCourseSelect} 
        // handleSpecializationSelect={handleSpecializationSelect} 
        selectedCourse={selectedCourse}
        // selectedSpecialization={selectedSpecialization}
      />
    </div>
  );
};

export default App;
