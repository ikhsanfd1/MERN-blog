import React from 'react';
import { Button } from '../../atoms';
import { useNavigate } from 'react-router-dom';
import { postedAt } from '../../../utils';

const BlogItem = (props) => {
  const navigate = useNavigate();
  const { image, title, name, date, body, _id, onDelete } = props;

  const truncatedBody = body.length > 210 ? `${body.slice(0, 210)}...` : body;

  return (
    <div className="blog-item w-2/5 rounded-lg mb-3 overflow-hidden shadow-md text-[#231942]">
      <img
        className="image-thumb w-full h-48 object-cover"
        src={image}
        alt="post"
      />
      <div className="flex justify-between items-center px-4 py-1">
        <p className="title m-0 text-lg font-bold">{title}</p>
        <div className="edit-wrapper flex items-center">
          <p
            className="edit font-bold text-blue-500 cursor-pointer m-0 mr-3"
            onClick={() => navigate(`/create-blog/${_id}`)}
          >
            Edit
          </p>{' '}
          |{' '}
          <p
            className="delete font-bold text-red-500 m-0 ml-3 cursor-pointer"
            onClick={() => onDelete(_id)}
          >
            Delete
          </p>
        </div>
      </div>
      <div className="content-detail p-4">
        <p className="author m-0 mt-1 text-sm">
          {name} - {postedAt(date)}
        </p>
        <p className="body m-0 mt-4 text-sm">{truncatedBody}</p>
        <div className="flex pt-5">
          <Button
            title="View Detail"
            onClick={() => navigate(`/detail-blog/${_id}`)}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
