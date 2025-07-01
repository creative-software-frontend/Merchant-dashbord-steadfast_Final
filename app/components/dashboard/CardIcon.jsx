"use client";
import Image from "next/image";
import Link from "next/link";

const cardData = [
  {
    title: "Add Parcel",
    href: "/dashboard/add-parcel",
    icon: "/img/card-icon/card_md_plus.png",
  },
  {
    title: "Pickup Request",
    href: "#",
    icon: "/img/card-icon/card_md_pick_req.png",
  },
  {
    title: "Payment Request",
    href: "#",
    icon: "/img/card-icon/card_md_wallet.png",
  },
  {
    title: "Delivery List",
    href: "#",
    icon: "/img/card-icon/card_md_support.png",
  },
  {
    title: "Manage Area",
    href: "/landing/coverage-area",
    icon: "/img/card-icon/card_md_today_enrty.png",
  },
  { title: "Settings", href: "#", icon: "/img/card-icon/card_md_support.png" },
  {
    title: "Track Parcel",
    href: "#",
    icon: "/img/card-icon/card_md_location.png",
  },
  { title: "Settings", href: "#", icon: "/img/card-icon/card_md_support.png" },
];

const CardIcon = ({ onCardClick }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {cardData.map((card, index) => (
        <Link
          key={index}
          href={card.href}
          target={card.title === "Manage Area" ? "_blank" : undefined}
        >
          <div
            onClick={() => onCardClick(card.title)}
            className="bg-primary p-4 border border-gray rounded-lg cursor-pointer flex flex-col items-center"
          >
            <div className="bg-[#e0f7f9] p-2.5 rounded-xl flex items-center justify-center">
              <Image
                src={card.icon}
                alt={`${card.title} Icon`}
                width={32}
                height={32}
              />
            </div>
            <h3 className="text-[13px] font-medium text-center pt-2 text-primary">
              {card.title}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CardIcon;
