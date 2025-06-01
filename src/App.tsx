import { Suspense, lazy } from 'react';
import Layout from "@components/Layout/Layout";
// import LoadingSpinner from '@components/loadinSpinner/LoadingSpinner';
import LoadingSpinner from '@components/common/LoadingSpinner';


function App() {

  const HomePage = lazy(() => import('@pages/HomePage'));

  return (
    <>
      <Layout>
        <Suspense fallback={<LoadingSpinner />}>
          <HomePage />
        </Suspense>
      </Layout>
    </>
  )
}

export default App
