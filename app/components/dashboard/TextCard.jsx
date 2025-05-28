
const textCardData = [
    "Consignments",
    "Delivered",
    "Pending",
    "Returned",
    "Cancelled",
    "In Transit",
  ];
  
  const TextCard = () => {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 pt-10">
        {textCardData.map((item, index) => (
          <div key={index} className="bg-[#CCF0E9] py-6 rounded-lg">
            <p className="text-center text-primary font-medium text-[14px]">{item}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default TextCard;
  