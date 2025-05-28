import Image from "next/image";

const cardData = [
  { title: "Add Parcel", icon: "/img/card-icon/card_md_plus.png" },
  { title: "Track Parcel", icon: "/img/card-icon/card_md_pick_req.png" },
  { title: "Pickup Request", icon: "/img/card-icon/card_md_location.png" },
  { title: "Delivery List", icon: "/img/card-icon/card_md_wallet.png" },
  { title: "Manage Area", icon: "/img/card-icon/card_md_today_enrty.png" },
  { title: "Settings", icon: "/img/card-icon/card_md_support.png" },
];

const CardIcon = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="bg-primary p-4 border border-gray rounded-lg cursor-pointer flex flex-col items-center "
        >
          <div className="bg-[#e0f7f9] p-2.5 rounded-xl flex items-center justify-center">
            <Image
              className="w-8 h-8"
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
      ))}
    </div>
  );
};

export default CardIcon;
