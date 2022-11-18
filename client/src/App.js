import React, { useState } from "react";
import { 
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { AuthProvider } from "./components/Context";

import Courses from './components/Courses';
import CourseDetails from './components/CourseDetail';
import UserSignIn from './components/UserSignIn';
import UserSignUp from './components/UserSignUp';
import CreateCourse from './components/CreateCourse';
import UpdateCourse from './components/UpdateCourse';
import Header from './components/Header';

function App() {
  const [userInfo, updateUserInfo] = useState({}); //Store user info from UserSignUp

  //Function to lift user info values from UserSignUp component 
  const liftUserInfo = (e, userInfo) => {
    e.preventDefault();
    updateUserInfo(userInfo);
  }

  return (
    <div id="root">
    <AuthProvider value={userInfo}>
      <BrowserRouter>
          <Header />
          <main>
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
                path="/signup"
                element={<UserSignUp 
                  liftUserInfo = {liftUserInfo}
                />}
              />

              <Route
                path="/signin"
                element={<UserSignIn />}
              />

              <Route
                path="/create-course"
                element={<CreateCourse />}
              />

              <Route
                path="/:id/update"
                element={<UpdateCourse />}
              />
            </Routes>
          </main>
      </BrowserRouter>
    </AuthProvider>
    </div>
    
  );
}

export default App;
