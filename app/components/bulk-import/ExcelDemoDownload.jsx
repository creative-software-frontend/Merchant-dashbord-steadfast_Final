"use client";
import Image from "next/image";
import { FaCheckSquare } from "react-icons/fa";
const ExcelDemoDownload = () => {
  const items = [
    "Uploaded file type must be .xlsx format.",
    "Uploaded file must be contain Invoice, Name, Address, Phone, Amount, Note Column name",
    "Only first excel sheets data will be imported. Next sheets data will not be imported",
    "Demo Picture:",
  ];
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/img/import-demo.xlsx";
    link.download = "import-demo.xlsx";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-primary">
      <div className="space-y-4  ">
        {items.map((item, index) => (
          <div key={index} className="flex items-start gap-2">
            <FaCheckSquare className="text-primary-active mt-1 text-xl" />
            <p className="text-secondary">{item}</p>
          </div>
        ))}

        <Image src="/img/excel.png" alt="" width={500} height={500} />
      </div>

      <button
        onClick={handleDownload}
        className=" py-2 mt-2 text-primary-active font-bold cursor-pointer  transition-colors flex items-center"
      >
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
        Download Demo Import File: import-demo.xlsx
      </button>
    </div>
  );
};

export default ExcelDemoDownload;
