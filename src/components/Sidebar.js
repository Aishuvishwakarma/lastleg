import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { BiBarChartAlt2 } from "react-icons/bi";
import { LuUserSquare } from "react-icons/lu";
import { PiHandCoinsBold } from "react-icons/pi";
import { LiaSave } from "react-icons/lia";
import { BsThreeDots } from "react-icons/bs";
import { BsClipboardData } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { FaChevronDown } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";

const Sidebar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeContent, setActiveContent] = useState("search");

  const handleDrawerOpen = (content) => {
    setIsDrawerOpen(true);
    setActiveContent(content);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const renderContent = () => {
    // "Jockey"
    switch (activeContent) {
      case "search":
        return (
          <div className="p-2">
            {["Horse", "Trainer"].map((item, key) => (
              <div key={key}>
                <p className="border-b p-2 font-medium">{item}</p>
                {Array(3)
                  .fill("")
                  .map((_, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-4 p-2 border-b"
                    >
                      <img
                        src="https://media.istockphoto.com/id/1317269825/photo/blank-white-short-sleeve-button-down-shirt-mockup-isolated.jpg?s=612x612&w=0&k=20&c=8Zb2O9_odxSimQ8Xr1SihJUY-tNVqz2Krxc6g8_yweU="
                        alt="Profile"
                        className="w-8 h-8 rounded-full"
                      />
                      <div>
                        <p className="font-semibold text-sm">
                          1. Lucas the Younger
                        </p>
                        <p className="text-gray-500 text-sm">
                          Sportsbet-Pakenham R7
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        );
      case "barChart":
        return (
          <div className="p-2 w-full">
            {Array(2)
              .fill("")
              .map((_, Sn) => {
                return (
                  <div className="w-full mb-2" key={Sn}>
                    <h2 className="mb-0" id={`heading`}>
                      <div className="flex items-center justify-between border-b pb-4">
                        <h3 className="font-semibold text-sm me-4">
                          Bet365 Geelong - Race 1
                        </h3>
                        <button className="bg-pink-200 text-pink-500 p-2 ms-1 rounded-sm text-sm">
                          1 Min 5 Sec
                        </button>
                      </div>
                    </h2>
                    {Array(1)
                      .fill("")
                      .map((_, index) => (
                        <div
                          key={index}
                          className="flex flex-col items-start border-b w-full"
                        >
                          <div id="accordionExample5" className="w-full">
                            <div className="w-full">
                              <h2 className="mb-0 w-full" id="headingOne5">
                                <button
                                  className="group relative flex w-full items-center rounded-t-lg border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-white [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10"
                                  type="button"
                                  data-twe-collapse-init
                                  data-twe-target="#collapseOne5"
                                  aria-expanded="true"
                                  aria-controls="collapseOne5"
                                >
                                  <div className="flex justify-between items-center w-full">
                                    <div className="flex items-center space-x-4">
                                      <img
                                        src="https://media.istockphoto.com/id/1317269825/photo/blank-white-short-sleeve-button-down-shirt-mockup-isolated.jpg?s=612x612&w=0&k=20&c=8Zb2O9_odxSimQ8Xr1SihJUY-tNVqz2Krxc6g8_yweU="
                                        alt="Profile"
                                        className="w-8 h-8 rounded-full"
                                      />
                                      <div>
                                        <p className="font-semibold text-sm">
                                          1. Lucas the Younger
                                        </p>
                                        <p className="text-gray-500 text-sm">
                                          Sportsbet-Pakenham R7
                                        </p>
                                      </div>
                                    </div>
                                    <button className="btn bg-gray-400 px-2 py-2 rounded-sm text-white text-sm flex items-center">
                                      Comments
                                      <span className="ml-1 h-3 w-3 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:ml-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none">
                                        <FaChevronDown />
                                      </span>
                                    </button>
                                  </div>
                                </button>
                              </h2>
                              <div
                                id="collapseOne5"
                                className="!visible"
                                data-twe-collapse-item
                                data-twe-collapse-show
                                aria-labelledby="headingOne5"
                              >
                                <div className="px-5 py-4">
                                  lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                );
              })}
            <div className="p-2 flex w-full">
              <button className="py-2 bg-gradient-to-r from-[#714DE4] to-[#5E80E8] text-white rounded-md text-sm w-full">
                Get started. View More
              </button>
            </div>
          </div>
        );
      case "clipboardData":
        return (
          <div className="p-2 w-full">
            {Array(1)
              .fill("")
              .map((_, Sn) => {
                return (
                  <div className="w-full mb-2" key={Sn}>
                    <h2 className="mb-0" id={`heading`}>
                      <div className="flex items-center justify-between border-b pb-4">
                        <h3 className="font-semibold text-sm me-4">
                          Bet365 Geelong - Race 1
                        </h3>
                        <button className="bg-pink-200 text-pink-500 p-2 ms-1 rounded-sm text-sm">
                          1 Min 5 Sec
                        </button>
                      </div>
                    </h2>
                    {Array(1)
                      .fill("")
                      .map((_, index) => (
                        <div
                          key={index}
                          className="flex flex-col items-start border-b w-full"
                        >
                          <div id="accordionExample5" className="w-full">
                            <div className="w-full">
                              <h2 className="mb-0 w-full" id="headingOne5">
                                <button
                                  className="group relative flex w-full items-center rounded-t-lg border-0 bg-white py-2 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-white [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10"
                                  type="button"
                                  data-twe-collapse-init
                                  data-twe-target="#collapseOne5"
                                  aria-expanded="true"
                                  aria-controls="collapseOne5"
                                >
                                  <div className="flex justify-between items-center w-full">
                                    <div className="flex items-center space-x-4">
                                      <img
                                        src="https://media.istockphoto.com/id/1317269825/photo/blank-white-short-sleeve-button-down-shirt-mockup-isolated.jpg?s=612x612&w=0&k=20&c=8Zb2O9_odxSimQ8Xr1SihJUY-tNVqz2Krxc6g8_yweU="
                                        alt="Profile"
                                        className="w-8 h-8 rounded-full"
                                      />
                                      <div>
                                        <p className="font-semibold text-sm">
                                          1. Lucas the Younger
                                        </p>
                                        <p className="text-gray-500 text-sm">
                                          Sportsbet-Pakenham R7
                                        </p>
                                      </div>
                                    </div>
                                    <button className="btn bg-gray-400 px-2 py-2 rounded-sm text-white text-sm flex items-center">
                                      <CiUser />
                                    </button>
                                    <button className="btn bg-gray-400 px-2 py-2 rounded-sm text-white text-sm flex items-center">
                                      Bet Slip
                                      <span className="ml-1 h-3 w-3 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:ml-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none">
                                        <FaChevronDown />
                                      </span>
                                    </button>
                                  </div>
                                </button>
                              </h2>
                              <div
                                id="collapseOne5"
                                className="!visible"
                                data-twe-collapse-item
                                data-twe-collapse-show
                                aria-labelledby="headingOne5"
                              >
                                <div className="py-4">
                                  <div className="w-full">
                                    <div className="flex justify-between items-center mb-2 border-t text-center">
                                      <span className="font-medium">
                                        Parlay Pick
                                      </span>
                                      <span className="text-[#714DE4] border-t-4 border-[#714DE4]">
                                        Pick
                                      </span>
                                      <span className="font-medium">
                                        Analysis
                                      </span>
                                    </div>
                                    <div className="flex justify-between items-center mb-2">
                                      <div className="flex justify-between items-center mb-4">
                                        <div className="flex items-center">
                                          <img
                                            src="https://images.unsplash.com/photo-1594069033313-8920df9150b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91cnNlfGVufDB8fDB8fHww"
                                            alt="PunterMaster"
                                            className="w-8 h-8 rounded-full"
                                          />
                                          <div className="ml-4">
                                            <h3 className="font-bold text-sm">
                                              PunterMaster
                                            </h3>
                                            <p className="text-gray-500 text-sm">
                                              Win-Loss 27-50
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="flex flex-col">
                                        <button className="ml-auto bg-green-500 text-white px-4 py-2 rounded-md flex  items-center">
                                          <span>Win</span>
                                        </button>
                                      </div>
                                      <div className="flex flex-col">
                                        <button className=" bg-gray-400 text-white px-4 py-2 rounded-md flex  items-center">
                                          <span>$5.50</span>
                                        </button>
                                      </div>
                                    </div>
                                    <div className="flex justify-between items-center mb-2">
                                      <div className="flex justify-between items-center mb-4">
                                        <div className="flex items-center">
                                          <img
                                            src="https://images.unsplash.com/photo-1594069033313-8920df9150b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91cnNlfGVufDB8fDB8fHww"
                                            alt="PunterMaster"
                                            className="w-8 h-8 rounded-full"
                                          />
                                          <div className="ml-4">
                                            <h3 className="font-bold text-sm">
                                              PunterMaster
                                            </h3>
                                            <p className="text-gray-500 text-sm">
                                              Win-Loss 27-50
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="flex flex-col">
                                        <button className=" bg-gray-400 text-white px-4 py-2 rounded-md flex  items-center">
                                          <span>Place</span>
                                        </button>
                                      </div>
                                      <div className="flex flex-col">
                                        <button className="ml-auto bg-gray-400 text-white px-4 py-2 rounded-md flex  items-center">
                                          <span>$5.50</span>
                                        </button>
                                      </div>
                                    </div>
                                    <div className="flex justify-between items-center mb-2">
                                      <div className="flex justify-between items-center mb-4">
                                        <div className="flex items-center">
                                          <img
                                            src="https://images.unsplash.com/photo-1594069033313-8920df9150b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91cnNlfGVufDB8fDB8fHww"
                                            alt="PunterMaster"
                                            className="w-8 h-8 rounded-full"
                                          />
                                          <div className="ml-4">
                                            <h3 className="font-bold text-sm">
                                              PunterMaster
                                            </h3>
                                            <p className="text-gray-500 text-sm">
                                              Win-Loss 27-50
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="flex flex-col">
                                        <button className=" bg-gray-400 text-white px-4 py-2 rounded-md flex  items-center">
                                          <span>Place</span>
                                        </button>
                                      </div>
                                      <div className="flex flex-col">
                                        <button className="ml-auto bg-gray-400 text-white px-4 py-2 rounded-md flex  items-center">
                                          <span>$5.50</span>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="w-full grid grid-cols-3">
                                  <div className="flex  flex-col justify-between items-center border p-4">
                                    <span className="text-gray-500 text-sm">
                                      Price
                                    </span>
                                    <span className="font-medium">$10.55</span>
                                  </div>
                                  <div className="flex  flex-col justify-between items-center border p-4">
                                    <span className="text-gray-500 text-sm">
                                      Risking
                                    </span>
                                    <span className="font-medium">$1,500</span>
                                  </div>
                                  <div className="flex  flex-col justify-between items-center border p-4">
                                    <span className="text-gray-500 text-sm">
                                      Win
                                    </span>
                                    <span className="font-medium">
                                      $155,899
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                );
              })}
            <div className="p-2 flex w-full">
              <button className="py-2 bg-gradient-to-r from-[#714DE4] to-[#5E80E8] text-white rounded-md text-sm w-full">
                Get started. View More
              </button>
            </div>
          </div>
        );
      case "userSquare":
        return (
          <div className="p-2 w-full">
            {Array(4).fill("").map((_, key) => {
              return (
                <div className="flex items-center justify-between px-4 py-2 border-b" key={key}>
                  <img
                    src="https://plus.unsplash.com/premium_photo-1683140621573-233422bfc7f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHBvcnRyYWl0fGVufDB8fDB8fHww"
                    alt="PunterMaster"
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="ml-4">
                    <p className="text-sm text-custom-purple">PunterMaster</p>
                    <p className="text-gray-500 text-sm">Win-Loss 27-50</p>
                  </div>
                  <p className="text-gray-900 text-sm ">
                    Just Submitted Tips For Race 4
                  </p>
                </div>
              );
            })}
              <div className="p-2 flex w-full">
              <button className="py-2 bg-gradient-to-r from-[#714DE4] to-[#5E80E8] text-white rounded-md text-sm w-full">
                Get started. View More
              </button>
            </div>
          </div>
        );
      case "save":
        return <div className="p-2">Save Content</div>;
      case "threeDots":
        return <div className="p-2">Three Dots Content</div>;
      default:
        return null;
    }
  };

  return (
    <>
      <div
        className={`flex flex-col h-[calc(100vh-5rem)] bg-white border-r border-gray-200 fixed top-20 left-0 ${
          isDrawerOpen ? "w-[450px]" : "w-16"
        } transition-width duration-300`}
      >
        <div className="flex">
          <div className="w-full">
            <div
              className={`flex py-4 ${
                !isDrawerOpen ? "flex-col" : "flex-row justify-between px-4"
              } items-center border-b`}
            >
              <button
                className={`text-gray-500 p-2 flex items-center rounded-md border border-gray-400${
                  !isDrawerOpen && activeContent === "search"
                    ? "hover:text-[#6761bd] hover:bg-[#827cdb45] hover:border-[#6761bd]"
                    : ""
                }`}
                {...(!isDrawerOpen
                  ? { onClick: () => handleDrawerOpen("search") }
                  : {})}
              >
                <FaSearch size={15} fontWeight={200} />
                {isDrawerOpen && activeContent === "search" && (
                  <input
                    type="text"
                    placeholder="Search for jockeys, trainers, horses, and more..."
                    className="ml-2 outline-none h-full"
                  />
                )}
              </button>
              {isDrawerOpen && (
                <div
                  className={`flex w-80 ${
                    ["barChart", "clipboardData", "userSquare"].includes(
                      activeContent
                    )
                      ? "justify-between"
                      : "justify-end"
                  }`}
                >
                  {activeContent === "barChart" && (
                    <h2 className="font-bold">My BlackBook</h2>
                  )}
                  {activeContent === "clipboardData" && (
                    <h2 className="font-bold">My Tips</h2>
                  )}
                  {activeContent === "userSquare" && (
                    <h2 className="font-bold">Status Notification</h2>
                  )}
                  <button
                    onClick={handleDrawerClose}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    <RxCross1 />
                  </button>
                </div>
              )}
            </div>
            <div className="flex">
              <div className="flex flex-col items-center py-4 space-y-6 w-16">
                <a
                  href="#"
                  className="text-gray-500 p-2 rounded-md  hover:text-[#6761bd] hover:bg-[#827cdb45]"
                  onClick={() => handleDrawerOpen("barChart")}
                >
                  <BiBarChartAlt2 size={20} fontWeight={200} />
                </a>
                <a
                  href="#"
                  className="text-gray-500 p-2 rounded-md  hover:text-[#6761bd] hover:bg-[#827cdb45]"
                  onClick={() => handleDrawerOpen("clipboardData")}
                >
                  <BsClipboardData size={20} fontWeight={200} />
                </a>
                <a
                  href="#"
                  className="text-gray-500 p-2 rounded-md  hover:text-[#6761bd] hover:bg-[#827cdb45]"
                  onClick={() => handleDrawerOpen("userSquare")}
                >
                  <LuUserSquare size={20} fontWeight={200} />
                </a>
                <a
                  href="#"
                  className="text-gray-500 p-2 rounded-md  hover:text-[#6761bd] hover:bg-[#827cdb45]"
                  onClick={() => handleDrawerOpen("save")}
                >
                  <LiaSave size={20} fontWeight={200} />
                </a>
                <a
                  href="#"
                  className="text-gray-500 p-2 rounded-md  hover:text-[#6761bd] hover:bg-[#827cdb45]"
                  onClick={() => handleDrawerOpen("threeDots")}
                >
                  <BsThreeDots size={20} fontWeight={200} />
                </a>
              </div>
              {isDrawerOpen && (
                <div className="w-full p-2">{renderContent()}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
