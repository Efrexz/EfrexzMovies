import { Suspense, lazy } from 'react';
import Layout from "@components/Layout/Layout";


function App() {

  const HomePage = lazy(() => import('@pages/HomePage'));

  return (
    <>
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <HomePage />
        </Suspense>
      </Layout>
    </>
  )
}

export default App
