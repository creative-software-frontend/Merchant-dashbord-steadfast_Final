const TrackingParcel = () => {
  return (
    <div>
      <h2 className="text-center text-primary text-2xl font-medium">
        Track Your Consignment{" "}
      </h2>
      <p className="text-center text-secondary text-md md:text-lg  font-medium">
        Now you can easily track your consignment{" "}
      </p>
      <div className="flex max-w-xl mx-auto mt-10">
        <input
          type="text"
          placeholder="Search Tracking Code here..."
          className="flex-grow px-4 py-3 border bg-primary border-gray rounded-l-md text-secondary focus:outline-none"
        />
        <button className="button-primary  px-6 py-2 rounded-r-md cursor-pointer">
          Search
        </button>
      </div>
    </div>
  );
};

export default TrackingParcel;
