import React, { useState, useEffect } from "react";
import Drawer from "./common/Drawer";
import { Collapse, Tab, Ripple, initTWE } from "tw-elements";
import { RxCross1 } from "react-icons/rx";
import { IoShareSocial } from "react-icons/io5";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("nextToGo");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isPendingDropdownOpen, setIsPendingDropdownOpen] = useState(false);
  const [isBetSlipDropdownOpen, setIsBetSlipDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    initTWE({ Collapse, Tab, Ripple });
  }, []);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handlePendingDrawer = () => {
    setIsPendingDropdownOpen(!isPendingDropdownOpen);
  };

  const handleBetSlipDrawerClose = () => {
    setIsBetSlipDropdownOpen(!isBetSlipDropdownOpen);
  };
  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const content = (
    <div className="flex flex-col">
      {/* tab started  */}
      <div className="flex justify-between p-4 w-full">
        <ul
          className="flex items-center list-none flex-row flex-wrap border-b-0 ps-0"
          role="tablist"
          data-twe-nav-ref
        >
          <li role="presentation" className="flex-auto text-center">
            <button
              onClick={() => handleTabChange("nextToGo")}
              className={`my-2 block px-7 pb-3.5 pt-4 text-xs w-[150px] font-medium uppercase leading-tight rounded-sm ${
                activeTab === "nextToGo"
                  ? "bg-gray-500 text-white"
                  : "bg-gray-300 text-gray-600 hover:bg-gray-400 focus:bg-gray-500"
              }`}
              data-twe-toggle="pill"
              data-twe-target="#tabs-home01"
              role="tab"
              aria-controls="tabs-home01"
              aria-selected={activeTab === "nextToGo"}
            >
              Next To Go
            </button>
          </li>
          <li role="presentation" className="flex-auto text-center">
            <button
              onClick={() => handleTabChange("today")}
              className={`ms-2 my-2 block px-7 w-[150px] pb-3.5 pt-4 text-xs font-medium uppercase leading-tight rounded-sm ${
                activeTab === "today"
                  ? "bg-gray-500 text-white"
                  : "bg-gray-300 text-gray-600 hover:bg-gray-400 focus:bg-gray-500"
              }`}
              data-twe-toggle="pill"
              data-twe-target="#tabs-profile01"
              role="tab"
              aria-controls="tabs-profile01"
              aria-selected={activeTab === "today"}
            >
              Today
            </button>
          </li>
        </ul>
        <button
          onClick={handleDrawerClose}
          className="text-gray-600 hover:text-gray-800"
        >
          <RxCross1 />
        </button>
      </div>

      {/* tab content */}
      <div className="mb-6">
        <div
          className={`${
            activeTab === "nextToGo" ? "block" : "hidden"
          } opacity-100 transition-opacity duration-150 ease-linear`}
          id="tabs-home01"
          role="tabpanel"
          aria-labelledby="tabs-home-tab01"
        >
          <div id="accordionExample">
            {Array(5)
              .fill("")
              .map((_, index) => {
                return (
                  <div
                    key={index}
                    className="border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-body-dark w-full"
                  >
                    <h2 className="mb-0" id={`heading${index + 1}`}>
                      <button
                        className="group relative flex w-full items-center rounded-t-lg border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-white [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10"
                        type="button"
                        data-twe-collapse-init
                        data-twe-target={`#collapse${index + 1}`}
                        aria-expanded="true"
                        aria-controls={`collapse${index + 1}`}
                      >
                        <h3 className="font-semibold text-sm me-4">
                          Bet365 Geelong - Race 1
                        </h3>
                        <button className="bg-pink-200 p-2 text-pink-500 rounded-sm text-sm">
                          BB
                        </button>
                        <button className="bg-pink-200 text-pink-500 p-2 ms-1 rounded-sm text-sm">
                          1 Min 5 Sec
                        </button>
                        <span className="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                          </svg>
                        </span>
                      </button>
                    </h2>
                    <div
                      id={`collapse${index + 1}`}
                      className="!visible bg-gray-100"
                      data-twe-collapse-item
                      data-twe-collapse-show
                      aria-labelledby={`heading${index + 1}`}
                      data-twe-parent="#accordionExample"
                    >
                      <div className="">
                        {Array(2)
                          .fill("")
                          .map((_, key) => (
                            <div
                              key={key}
                              className="flex justify-between items-center border-b border-neutral-200 py-2 px-4"
                            >
                              <div className="flex items-center space-x-4">
                                <img
                                  src="https://media.istockphoto.com/id/1317269825/photo/blank-white-short-sleeve-button-down-shirt-mockup-isolated.jpg?s=612x612&w=0&k=20&c=8Zb2O9_odxSimQ8Xr1SihJUY-tNVqz2Krxc6g8_yweU="
                                  alt="Profile"
                                  className="w-8 h-8 rounded-full"
                                />
                                <div>
                                  <p className="font-semibold text-sm">
                                    {key + 1}. Lucas the Younger
                                  </p>
                                  <p className="text-gray-500 text-sm">
                                    Sportsbet-Pakenham R7
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-center space-x-2">
                                <span className="text-pink-500 text-sm">
                                  15 Tips
                                </span>
                                <button className="btn bg-gray-400 px-6 py-2 rounded-md text-white text-sm">
                                  $ 5.55
                                </button>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div
          className={`${
            activeTab === "today" ? "block" : "hidden"
          } opacity-0 transition-opacity duration-150 ease-linear`}
          id="tabs-profile01"
          role="tabpanel"
          aria-labelledby="tabs-profile-tab01"
        >
          <div id="accordionExample">
            {Array(2)
              .fill("")
              .map((_, _index) => {
                return (
                  <div
                    key={_index}
                    className="border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-body-dark w-full"
                  >
                    <h2 className="mb-0" id={`headingB${_index + 1}`}>
                      <button
                        className="group relative flex w-full items-center rounded-t-lg border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-white [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10"
                        type="button"
                        data-twe-collapse-init
                        data-twe-target={`#collapse${_index + 1}`}
                        aria-expanded="true"
                        aria-controls={`collapse${_index + 1}`}
                      >
                        <div>
                          <p className="font-semibold text-sm me-4">
                            Title {_index + 1}
                          </p>
                          <p className="text-gray-500 text-sm">R1 or R2</p>
                        </div>
                        <span className="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                          </svg>
                        </span>
                      </button>
                    </h2>
                    <div
                      id={`collapse${_index + 1}`}
                      className="!visible bg-gray-100"
                      data-twe-collapse-item
                      data-twe-collapse-show
                      aria-labelledby={`headingB${_index + 1}`}
                      data-twe-parent="#accordionExample"
                    >
                      <div id="accordionExample">
                        {Array(1)
                          .fill("")
                          .map((_, sn) => {
                            return (
                              <div key={sn} className="w-full">
                                <h2 className="mb-0" id={`headingC${sn + 1}`}>
                                  <button
                                    className="group relative flex justify-between w-full items-center rounded-t-lg border-0  px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])] [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10"
                                    type="button"
                                    data-twe-collapse-init
                                    data-twe-target={`#collapse${sn + 1}`}
                                    aria-expanded="true"
                                    aria-controls={`collapse${sn + 1}`}
                                  >
                                    <img
                                      src="https://media.istockphoto.com/id/1317269825/photo/blank-white-short-sleeve-button-down-shirt-mockup-isolated.jpg?s=612x612&w=0&k=20&c=8Zb2O9_odxSimQ8Xr1SihJUY-tNVqz2Krxc6g8_yweU="
                                      alt="Profile"
                                      className="w-8 h-8 rounded-full me-2"
                                    />
                                    <div className="flex justify-between items-center w-80 px-3">
                                      <div>
                                        <p className="font-semibold text-sm me-4">
                                          Title {sn + 1}
                                        </p>
                                        <p className="text-gray-500 text-sm">
                                          R1 or R2
                                        </p>
                                      </div>
                                      <p className="text-pink-500">29m 45s</p>
                                    </div>
                                    <span className="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                      >
                                        <path
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                        />
                                      </svg>
                                    </span>
                                  </button>
                                </h2>
                                <div
                                  id={`collapse${sn + 1}`}
                                  className="!visible bg-gray-100"
                                  data-twe-collapse-item
                                  data-twe-collapse-show
                                  aria-labelledby={`heading${_index + 1}`}
                                  data-twe-parent="#accordionExample"
                                >
                                  <div className="px-6">
                                    {Array(2)
                                      .fill("")
                                      .map((_, key) => (
                                        <div
                                          key={key}
                                          className="flex justify-between items-center py-2 px-4"
                                        >
                                          <div className="flex items-center space-x-4">
                                            <img
                                              src="https://media.istockphoto.com/id/1317269825/photo/blank-white-short-sleeve-button-down-shirt-mockup-isolated.jpg?s=612x612&w=0&k=20&c=8Zb2O9_odxSimQ8Xr1SihJUY-tNVqz2Krxc6g8_yweU="
                                              alt="Profile"
                                              className="w-8 h-8 rounded-full"
                                            />
                                            <div>
                                              <p className="font-semibold text-sm">
                                                {key + 1}. Lucas the Younger
                                              </p>
                                              <p className="text-gray-500 text-sm">
                                                Sportsbet-Pakenham R7
                                              </p>
                                            </div>
                                          </div>
                                          <div className="flex items-center space-x-2">
                                            <button className="btn bg-gray-400 px-6 py-2 rounded-md text-white text-sm">
                                              $ 5.55
                                            </button>
                                          </div>
                                        </div>
                                      ))}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <div className="p-2 flex w-full">
        <button className="py-2 bg-gradient-to-r from-[#714DE4] to-[#5E80E8] text-white rounded-md text-sm w-full">
          Get started. View More
        </button>
      </div>
    </div>
  );

  const pendingContent = (
    <div className="p-4">
      <div className="flex items-center w-full">
        <button
          onClick={handlePendingDrawer}
          className="text-gray-600 hover:text-gray-800"
        >
          <RxCross1 />
        </button>
        <p className="text-md font-bold ms-5">Pending</p>
      </div>
      {Array(3)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-b border-neutral-200 py-2 px-4"
          >
            <div>
              <p className="font-semibold text-sm">{`7. Barney's Blaze`}</p>
              <p className="text-gray-500 text-sm">Kyneton-R3 1118 Mdn</p>
            </div>
            <div className="flex flex-col">
              <span className="text-gray text-md font-medium">1.55</span>
              <span className="text-gray-500 text-sm">Fixed Win</span>
            </div>
            <div className="flex flex-col items-center">
              <button className="bg-pink-200 text-pink-500 p-1 rounded-sm text-sm mb-1 ">
                1 Min 5 Sec
              </button>
              <button className="flex items-center bg-gray-400 px-6 py-2 rounded-md text-white text-sm">
                <span className="me-1">Share</span> <IoShareSocial />
              </button>
            </div>
          </div>
        ))}
    </div>
  );

  const betSlipContent = (
    <div className="p-4">
      <div className="flex items-center w-full">
        <button
          onClick={handleBetSlipDrawerClose}
          className="text-gray-600 hover:text-gray-800"
        >
          <RxCross1 />
        </button>
        <p className="text-md font-bold ms-5">Bet Slip</p>
      </div>
      <div className="p-2">
        {Array(3)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              className="flex justify-between items-center  py-2 px-4 border rounded-md mb-2 mt-2 shadow-sm"
            >
              <div>
                <p className="font-semibold text-sm">{`7. Barney's Blaze`}</p>
                <p className="text-gray-500 text-sm">Kyneton-R3 1118 Mdn</p>
              </div>
              <div className="flex flex-col">
                <span className="text-gray text-md font-medium">1.55</span>
                <span className="text-gray-500 text-sm">Fixed Win</span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );

  return (
    <>
      <nav className="bg-white border-b border-gray-200 h-20 fixed top-0 left-0 w-full z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between h-full items-center">
            <div className="flex items-center h-full">
              <div className="shrink-0">
                <img
                  className="h-8 w-8"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt="Logo"
                />
              </div>
              <div className="hidden md:flex space-x-8 ml-10 h-full">
                <a
                  href="#"
                  onClick={handleDrawerOpen}
                  className="text-sm text-[#837CDB] hover:text-gray-700 bg-gray-100 flex items-center h-full px-4 no-underline"
                >
                  Form Guides
                </a>
                <a
                  href="#"
                  className="text-sm text-gray-700 flex items-center h-full px-4 no-underline"
                  onClick={handleDrawerOpen}
                >
                  Tips
                </a>
                <a
                  href="#"
                  className="text-sm text-gray-700 flex items-center h-full px-4 no-underline"
                  onClick={handleDrawerOpen}
                >
                  Social Feed
                </a>
              </div>
            </div>
            <div className="hidden lg:flex items-center">
              <div className="relative">
                <div
                  className={`flex justify-between items-center w-[250px] p-2 ${
                    isDropdownOpen ? "rounded-t-md" : "rounded-md"
                  } border border-gray-400 cursor-pointer`}
                  onClick={toggleDropdown}
                >
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="User Profile"
                  />
                  <div className="flex flex-col">
                    <a className="text-sm text-gray-400">Hello Kane</a>
                    <a className="text-sm text-gray-900">My account</a>
                  </div>
                  <div className="flex flex-col">
                    <a className="text-sm text-gray-400">Balance</a>
                    <a className="text-sm text-gray-900">VC199.99</a>
                  </div>
                </div>
                {isDropdownOpen && (
                  <div className="absolute right-0 w-full bg-white border-s border-e border-b border-gray-400 rounded-b-md shadow-lg">
                    <div className="flex flex-col p-2 ">
                      <button className="bg-gradient-to-r from-[#714DE4] to-[#5E80E8] text-white rounded-md text-sm hover:bg-gray-100 px-4 py-2">
                        My Account
                      </button>
                      <button className="bg-white-600 text-gray border border-gray-600 rounded-md text-sm hover:bg-gray-100 px-4 py-2 mt-2">
                        Tipping Comps
                      </button>
                      <button className="bg-white-600 text-gray border border-gray-600 rounded-md text-sm hover:bg-gray-100 px-4 py-2 mt-2">
                        Purchases
                      </button>
                      <button className="bg-white-600 text-gray border border-gray-600 rounded-md text-sm hover:bg-gray-100 px-4 py-2 mt-2">
                        Offers
                      </button>
                    </div>
                    <div className="flex flex-col p-2 border-t mt-2 border-gray-300">
                      <button className="bg-white-600 text-gray border border-gray-600 rounded-md text-sm hover:bg-gray-100 px-4 py-2 mt-2">
                        Deposit
                      </button>
                      <button className="bg-white-600 text-gray border border-gray-600 rounded-md text-sm hover:bg-gray-100 px-4 py-2 mt-2">
                        Withdraw
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex items-center w-[250px] rounded-md border border-gray-400 ms-2 overflow-hidden">
                <div
                  className="flex justify-center items-center border-e border-gray-400 p-2 bg-[#837CDB] w-[50%] overflow-hidden"
                  onClick={handlePendingDrawer}
                >
                  <a className="text-sm text-white cursor-pointer">
                    Pending <br /> 15
                  </a>
                </div>
                <div
                  className="flex justify-center items-center p-2"
                  onClick={handleBetSlipDrawerClose}
                >
                  <span className="text-sm text-gray-400 cursor-pointer">
                    Bet Slip <br />{" "}
                    <span className="text-gray-900 w-[50%]">25</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button
                className="text-gray-700 focus:outline-none"
                onClick={toggleMobileMenu}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#"
                className="text-gray-700 block px-3 py-2 rounded-md text-base font-medium"
              >
                Form Guides
              </a>
              <a
                href="#"
                className="text-gray-700 block px-3 py-2 rounded-md text-base font-medium"
              >
                Tips
              </a>
              <a
                href="#"
                className="text-gray-700 block px-3 py-2 rounded-md text-base font-medium"
              >
                Social Feed
              </a>
            </div>
          </div>
        )}
      </nav>
      <Drawer
        isOpen={isDrawerOpen}
        onClose={handleDrawerClose}
        headerContent={""}
        content={content}
      />
      <Drawer
        isOpen={isPendingDropdownOpen}
        onClose={handlePendingDrawer}
        headerContent={""}
        content={pendingContent}
        direction="right"
      />
      <Drawer
        isOpen={isBetSlipDropdownOpen}
        onClose={handleBetSlipDrawerClose}
        headerContent={""}
        content={betSlipContent}
        direction="right"
      />
    </>
  );
};

export default Navbar;
