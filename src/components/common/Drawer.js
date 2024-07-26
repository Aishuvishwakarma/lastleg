import React from "react";
import { RxCross1 } from "react-icons/rx";

const Drawer = ({
  isOpen,
  onClose = "",
  content,
  headerContent = "",
  direction = "left",
}) => {
  return (
    <div
      className={`fixed inset-0 z-20 transition-opacity ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {direction === "left" && (
        <div
          className={`fixed inset-y-20 left-0 bg-white w-[400px] shadow-lg transform transition-transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* <div className="border-b p-4 flex justify-between items-center">
            <div>{headerContent}</div>
            <button onClick={onClose}>
              <RxCross1 size={24} />
            </button>
          </div> */}
          <div className="overflow-y-scroll h-full">{content}</div>
        </div>
      )}

      {direction === "right" && (
        <div
          className={`fixed inset-y-20 right-0 bg-white w-[400px] shadow-lg transform transition-transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* <div className="border-b p-4 flex justify-between items-center">
            <div>{headerContent}</div>
            <button onClick={onClose}>
              <RxCross1 size={24} />
            </button>
          </div> */}
          <div className="overflow-y-scroll h-full">{content}</div>
        </div>
      )}
    </div>
  );
};

export default Drawer;
