import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CreateBlog from '../CreateBlog';
import DetailBlog from '../DetailBlog';
import Home from '../Home';
import { Footer, Header } from '../../components';

const MainApp = () => {
  return (
    <div
      className="main-app-wrapper flex flex-col min-h-screen"
      style={{
        background: 'linear-gradient(to left, #f7797d, #fbd786, #c6ffdd)',
      }}
    >
      <Header />
      <div className="content-wrapper flex-1 max-w-6xl m-auto w-full">
        <Routes>
          <Route path="/create-blog/:id?" element={<CreateBlog />} />
          <Route path="/detail-blog/:id" element={<DetailBlog />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default MainApp;
