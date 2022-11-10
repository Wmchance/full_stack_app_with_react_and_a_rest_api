import './App.css';
import React from "react";
import { 
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Courses from './components/Courses';
import CourseDetails from './components/CourseDetail';
import UserSignIn from './components/UserSignIn';
import UserSignUp from './components/UserSignUp';
import CreateCourse from './components/CreateCourse';

function App() {
  return (
    <BrowserRouter>
      <UserSignIn />
      <Routes>
        <Route
          path="/"
          element={<Courses />}
        />
  
        <Route 
          path="/:id"
          element={<CourseDetails />}
        />

        <Route
          path="/sign-up"
          element={<UserSignUp />}
        />

<Route
          path="/create-course"
          element={<CreateCourse />}
        />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
