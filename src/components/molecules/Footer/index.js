import React from 'react';
import {
  DiscordIcon,
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LogoIkhsanFd,
  TelegramIcon,
} from '../../../assets';

const Icon = ({ img }) => {
  return (
    <div className="icon-wrapper bg-white p-2 rounded-full my-0 mx-2">
      <img
        className="icon-medsos w-7 h-7 object-contain cursor-pointer"
        src={img}
        alt="icon"
      />
    </div>
  );
};
const Footer = () => {
  return (
    <div>
      <div className="footer flex justify-between items-center py-1 px-10 bg-[#f45b6a]">
        <div>
          <img
            className="logo w-16 h-16 object-contain"
            src={LogoIkhsanFd}
            alt="logo"
          />
        </div>
        <div className="social-wrapper flex">
          <Icon img={FacebookIcon} />
          <Icon img={InstagramIcon} />
          <Icon img={TelegramIcon} />
          <Icon img={DiscordIcon} />
          <Icon img={GithubIcon} />
        </div>
      </div>
      <div className="copyright py-1 px-0 bg-red-500">
        <p className="text-white text-sm text-center m-0">
          <a href="https://www.linkedin.com/in/m-ikhsan-fadhillah-44542a262/">
            Ikhsan FD
          </a>
          . | &copy; 2024.
        </p>
      </div>
    </div>
  );
};

export default Footer;
