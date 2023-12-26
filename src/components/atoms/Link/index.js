import React from 'react';

const Link = ({ title, onClick }) => {
  return (
    <p
      className="text-center text-lg underline cursor-pointer text-[#231942]"
      onClick={onClick}
    >
      {title}
    </p>
  );
};

export default Link;
