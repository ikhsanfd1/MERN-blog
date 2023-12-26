import React from 'react';

const Input = ({ label, ...rest }) => {
  return (
    <div className="input-wrapper">
      <p className="label text-lg text-[#231942] m-0 mb-2">{label}</p>
      <input
        type="text"
        className="input border border-[#231942] p-3 rounded-lg outline-none w-full box-border"
        {...rest}
      />
    </div>
  );
};

export default Input;
