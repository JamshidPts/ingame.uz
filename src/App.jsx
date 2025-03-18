import React, { useEffect, useState } from 'react'
import AppRouter from './router/AppRouter'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useLocation } from 'react-router-dom';
import Loader from './components/Loader';



function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
    {loading && <Loader />}
      {!loading && (
        <div>
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
            <AppRouter />
        </div>
      )}
    </>
  )
}

export default App
