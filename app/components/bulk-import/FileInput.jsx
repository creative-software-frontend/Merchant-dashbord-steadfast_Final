"use client";
import { useState } from "react";
import { FiUpload } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

const FileInput = () => {
  const [image, setImage] = useState("");

  const handleUploadImage = () => {
    document.getElementById("image_input").click();
  };

  const handleFileChange = (e) => {
    e.preventDefault();
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImage(imageURL);
    }
  };

  return (
    <div className="p-8 mb-4 flex  flex-col gap-5 items-center">
        
      <input
        type="file"
        name="image"
        id="image_input"
        className="hidden"
        onChange={handleFileChange}
      />
      {image === "" ? (
        <div
          className="w-full md:w-[90%] flex items-center justify-center flex-col gap-4 border-gray border rounded-md py-6 cursor-pointer"
          onClick={handleUploadImage}
        >
          <FiUpload className="text-[2rem] text-secondary" />
          <p className="text-secondary">Browse to upload you file</p>
        </div>
      ) : (
        <div className="relative w-full md:w-[80%] h-[300px]">
          <img src={image} alt="image" className="w-full h-full object-cover" />
          <MdDelete
            className="text-[2rem] text-white bg-red-600 p-1 absolute top-0 right-0 cursor-pointer"
            onClick={() => setImage("")}
          />
        </div>
        
      )}
      <button className="px-6 py-2 button-primary cursor-pointer text-white rounded-sm text-md font-medium whitespace-nowrap">Submit</button>
    </div>
  );
};

export default FileInput;
