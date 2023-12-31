import React from 'react';

const Alert = ({ message, alertColor }) => {
  const containerStyle = `
    fixed top-0 left-0 px-2 w-full sm:flex sm:justify-center
  `;

  const alertStyle = `
    bg-slate-900 border-t-4 border-teal-500 rounded-lg text-white px-4 py-3 shadow-md max-w-lg
  `;

  return (
    <div className={containerStyle}>
      <div className={alertStyle} role="alert">
        <div className="flex">
          <div className="py-1">
            <svg
              className={`fill-current h-6 w-6 text-${alertColor}-500 mr-4`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
            </svg>
          </div>
          <div>
            <p className="text-md">{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;
