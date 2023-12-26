import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between py-5 px-10 items-center bg-[#f45b6a]">
      <p className="logo-app text-xl font-bold text-white m-0">MERN-Blog</p>
      <p
        className="menu-item text-lg text-white underline cursor-pointer m-0"
        onClick={() => navigate('/login')}
      >
        Logout
      </p>
    </div>
  );
};

export default Header;
