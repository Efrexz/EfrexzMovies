import { Suspense, lazy } from 'react';
import {Route, Routes } from 'react-router-dom';
import Layout from "@components/Layout/Layout";
import SignupPage from '@pages/SignupPage';
import LoadingSpinner from '@components/common/LoadingSpinner';

const HomePage = lazy(() => import('@pages/HomePage'));
const LoginPage = lazy(() => import('@pages/LoginPage'));

function App() {
  return (
    <Routes>
      {/* Rutas sin Layout */}
      <Route
        path="/login"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <LoginPage />
          </Suspense>
        }
      />
      <Route
        path="/signup"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <SignupPage />
          </Suspense>
        }
      />

      {/* Rutas con Layout */}
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/dashboard" element={<DashboardPage />} /> */}
      </Route>
    </Routes>
);
}

export default App
