import React from 'react';
import { Button, Gap, Input, Link } from '../../components';
import { LoginBg } from '../../assets';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-full box-border">
      <div className="flex-1 h-screen">
        <img
          src={LoginBg}
          alt="Register"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-center w-96 min-h-screen p-8 text-[#231942]">
        <p className="text-xl font-bold">Login</p>
        <Gap height={18} />
        <Input label="Email" placeholder="Email" />
        <Gap height={18} />
        <Input label="Password" placeholder="Password" />
        <Gap height={50} />
        <Button title="Login" onClick={() => navigate('/')} />
        <Gap height={60} />
        <div className="flex">
          <p className="pt-0">Belum punya akun?</p>
          <Gap width={5} />
          <Link title="Daftar" onClick={() => navigate('/register')} />
        </div>
      </div>
    </div>
  );
};

export default Login;
