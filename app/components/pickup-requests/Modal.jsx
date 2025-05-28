import { RxCross1 } from "react-icons/rx";

const Modal = ({ isOpen, onClose }) => {
  return (
    <div
      className={`${
        isOpen ? " visible" : " invisible"
      } w-full h-screen fixed top-0 left-0 z-[200000000] bg-[#0000002a] transition-all duration-300 flex items-center justify-center`}
    >
      <div
        className={`${
          isOpen ? " scale-[1] opacity-100" : " scale-[0] opacity-0"
        } w-[90%] sm:w-[80%] md:w-[35%] bg-[#fff] rounded-lg transition-all duration-300 mx-auto mt-8`}
      >
        <div className="w-full flex items-end p-4 justify-between border-b border-[#d1d1d1]">
          <div className="flex justify-between items-center gap-32">
            <h1 className="text-[1.3rem] text-primary">Pickup Address</h1>
            <p className="text-[1rem]  text-primary font-medium text-primary-active cursor-pointer">Edit Address</p>
          </div>
          <RxCross1
            className="p-2 text-[2.5rem] hover:bg-[#e7e7e7] rounded-full transition-all duration-300 cursor-pointer"
            onClick={onClose}
          />
        </div>

        <form className="flex flex-col gap-5 px-4 py-7 ">
          <div>
            <label
              htmlFor="Estimated Parcel"
              className="text-[1rem] font-[500] text-secondary"
            >
              Estimated Parcel
            </label>
            <input
              type="Estimated Parcel"
              name="Estimated Parcel"
              id="Estimated Parcel"
              placeholder="Estimated Parcel (Optional)"
              className="py-2 px-3 border border-[#d1d1d1] rounded-md w-full focus:outline-none mt-1 focus:border-gray"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="text-[1rem] font-[500] text-secondary"
            >
              Note
            </label>
            <textarea
              type="text"
              name="text"
              id="text"
              placeholder="Type Note (Optional)"
              className="py-2 px-3 border border-[#d1d1d1] rounded-md w-full focus:outline-none mt-1 focus:border-gray"
            ></textarea>
          </div>

       

          <button
            type="submit"
            className="py-2 cursor-pointer px-4 w-full text-lg font-medium button-primary  rounded-md"
          >
            Send Request
          </button>
        </form>

     
      </div>
    </div>
  );
};

export default Modal;
