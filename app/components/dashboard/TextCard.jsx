"use client";
import Link from "next/link";

const textCardData = [
  { label: "Consignments", href: "/dashboard/consignments" },
  { label: "Delivered", href: "#" },
  { label: "Pending", href: "#" },
  { label: "Returned", href: "#" },
  { label: "Cancelled", href: "#" },
  { label: "In Transit", href: "#" },
];

const TextCard = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 pt-10">
      {textCardData.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className="bg-[#CCF0E9] py-6 rounded-lg  transition"
        >
          <p className="text-center text-primary font-medium text-[14px]">
            {item.label}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default TextCard;
