import React from 'react';
import { CircleLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div className="fixed lg:absolute inset-0 flex items-center justify-center bg-black z-20">
      <CircleLoader color="#D3176D" size={70} />
    </div>
  );
};

export default Loader;