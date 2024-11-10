// components/Tabs.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Tabs.css';
const Tabs = ({ selectedTab, setSelectedTab }) => {
  const tabs = ['After 10th', 'After 12th', 'After Diploma', 'After Degree'];

  return (
    
    <> 
     <div className="tabs">
      <div
        className={`tab ${selectedTab === 'Career Path' ? 'active' : ''}`}
        onClick={() => setSelectedTab('Career Path')}
      >
       <Link to='/career' className='link'>Career Paths</Link>
      </div>
      <div
        className={`tab ${selectedTab === 'Jobs Path' ? 'active' : ''}`}
        onClick={() => setSelectedTab('Jobs Path')}
      >
       <Link to='/jobs' className='link'>Jobs Paths</Link>
      </div>
    </div>
       <div className="tabs">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`tab-button ${selectedTab === tab ? 'active' : ''}`}
          onClick={() => setSelectedTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
   
    </>

  );
};

export default Tabs;






