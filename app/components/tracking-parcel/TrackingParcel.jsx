
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const TrackingParcel = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (!query.trim()) return;
    router.push(
      `/dashboard/tracking-parcel/details?tracking_id=${encodeURIComponent(
        query
      )}`
    );
    setQuery("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h2 className="text-center text-primary text-2xl font-medium">
        Track Your Consignment
      </h2>
      <p className="text-center text-secondary text-md md:text-lg font-medium">
        Now you can easily track your consignment
      </p>

      <div className="relative mt-6 flex">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          type="text"
          placeholder="Search Tracking ID here..."
          className="flex-grow px-4 py-3 border bg-white border-gray-300 rounded-l-md focus:outline-none"
        />
        <button
          onClick={handleSearch}
          className="button-primary cursor-pointer text-white px-6 py-2 rounded-r-md"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default TrackingParcel;
