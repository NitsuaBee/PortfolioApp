import React, { useState } from 'react';
import './Home.css';
import MainSection from '../../Components/MainSection/MainSection';
import ProjectSection from '../../Components/ProjectSection/ProjectSection';
import MainPanel from '../../Components/Background/MainPanel';

const Home = () => {
  return (
    <div>
        <div id="home">
            <MainPanel/>
        </div>
        <div id="projects">
            <ProjectSection/>
        </div>
        
    </div>
  )
}

export default Home