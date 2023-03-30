import React from "react";
// import { Link } from "react-router-dom";
import OperatorViewModal from "../Modals/OperatorViewModal";

const DeviceCard = () => {
  return (
    <div className="w-[clamp(200px,78%,250px)] bg-white shadow-[0_0_68px_rgba(0,0,0,0.25)] rounded-[10px] min-h-[251px] ">
      <div
        className=" grid place-items-center font-black rounded-[10px_0_23px] max-w-[167px] h-[46px] text-white corner-tab"
        style={{
          background:
            "linear-gradient(165.71deg, #AB00FF 7.52%, #4200FF 92.05%)",
        }}
      >
        <p className="text">Operator 1</p>
      </div>
      <div className="flex flex-col items-center mt-12 text-center location">
        <p className="text-[23px] text-[#4c4c4c] leading-6 font-[600] main-loc">
          Lulu Mall
        </p>
        <p className="text-[17px] text-[#4c4c4c] resides">Location, India</p>
        <OperatorViewModal />
      </div>
    </div>
  );
};

export default DeviceCard;