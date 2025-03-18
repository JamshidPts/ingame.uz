import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <>
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
    </>
  )
}

export default App