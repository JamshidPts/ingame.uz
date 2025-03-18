import React, { Suspense, useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useLocation } from 'react-router-dom';
import Loader from './components/Loader';

const AppRouter = React.lazy(() => import('./router/AppRouter'));

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1200); // Искусственная задержка для плавности
    return () => clearTimeout(timer); // Очистка таймера при смене маршрута
  }, [location]);

  return (
    <>
      {loading ? <Loader /> : (
        <Suspense fallback={<Loader />}>
          <AppRouter />
        </Suspense>
      )}
      <ToastContainer
        style={{ zIndex: 9999 }}
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="dark"
      />
    </>
  );
}

export default App;
