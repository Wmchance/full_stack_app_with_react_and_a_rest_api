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
import UpdateCourse from './components/UpdateCourse';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
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

        <Route
          path="/update-course"
          element={<UpdateCourse />}
        />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
