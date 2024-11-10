import React, { useState } from 'react';
import Navbar from './Navbar';
import Tabs from './Tabs';
import './home.css';

const App = () => {
  const [selectedTab, setSelectedTab] = useState('Career Path');

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="content">
          {selectedTab === 'Career Path' ? (
           <h2>Career Path</h2> 
          ) : (
            <h2>Jobs Path</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
