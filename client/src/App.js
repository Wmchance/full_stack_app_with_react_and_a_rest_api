import React, { useState } from "react";
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
// import Authenticated from "./components/Authenticated";

function App() {
  const [userInfo, updateUserInfo] = useState({}); //Store user info from UserSignUp

  //Function to lift user info values from UserSignUp component 
  const liftUserInfo = (userInfo) => {
    // e.preventDefault();
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
                element={<UserSignUp />}
              />

              <Route
                path="/signin"
                element={<UserSignIn 
                  liftUserInfo = {liftUserInfo}
                />}
              />

              <Route
                path="/create-course"
                element={
                  <PrivateRoute>
                    <CreateCourse />
                  </PrivateRoute>
                }
              />

              <Route
                path="/:id/update"
                element={
                  <PrivateRoute>
                    <UpdateCourse />
                  </PrivateRoute>
                }
              />
              
              {/* https://dev.to/iamandrewluca/private-route-in-react-router-v6-lg5 */}
              {/* This link shows how to migrate from PrivateRoutes in React Router V.4 to PrivateRoutes in V.6 */}
              {/* Below is an example to test that it's working */}
              {/* <Route
                path="/authenticated"
                element={
                  <PrivateRoute>
                    <Authenticated />
                  </PrivateRoute>
                }
              /> */}

            </Routes>
          </main>
      </BrowserRouter>
    </AuthProvider>
    </div>
    
  );
}

export default App;
