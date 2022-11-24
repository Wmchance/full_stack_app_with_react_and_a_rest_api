import React, { useState, useEffect } from "react";
import { 
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { AuthProvider } from "./components/Context";
import PrivateRoute from "./PrivateRoute";

import Courses from './components/Courses';
import CourseDetails from './components/CourseDetail';
import UserSignIn from './components/UserSignIn';
import UserSignUp from './components/UserSignUp';
import CreateCourse from './components/CreateCourse';
import UpdateCourse from './components/UpdateCourse';
import Header from './components/Header';
import UserSignOut from "./components/UserSignOut";
import NotFound from "./components/NotFound";
import Forbidden from "./components/Forbidden";
import UnhandledError from "./components/UnhandledError";

function App() {
  const [userInfo, updateUserInfo] = useState({}); //Store user info from UserSignUp

  //Function to lift user info values from components
  const liftUserInfo = (userInfo) => {
    // e.preventDefault();
    updateUserInfo(userInfo);
    //Set local storage for user info
    localStorage.setItem('emailAddress', userInfo.emailAddress);
    localStorage.setItem('password', userInfo.password);
    localStorage.setItem('firstName', userInfo.firstName);
    localStorage.setItem('lastName', userInfo.lastName);
    localStorage.setItem('id', userInfo.id);
  }

  //Stay signed in with LocalStorage if available
  useEffect(() => {
    if(localStorage.emailAddress !== 'undefined') {
      updateUserInfo({
        emailAddress: localStorage.emailAddress,
        password: localStorage.password,
        firstName: localStorage.firstName,
        lastName: localStorage.lastName,
        id: +localStorage.id
      })
    }
  }, [])

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
                path="courses/:id"
                element={<CourseDetails />}
              />
              
              {/* https://dev.to/iamandrewluca/private-route-in-react-router-v6-lg5 */}
              {/* This link shows how to migrate from PrivateRoutes in React Router V.4 to PrivateRoutes in V.6 */}
              <Route
                path="courses/create"
                element={
                  <PrivateRoute>
                    <CreateCourse />
                  </PrivateRoute>
                }
              />

              <Route
                path="courses/:id/update"
                element={
                  <PrivateRoute>
                    <UpdateCourse />
                  </PrivateRoute>
                }
              />

              <Route
                path="/signup"
                element={<UserSignUp 
                  liftUserInfo = {liftUserInfo}
                />}
              />

              <Route
                path="/signin"
                element={<UserSignIn 
                  liftUserInfo = {liftUserInfo}
                />}
              />

              <Route
                path="/signout"
                element={<UserSignOut 
                  liftUserInfo = {liftUserInfo}
                />}
              />

              <Route
                path="/notfound"
                element={<NotFound />}
              />

              <Route
                path="/forbidden"
                element={<Forbidden />}
              />

              <Route
                path="/error"
                element={<UnhandledError />}
              />

              <Route 
                path="*" 
                element={<NotFound />}
              />

            </Routes>
          </main>
      </BrowserRouter>
    </AuthProvider>
    </div>
    
  );
}

export default App;
