import React, { forwardRef } from 'react';

export const Input = forwardRef(({ className, ...props }, ref) => {
  return (
    <input 
      className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`} 
      ref={ref}
      {...props} 
    />
  );
});

Input.displayName = 'Input';

