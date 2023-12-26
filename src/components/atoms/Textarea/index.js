import React from 'react';

const Textarea = ({ ...rest }) => {
  return (
    <div className="mb-5">
      <textarea
        className="text-area w-full box-border rounded-lg p-4 outline-none min-h-32 border border-[#231942]"
        {...rest}
      ></textarea>
    </div>
  );
};

export default Textarea;
