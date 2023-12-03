import React from 'react';
import toast from 'react-hot-toast';
import { DSA } from '../assets/icons';

const ToastMessage = ({ message }) => {
  return toast.custom((t) => (
    <div
      className={`${
        t.visible ? 'animate-enter' : 'animate-leave'
      }  bg-gray-800 bg-opacity-30 p-3  text-slate-gray border-green-300   font-palanquin font-extrabold shadow-lg rounded-lg flex flex-row justify-between items-center `}
    >
      <img src={DSA} className="w-[50px] h-[50px]" />
      {message}
    </div>
  ));
};

const ToastError = ({ errorMessage }) => {
  return toast.custom((t) => (
    <div
      className={`${
        t.visible ? 'animate-enter' : 'animate-leave'
      }  bg-gray-800 bg-opacity-30 p-3  text-slate-gray border-red-300   font-palanquin font-extrabold shadow-lg rounded-lg flex flex-row justify-between items-center `}
    >
      <img src={DSA} className="w-[50px] h-[50px]" />
      {errorMessage}
    </div>
  ));
};

export { ToastMessage, ToastError };
