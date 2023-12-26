import React, { useEffect, useState } from 'react';
import { Link } from '../../components';
import { useNavigate, useParams } from 'react-router-dom';
import Axios from 'axios';
import { postedAt } from '../../utils';

const DetailBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({});

  useEffect(() => {
    Axios.get(`http://localhost:4000/v1/blog/post/${id}`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (data.author) {
    return (
      <div className="detail-blog-wrapper text-[#231942] my-12">
        <div className=" flex justify-start pb-8">
          <Link title="Kembali" onClick={() => navigate('/')} />
        </div>
        <img
          className="img-cover w-full h-80 object-cover"
          src={`http://localhost:4000/${data.image}`}
          alt="thumb"
        />
        <p className="blog-title text-3xl font-bold m-0 pt-10">{data.title}</p>
        <p className="blog-author text-lg m-0 py-3">
          {data.author.name} - {postedAt(data.createdAt)}
        </p>
        <p className="blog-body text-lg leading-9">{data.body}</p>
      </div>
    );
  }
  return <p>Loading data ...</p>;
};

export default DetailBlog;
