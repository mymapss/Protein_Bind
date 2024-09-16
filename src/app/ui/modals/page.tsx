import React from 'react';
import { PageProps } from '../../../types/page';

const Modal: React.FC<Omit<PageProps, 'id'>> = () => {
  

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-[#181818] p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold"></h3>
          <button className="text-gray-600 dark:text-gray-300">
          </button>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Modal;
