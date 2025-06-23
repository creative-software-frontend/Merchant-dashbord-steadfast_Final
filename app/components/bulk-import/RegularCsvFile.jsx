// import ExcelDemoDownload from "./ExcelDemoDownload";
// import { FaFileAlt } from "react-icons/fa";
// import FileInput from "./FileInput";
// const RegularCsvFile = () => {
//     return (
//         <div>
//               <div className="bg-gray-100 min-h-screen md:pt-8 ">
//                  <div className="container mx-auto  md:pb-8">
//                     <h1 className="text-2xl font-bold text-primary mb-2 md:mb-0 md:mt-2 ">
//                     Import   File  (XLXS)
//                     </h1>
//                  </div>
//                  <div className="bg-primary ">
//                    <div className="flex items-center gap-5 p-4 md:p-8">
//                     <h1 className="text-2xl font-medium text-primary  text-start ">
//                     Format :
//                     </h1>
//                     <button className="bg-primary cursor-pointer border border-gray font-semibold flex items-center px-6 gap-2 text-secondary py-2"><FaFileAlt className="text-primary-active"/> xlsx</button>
//                    </div>
//                    <div className="grid grid-cols-1 md:grid-cols-2">
//                     <FileInput/>
//                     <ExcelDemoDownload/>
//                    </div>
//                  </div>
//               </div>
//         </div>
//     );
// };

// export default RegularCsvFile;




'use client'
import React, { useState } from 'react';
import { FaFilePdf, FaTimes } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegularCsvFile = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.size <= 5 * 1024 * 1024) {
      setFile(selectedFile);
      setUploading(true);
      setTimeout(() => setUploading(false), 2000);
    }
  };

  const removeFile = () => {
    setFile(null);
    setUploading(false);
  };

  const handleDownloadSample = () => {
    if (!file) {
      toast.error("Please upload a file before downloading the sample!");
      return;
    }
    const sampleContent = "Product Name,Price,Quantity\nSample,10.00,5";
    const blob = new Blob([sampleContent], { type: "text/csv" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "sample.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleImport = () => {
    if (!file) {
      toast.error("No file uploaded. Please upload a CSV file before importing!");
      return;
    }
    toast.success(`File "${file.name}" imported successfully!`);
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6 bg-white  rounded-md shadow-sm">
      <ToastContainer position="top-right" autoClose={3000} />

      <h2 className="text-lg font-semibold mb-1">Upload Regular csv file</h2>
      <p className="text-sm text-gray-500 mb-4">Upload a Regular  CSV to import products</p>

      <div className="border border-dashed border-gray-400 p-6 rounded-md text-center bg-gray-50">
        <div className="flex justify-center mb-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/337/337946.png"
            alt="file"
            className="w-12 h-12"
          />
        </div>
        <p className="text-sm font-medium mb-1">
          Drag CSV here to import product information
        </p>
        <p className="text-xs text-gray-500 mb-2">or click to browse, up to (5 MB max)</p>
        <label className="cursor-pointer inline-block px-4 py-2 bg-gray-200 rounded text-sm hover:bg-gray-300">
          Browse File
          <input type="file" className="hidden" onChange={handleFileChange} />
        </label>
      </div>

      {file && (
        <div className="mt-4 flex items-center justify-between bg-gray-100 p-3 rounded border">
          <div className="flex items-center gap-3">
            <FaFilePdf className="text-red-600 text-xl" />
            <div>
              <p className="text-sm font-medium">{file.name}</p>
              <p className="text-xs text-gray-500">
                {uploading ? 'Uploading...' : 'Ready to import'} • {(file.size / 1024).toFixed(1)} KB
              </p>
              {uploading && (
                <div className="w-full bg-gray-200 rounded h-2 mt-1">
                  <div className="bg-blue-500 h-2 rounded w-1/3 animate-pulse" />
                </div>
              )}
            </div>
          </div>
          <button onClick={removeFile}>
            <FaTimes className="text-gray-500 hover:text-red-600 cursor-pointer" />
          </button>
        </div>
      )}

      <div className="flex items-center justify-center mt-5 mb-3 relative">
        <span className="absolute left-0 w-full border-t border-gray-300" />
        <span className="bg-white px-2 text-sm text-gray-500 z-10">OR import from google sheet</span>
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="https://"
          className="w-full border  px-4 py-2 rounded text-sm focus:outline-none"
        />
        <button
          className="bg-gray-200 text-sm px-4 py-2 cursor-pointer rounded hover:bg-gray-300"
          onClick={handleDownloadSample}
        >
          Download
        </button>
        <button
          className="button-primary cursor-pointer text-white text-sm px-4 py-2 rounded "
          onClick={handleImport}
        >
          Import
        </button>
      </div>
    </div>
  );
};

export default RegularCsvFile;
