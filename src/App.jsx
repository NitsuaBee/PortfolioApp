import React from 'react'
import ProjectSection from './Components/ProjectSection/ProjectSection'
import { Routes, Route } from 'react-router-dom'; 
import MainPanel from './Components/Background/MainPanel';


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPanel/>}/>
        <Route path="/projects" element={<ProjectSection/>}/>
      </Routes>
      </>
  );
}

export default App
