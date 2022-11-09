import './App.css';
import React from "react";
import { 
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Courses from './components/Courses';
import CourseDetails from './components/CourseDetail';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Courses />}
        />
  
        <Route 
          path="/:id"
          element={<CourseDetails />}
        />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
