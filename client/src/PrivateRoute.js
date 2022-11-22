import React from 'react';
import { Navigate } from 'react-router-dom';

import { AuthConsumer } from './components/Context';

const PrivateRoute = ({ children }) => {
  return (
    <AuthConsumer>
      { context => (
        context.id ? children : <Navigate to="/signin" />
      )}
    </AuthConsumer>
  );
};

export default PrivateRoute;

// https://dev.to/iamandrewluca/private-route-in-react-router-v6-lg5
// This link shows how to migrate from PrivateRoutes in React Router V.4 to PrivateRoutes in V.6