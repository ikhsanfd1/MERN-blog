import React from 'react';

const UploadImage = ({ img, ...rest }) => {
  return (
    <div className="my-5">
      {img && (
        <img
          className="block w-48 h-48 object-cover mb-4"
          src={img}
          alt="dummy"
        />
      )}
      <input type="file" {...rest} className="rounded-lg text-[#231942]" />
    </div>
  );
};

export default UploadImage;
