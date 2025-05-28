
import ImportFile from "../../components/bulk-import/ImportFile";
import FloatingTab from "../../components/consignments/FloatingTab";
const BulkImportPage = () => {
    return (
        <div>
            <div className="fixed left-1/2 transform -translate-x-1/2 top-6 z-40   hidden md:block">
                  <FloatingTab/>
                </div>
          <ImportFile/>
        </div>
    );
};

export default BulkImportPage;
