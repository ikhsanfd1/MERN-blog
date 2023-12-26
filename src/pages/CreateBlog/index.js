import React, { useEffect, useState } from 'react';
import { Button, Input, Link, Textarea, UploadImage } from '../../components';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  postToAPI,
  setForm,
  setImgPreview,
  updateToAPI,
} from '../../config/redux/action';
import Axios from 'axios';

const CreateBlog = () => {
  const { id } = useParams();
  const { form, imgPreview } = useSelector((state) => state.createBlogReducer);
  const { title, body } = form;
  const [isUpdate, setIsUpdate] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    console.log('params: ', id);
    if (id) {
      setIsUpdate(true);
      Axios.get(`http://localhost:4000/v1/blog/post/${id}`)
        .then((res) => {
          const data = res.data.data;
          console.log('res: ', data);
          dispatch(setForm('title', data.title));
          dispatch(setForm('body', data.body));
          dispatch(setImgPreview(`http://localhost:4000/${data.image}`));
        })
        .catch((err) => console.log(err));
    }
  }, [dispatch, id]);

  const onSubmit = () => {
    if (isUpdate) {
      console.log('update data');
      updateToAPI(form, id);
    } else {
      console.log('create data');
      postToAPI(form);
    }
  };

  const onImageUpload = (e) => {
    const file = e.target.files[0];
    dispatch(setForm('image', file));
    dispatch(setImgPreview(URL.createObjectURL(file)));
  };
  return (
    <div className="flex flex-col mb-10 pt-10">
      <div className=" flex justify-start pb-8">
        <Link title="Kembali" onClick={() => navigate('/')} />
      </div>
      <p className="text-xl font-semibold m-0 mb-7 text-[#231942]">
        {isUpdate ? 'Update' : 'Create New'} Blog Post
      </p>
      <Input
        label="Post Title"
        value={title}
        onChange={(e) => dispatch(setForm('title', e.target.value))}
      />
      <UploadImage onChange={(e) => onImageUpload(e)} img={imgPreview} />
      <Textarea
        value={body}
        onChange={(e) => dispatch(setForm('body', e.target.value))}
      />
      <div className="w-48 ml-auto mr-0">
        <Button title={isUpdate ? 'Update' : 'Simpan'} onClick={onSubmit} />
      </div>
    </div>
  );
};

export default CreateBlog;
