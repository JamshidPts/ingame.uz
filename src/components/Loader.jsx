import React from 'react';
import { CircleLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-100 z-50">
      <CircleLoader color="#D3176D" size={70} />
    </div>
  );
};

export default Loader;
