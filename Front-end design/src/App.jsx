import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Home from './Home';
import { AuthProvider } from 'oidc-react';
import TokenUpdater from './TokenUpdater';



const oidcConfig = {
  onSignIn: async (userData) => {
    console.log('user data', userData);
    localStorage.setItem('access_token', userData.access_token);
    // Navigate to your desired route after login
  },
  authority: `${process.env.REACT_APP_KEYCLOAK_URL}/realms/${process.env.REACT_APP_KEYCLOAK_REALM}`,
  clientId: process.env.REACT_APP_KEYCLOAK_CLIENT,
  clientSecret: process.env.REACT_APP_KEYCLOAK_SECRET_CLIENT,
  responseType: 'code',
  redirectUri: window.location.origin,
  // autoSignIn: true,
  automaticSilentRenew: true,
  scope: 'openid profile email',
};

function App() {
  return (
    <AuthProvider {...oidcConfig}>
      <TokenUpdater />
      <div className='d-flex bg-light vh-100'>
        <div className='w-auto'>
          <Sidebar />
        </div>
        <div className='col'>
          <Navbar />
          <Home />
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;