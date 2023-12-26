import React from 'react';
import { RegisterBg } from '../../assets';
import { Button, Gap, Input, Link } from '../../components';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen box-border overflow-hidden">
      <div className="flex-1 h-screen">
        <img
          src={RegisterBg}
          alt="Register"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-center w-96 p-8 box-border">
        <p className="text-xl font-bold text-[#231942]">Register</p>
        <Gap height={18} />
        <Input label="Fullname" placeholder="Fullname" />
        <Gap height={18} />
        <Input label="Email" placeholder="Email" />
        <Gap height={18} />
        <Input label="Password" placeholder="Password" />
        <Gap height={50} />
        <Button title="Register" onClick={() => navigate('/login')} />
        <Gap height={50} />
        <Link title="Kembali ke Login" onClick={() => navigate('/login')} />
      </div>
    </div>
  );
};

export default Register;
