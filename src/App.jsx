import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home-page';
import LoginPage from './pages/login-page';
import AuthProvider from './auth/auth-provider';
import PrivateRoute from './auth/private-route';
import NotFoundPage from './pages/not-found-page';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path='*' element={<NotFoundPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;