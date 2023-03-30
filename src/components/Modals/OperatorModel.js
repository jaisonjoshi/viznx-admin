import React from "react";

const OperatorModel = () => {
  return (
    <>
      {/* The button to open modal */}
      <label
        htmlFor="operatormodel"
        className="btn border-0 hover:bg-[#BC3FFF] min-h-0 capitalize shadow-[0_0_3.63448px_rgba(0,0,0,0.25)] rounded-[50px] w-[202px] h-[45]  bg-[#BC3FFF] text-[#fff] text-[21.07px] font-bold"
      >
        Add Operators
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="operatormodel" className="modal-toggle" />
      <div className="modal">
        <div className="relative modal-box">
          <label
            htmlFor="operatormodel"
            className="absolute btn btn-sm btn-circle right-2 top-2"
          >
            ✕
          </label>
          <div className="pt-5 modal-container">
            <form className="flex flex-col gap-7">
              <input
                className="input w-full max-w-xs"
                type="text"
                placeholder="Name"
              />
              <input
                className="input w-full max-w-xs"
                type="text"
                placeholder="Place"
              />
              <div className="btn-section flex">
                <button
                  type="submit"
                  className="btn min-w-[100px] p-[10px_60px] bg-linkColor  border-0 hover:bg-[#BC3FFF]"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default OperatorModel;
