// "use client";
// import { useState } from "react";

// const ParcelTable = () => {
//   const tabs = [
//     "All",
//     "List by Date",
//     "Pending",
//     "Approval Pending",
//     "Delivered",
//     "Partly Delivered",
//     "Cancelled",
//     "In Review",
//     "Pick-n-Drop",
//   ];

//   const [activeTab, setActiveTab] = useState("Pending");

//   return (
//     <div className="p-4 md:p-6 mt-8">
//       <h1 className="text-xl font-semibold mb-4">All Parcel</h1>

//       <div className="flex flex-wrap gap-2 mb-6">
//         {tabs.map((tab, idx) => (
//           <button
//             key={idx}
//             onClick={() => setActiveTab(tab)}
//             className={`px-4 py-2 cursor-pointer rounded border text-sm font-medium transition-colors duration-200 ${
//               activeTab === tab
//                 ? "button-primary text-primary border-gray"
//                 : "bg-primary text-primary border-gray"
//             }`}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       <div className="w-full overflow-x-auto bg-primary">
//         <table className="w-full table-auto text-sm text-left text-gray-500">
//           <thead className="border-b border-gray">
//             <tr className="text-primary">
//               <th className="px-4 py-3">SL#</th>
//               <th className="px-4 py-3">Date</th>
//               <th className="px-4 py-3">Id</th>
//               <th className="px-4 py-3">Customer Name</th>
//               <th className="px-4 py-3">Payment</th>
//               <th className="px-4 py-3">Charge</th>
//               <th className="px-4 py-3">Status</th>
//               <th className="px-4 py-3">Details</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td className="px-4 py-3">1</td>
//               <td className="px-4 py-3">2025-05-18</td>
//               <td className="px-4 py-3">#12345</td>
//               <td className="px-4 py-3">John Doe</td>
//               <td className="px-4 py-3">Paid</td>
//               <td className="px-4 py-3">$5.00</td>
//               <td className="px-4 py-3">Delivered</td>
//               <td className="px-4 py-3">View</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ParcelTable;




"use client";
import { useEffect, useState } from "react";

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

   useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("/api/confirm-orders");
        const data = await res.json();
        setOrders(data.confirmed_order_list || []);
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

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
       {
        loading ? (
          <p className="p-4">Loading...</p>
        ):(
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
           {
            orders.length === 0 ? (
               <tr>
                  <td colSpan={6} className="px-4 py-3 text-center">
                    No data found.
                  </td>
                </tr>
            ):(
              orders.map((order,idx)=>{
           return(
             <tr key={`${order.id}-${idx}`}>
              <td className="px-4 py-3">{idx + 1}</td>
             <td className="px-4 py-3">{order.tracking_id}</td>
                    <td className="px-4 py-3">{order.customer_name}</td>
                    <td className="px-4 py-3">{order.customer_phone}</td>
                    <td className="px-4 py-3">{order.customer_address}</td>
                    <td className="px-4 py-3">{order.delivery}</td>
                    <td className="px-4 py-3">{order.collection}</td>
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3">{order.status}</td>
            </tr>
           )
              })
            )
           }
          </tbody>
        </table>
        )
       }
      </div>
    </div>
  );
};

export default ParcelTable;


