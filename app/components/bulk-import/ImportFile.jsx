import ExcelDemoDownload from "./ExcelDemoDownload";
import { FaFileAlt } from "react-icons/fa";
import FileInput from "./FileInput";
const ImportFile = () => {
    return (
        <div>
              <div className="bg-gray-100 min-h-screen md:pt-8 ">
                 <div className="container mx-auto  md:pb-8">
                    <h1 className="text-2xl font-bold text-primary mb-2 md:mb-0 md:mt-2 ">
                    Import   File  (XLXS)
                    </h1>
                 </div>
                 <div className="bg-primary ">
                   <div className="flex items-center gap-5 p-4 md:p-8">
                    <h1 className="text-2xl font-medium text-primary  text-start ">
                    Format :
                    </h1>
                    <button className="bg-primary cursor-pointer border border-gray font-semibold flex items-center px-6 gap-2 text-secondary py-2"><FaFileAlt className="text-primary-active"/> xlsx</button>
                   </div>
                   <div className="grid grid-cols-1 md:grid-cols-2">
                    <FileInput/>
                    <ExcelDemoDownload/>
                   </div>
                 </div>
              </div>
        </div>
    );
};

export default ImportFile;