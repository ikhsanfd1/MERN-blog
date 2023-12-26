import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BlogItem, Button, Gap } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { setDataBlog } from '../../config/redux/action';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import Axios from 'axios';

const Home = () => {
  const [counter, setCounter] = useState(1);
  const { dataBlog, page } = useSelector((state) => state.homeReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDataBlog(counter));
  }, [counter, dispatch]);

  const navigate = useNavigate();

  const previous = () => {
    setCounter(counter <= 1 ? 1 : counter - 1);
  };

  const next = () => {
    setCounter(counter === page.totalPage ? page.totalPage : counter + 1);
  };

  const confirmDelete = (id) => {
    confirmAlert({
      title: 'Confirm to delete',
      message: 'Apakah Anda Yakin ingin menghapus Blog ini?',
      buttons: [
        {
          label: 'Ya',
          onClick: () => {
            Axios.delete(`http://localhost:4000/v1/blog/post/${id}`)
              .then((res) => {
                dispatch(setDataBlog(counter));
              })
              .catch((err) => console.log('err: ', err));
          },
        },
        {
          label: 'Tidak',
          onClick: () => console.log('user tidak setuju'),
        },
      ],
    });
  };

  return (
    <div className="home-page-wrapper pt-10">
      <div className="create-wrapper w-32 mr-0 ml-auto">
        <Button title="create blog" onClick={() => navigate('/create-blog')} />
      </div>
      <div className="content-wrapper flex flex-wrap box-border gap-1 mt-8 justify-evenly">
        {dataBlog.map((blog) => {
          return (
            <BlogItem
              key={blog._id}
              image={`http://localhost:4000/${blog.image}`}
              title={blog.title}
              body={blog.body}
              name={blog.author.name}
              date={blog.createdAt}
              _id={blog._id}
              onDelete={confirmDelete}
            />
          );
        })}
      </div>
      <Gap height={25} />
      <div className="pagination w-96 flex justify-center m-auto">
        <Button title="Previous" onClick={previous} />
        <Gap width={20} />
        <p className="text-page text-center font-bold m-0 w-80 text-4xl text-[#231942]">
          {page.currentPage} / {page.totalPage}
        </p>
        <Gap width={20} />
        <Button title="Next" onClick={next} />
      </div>
      <Gap height={25} />
    </div>
  );
};

export default Home;
