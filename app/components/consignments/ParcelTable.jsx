"use client";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ParcelTable = () => {
  const tabs = [
    "All",
    "List by Date",
    "Pending",
    "Approval Pending",
    "Delivered",
    "Partly Delivered",
    "Cancelled",
    "In Review",
    "Pick-n-Drop",
  ];

  const [activeTab, setActiveTab] = useState("Pending");
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  const [paginationGroup, setPaginationGroup] = useState(1); // 1 group = 5 pages

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("/api/confirm-orders");
        const data = await res.json();
        console.log("API Data:", data);
        setOrders(data.confirmed_order_list || []);
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  // Pagination calculations
  const totalPages = Math.ceil(orders.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedOrders = orders.slice(startIndex, startIndex + itemsPerPage);

  const handlePreviousPageGroup = () => {
    if (paginationGroup > 1) {
      setPaginationGroup(paginationGroup - 1);
      setCurrentPage((paginationGroup - 2) * 5 + 1);
    }
  };

  const handleNextPageGroup = () => {
    const maxGroup = Math.ceil(totalPages / 5);
    if (paginationGroup < maxGroup) {
      setPaginationGroup(paginationGroup + 1);
      setCurrentPage(paginationGroup * 5 + 1);
    }
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const renderPageNumbers = () => {
    const pages = [];
    const start = (paginationGroup - 1) * 5 + 1;
    const end = Math.min(start + 4, totalPages);

    for (let i = start; i <= end; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          className={`mx-2 px-2.5 py-1 rounded-full text-sm font-medium transition ${
            currentPage === i
              ? "button-primary cursor-pointer text-white"
              : "bg-white text-primary-active cursor-pointer hover:bg-blue-100"
          }`}
        >
          {i}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className="p-4 md:p-6 mt-8">
      <h1 className="text-xl font-semibold mb-4">Consignments List</h1>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => {
              setActiveTab(tab);
              setCurrentPage(1);
              setPaginationGroup(1);
            }}
            className={`px-4 py-2 rounded border text-sm font-medium transition-colors ${
              activeTab === tab
                ? "bg-blue-100 button-primary cursor-pointer"
                : "bg-white text-gray-700 cursor-pointer border-gray"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="w-full overflow-x-auto bg-primary">
        {loading ? (
          <p className="p-4">Loading...</p>
        ) : (
          <table className="w-full table-auto text-sm text-left text-gray-500">
            <thead className="border-b border-gray">
              <tr className="text-primary">
                <th className="px-4 py-3">SL#</th>
                <th className="px-4 py-3">Tracking ID</th>
                <th className="px-4 py-3">Customer Name</th>
                <th className="px-4 py-3">Customer Phone</th>
                <th className="px-4 py-3">Customer Address</th>
                <th className="px-4 py-3">Delivery Charge</th>
                <th className="px-4 py-3">Collect</th>
                <th className="px-4 py-3">Remarks</th>
                <th className="px-4 py-3">Order Status</th>
                <th className="px-4 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {paginatedOrders.length === 0 ? (
                <tr>
                  <td colSpan={10} className="px-4 py-3 text-center">
                    No data found.
                  </td>
                </tr>
              ) : (
                paginatedOrders.map((order, idx) => (
                  <tr key={`${order.id}-${idx}`}>
                    <td className="px-4 py-3">{startIndex + idx + 1}</td>
                    <td className="px-4 py-3">{order.tracking_id}</td>
                    <td className="px-4 py-3">{order.customer_name}</td>
                    <td className="px-4 py-3">{order.customer_phone}</td>
                    <td className="px-4 py-3">{order.customer_address}</td>
                    <td className="px-4 py-3">{order.delivery}</td>
                    <td className="px-4 py-3">{order.collection}</td>
                    <td className="px-4 py-3">{order.remarks || ""}</td>
                    <td className="px-4 py-3">{order.status}</td>
                    <td className="px-4 py-3">-</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        )}
      </div>

      {/* Pagination Controls */}
      {orders.length > itemsPerPage && (
        <div className="flex justify-center items-center mt-6">
          <button
            onClick={handlePreviousPageGroup}
            disabled={paginationGroup === 1}
            className="mx-1 px-2.5 py-2 rounded-full bg-white text-primary-active cursor-pointer hover:bg-blue-100 disabled:opacity-50"
          >
            <FaChevronLeft />
          </button>
          {renderPageNumbers()}
          <button
            onClick={handleNextPageGroup}
            disabled={paginationGroup * 5 >= totalPages}
            className="mx-1 px-2.5 py-2 rounded-full bg-white text-primary-active cursor-pointer hover:bg-blue-100 disabled:opacity-50"
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default ParcelTable;
