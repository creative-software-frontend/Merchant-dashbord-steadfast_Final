import Image from "next/image";
import { useTranslations } from "next-intl";
const TrackParcel = () => {
   const tParcel = useTranslations('homePage.trackParcelSection');
  return (
    <div className="px-3 -mt-10 scroll-mt-24" id="track_parcel">
      <div className="p-6 rounded-md mb-4 flex flex-col md:flex-row items-center justify-center border border-gray md:w-[70%] container mx-auto bg-primary">
        <div className="md:mr-7 mb-4 md:mb-0 text-center md:text-left text-primary">
           {tParcel('title')}
        </div>

        <div className="w-full md:w-[60%] flex flex-col md:flex-row">
          <div className="w-full relative pb-3 md:pb-0">
            <Image
              src="/img/landing/tracker.png"
              alt="Tracking icon"
              width={20}
              height={20}
              className="absolute top-4 left-3 text-secondary"
            />
            <input
              type="text"
              name="text"
              id="text"
              placeholder= {tParcel('inputLabel')}
              className="w-full text-[14px] border border-gray rounded-b-md md:rounded-r-none rounded-t-md md:rounded-tr-none md:rounded-l-md outline-none pl-10 pr-4 py-3 focus:border-primary  transition-colors duration-300"
            />
          </div>

          <button
            className="w-full md:w-[40%] font-medium text-[14px] cursor-pointer hover:bg-[#e5f7f4] text-primary-active  border border-[#00b795] rounded-b-md md:rounded-bl-none md:rounded-r-md 
                    rounded-t-md md:rounded-l-none outline-none px-4 py-3 md:py-0 transition-colors duration-300"
          >
           {tParcel('button')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrackParcel;
