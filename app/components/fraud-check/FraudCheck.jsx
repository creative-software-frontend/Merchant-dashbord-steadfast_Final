import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { LiaDiscourse } from "react-icons/lia";
const FraudCheck = () => {
  const data = [
    {
      merchant: "AKHSARA",
      order: 2,
      delivery: 0,
      return: 0,
      successRate: "0%",
    },
    {
      merchant: "parcelion courier",
      order: 2,
      delivery: 0,
      return: 0,
      successRate: "0%",
    },
  ];

  const total = data.reduce(
    (acc, curr) => {
      acc.order += curr.order;
      acc.delivery += curr.delivery;
      acc.return += curr.return;
      return acc;
    },
    { order: 0, delivery: 0, return: 0 }
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white  p-6 w-full ">
        <h2 className="text-2xl font-bold text-center text-primary-active mb-6">
          Customer Fraud Checker
        </h2>

        <div className="flex justify-center gap-2 mb-4">
          <input
            type="text"
            placeholder="Enter Customer Phone Number"
            className="border border-gray rounded px-4 py-2 w-72 focus:outline-none"
          />
          <button className="button-primary cursor-pointer text-white px-4 py-2 rounded flex items-center gap-2">
            <FaSearch className="text-white" />
            Search
          </button>
         <Link href="/dashboard/3pl">
           <button className="button-primary cursor-pointer text-white px-4 py-2 rounded flex items-center gap-2">
            <LiaDiscourse className="text-white" />
            3Pl
          </button>
         </Link>
        </div>

        <div className="bg-green-100 text-green-800 p-4 rounded mb-4 text-sm ">
          <p className="my-2">
            This customer does not appear credible; therefore, it is advisable
            to refrain from placing any further orders.
          </p>
          <div className="text-white button-primary px-4 py-2 cursor-pointer rounded text-sm font-semibold w-fit mb-4">
            0 % Success Rate
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border text-center text-sm">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4 border">Merchant</th>
                <th className="py-2 px-4 border">Order</th>
                <th className="py-2 px-4 border">Delivery</th>
                <th className="py-2 px-4 border">Return</th>
                <th className="py-2 px-4 border">Success Rate</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index} className="bg-white">
                  <td className="py-2 px-4 border">{row.merchant}</td>
                  <td className="py-2 px-4 border">{row.order}</td>
                  <td className="py-2 px-4 border">{row.delivery}</td>
                  <td className="py-2 px-4 border">{row.return}</td>
                  <td className="py-2 px-4 border">{row.successRate}</td>
                </tr>
              ))}
              <tr className="font-semibold bg-gray-100">
                <td className="py-2 px-4 border">Total</td>
                <td className="py-2 px-4 border">{total.order}</td>
                <td className="py-2 px-4 border">{total.delivery}</td>
                <td className="py-2 px-4 border">{total.return}</td>
                <td className="py-2 px-4 border">0%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex justify-center mt-6">
          <button className="bg-gray-200 cursor-pointer hover:bg-gray-300 px-4 py-2 rounded">
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default FraudCheck;
