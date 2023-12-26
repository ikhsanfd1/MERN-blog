import React from 'react';

const Button = ({ title, ...rest }) => {
  return (
    <button
      className="button w-full box-border p-3 text-lg rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
      {...rest}
    >
      {title}
    </button>
  );
};

export default Button;
