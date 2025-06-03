import { Suspense, lazy } from 'react';
import {Route, Routes } from 'react-router-dom';
import Layout from "@components/Layout/Layout";
import LoadingSpinner from '@components/common/LoadingSpinner';

const HomePage = lazy(() => import('@pages/HomePage'));
const LoginPage = lazy(() => import('@pages/LoginPage'));

function App() {
  return (
      <Routes>
        {/* Ruta sin Layout */}
        <Route
          path="/login"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <LoginPage />
            </Suspense>
          }
        />

        {/* Rutas con Layout */}
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <HomePage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
  );
}

export default App
