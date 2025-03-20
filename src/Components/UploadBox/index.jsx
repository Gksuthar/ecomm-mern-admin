import React, { useState } from "react";
import { FaRegImages } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Button } from "@mui/material";
import { IoMdCloudUpload } from "react-icons/io";
import axios from 'axios'
// app.use(cors());
import toast, { Toaster } from 'react-hot-toast';

const UploadBox = ({ multiple = false, onFileUpload }) => {
  const [previewImages, setPreviewImages] = useState([]);
  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    const imageUrls = files.map((file) => ({
      url: URL.createObjectURL(file),
      file: file,
    }));

    setPreviewImages((prev) => [...prev, ...imageUrls]); 

    if (onFileUpload) {
      onFileUpload(files); 
    }
  };

  const removeImage = (index) => {
    setPreviewImages((prev) => prev.filter((_, i) => i !== index));
  };

  const uplaodImages = async () => {
    try {
      const formData = new FormData();
      previewImages.forEach((image, index) => {
        formData.append("image", image.file); 
      });
  
      const response = await axios.post(
        `https://mernecommbackend-d6vr.onrender.com/api/product/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
  
      if (response.status === 200) {
        toast.success('Images Uploaded!');

        console.log("Images Uploaded", response.data);
      }
    } catch (error) {
      console.log("Upload failed:", error);
    }
  };
  
  return (
    <>
      <div className="w-[100%] border overflow-scroll">
        <div className="flex flex-col items-center border">
          <div className="mt-4 flex flex-shrink-0 gap-4 border">
            {previewImages.map((image, index) => (
              <div key={index} className="uploadWrapper relative h-32 rounded-md shadow-md">
                <span
                  className="absolute top-[-5px] right-[-5px] w-6 h-6 flex items-center bg-red-700 rounded-full cursor-pointer"
                  onClick={() => removeImage(index)}
                >
                  <IoCloseOutline className="text-white text-lg" />
                </span>
                <LazyLoadImage
                  alt="uploaded preview"
                  src={image.url}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            ))}
            <div className="uploadBox w-32 h-32 p-4 rounded-md border border-dashed border-gray-300 bg-gray-100 hover:bg-gray-200 cursor-pointer flex items-center justify-start flex-col relative">
              <FaRegImages className="text-[50px] opacity-35" />
              <h3 className="text-[16px] text-center">Upload Image</h3>
              <input
                type="file"
                className="absolute top-0 left-0 h-full w-full opacity-0 cursor-pointer"
                accept="image/*"
                multiple={multiple}
                onChange={handleFileChange}
              />
            </div>
          </div>
        </div>
        
        <Button onClick={uplaodImages} className='text-center'>
        <IoMdCloudUpload className='text-2xl'/>
          </Button>
      </div>
    </>
  );
};

export default UploadBox;