"use client";
import { useState } from "react";

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

  return (
    <div className="p-4 md:p-6 mt-8">
      <h1 className="text-xl font-semibold mb-4">All Parcel</h1>

      <div className="flex flex-wrap gap-2 mb-6">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 cursor-pointer rounded border text-sm font-medium transition-colors duration-200 ${
              activeTab === tab
                ? "button-primary text-primary border-gray"
                : "bg-primary text-primary border-gray"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="w-full overflow-x-auto bg-primary">
        <table className="w-full table-auto text-sm text-left text-gray-500">
          <thead className="border-b border-gray">
            <tr className="text-primary">
              <th className="px-4 py-3">SL#</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Id</th>
              <th className="px-4 py-3">Customer Name</th>
              <th className="px-4 py-3">Payment</th>
              <th className="px-4 py-3">Charge</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-3">1</td>
              <td className="px-4 py-3">2025-05-18</td>
              <td className="px-4 py-3">#12345</td>
              <td className="px-4 py-3">John Doe</td>
              <td className="px-4 py-3">Paid</td>
              <td className="px-4 py-3">$5.00</td>
              <td className="px-4 py-3">Delivered</td>
              <td className="px-4 py-3">View</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ParcelTable;
