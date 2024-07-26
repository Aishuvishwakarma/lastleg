import React from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";

function LatestWin() {
  return (
    <div className="bg-gray-100 py-16 w-full px-16">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12">
        <h2 className="text-3xl font-bold mb-4 md:mb-0">Latest Win</h2>
        <button className="btn bg-gray-400 px-4 py-2 rounded-md text-white text-sm mt-4 md:mt-0">
          View More +
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white py-8 rounded-lg shadow-md ">
          <div className="flex justify-between items-center mb-4 px-4 md:px-8">
            <div className="flex items-center">
              <img
                src="https://plus.unsplash.com/premium_photo-1683140621573-233422bfc7f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHBvcnRyYWl0fGVufDB8fDB8fHww"
                alt="PunterMaster"
                className="w-12 h-12 rounded-full"
              />
              <div className="ml-4">
                <h3 className="font-bold">PunterMaster</h3>
                <p className="text-gray-500 text-sm">Win-Loss 27-50</p>
                <button className="bg-green-600 text-white text-xs md:text-sm px-2 py-1 rounded-md">
                  Won @ 39.00
                </button>
              </div>
            </div>
            <div className="flex flex-col">
              <button className="ml-auto bg-gray-800 text-white px-4 py-2 rounded-md flex items-center">
                <IoIosAddCircleOutline /> <span className="ms-1">Follow</span>
              </button>
              <p className="text-gray-500 mt-3 text-sm">26 April 2023 2:45pm</p>
            </div>
          </div>
          <div className="mb-4 px-4 md:px-8">
            <div className="w-[90%]">
              <div className="flex justify-between items-center mb-2 border-t text-center ps-8">
                <span className="font-medium">Parlay Pick</span>
                <span className="text-[#714DE4] border-t-4 border-[#714DE4]">
                  Pick
                </span>
                <span className="font-medium">Analysis</span>
              </div>
              <div className="flex justify-between items-center mb-2 ps-8">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <img
                      src="https://images.unsplash.com/photo-1594069033313-8920df9150b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91cnNlfGVufDB8fDB8fHww"
                      alt="PunterMaster"
                      className="w-8 h-8 rounded-full"
                    />
                    <div className="ml-4">
                      <h3 className="font-bold text-sm">PunterMaster</h3>
                      <p className="text-gray-500 text-sm">Win-Loss 27-50</p>
                    </div>
                  </div>
                </div>
                {/* <span className="text-green-500">Win</span> */}
                <div className="flex flex-col">
                  <button className="ml-auto bg-gray-400 text-white px-4 py-2 rounded-md flex  items-center">
                    <span>$5.50</span>
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center mb-2 ps-8">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <img
                      src="https://images.unsplash.com/photo-1594069033313-8920df9150b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91cnNlfGVufDB8fDB8fHww"
                      alt="PunterMaster"
                      className="w-8 h-8 rounded-full"
                    />
                    <div className="ml-4">
                      <h3 className="font-bold text-sm">PunterMaster</h3>
                      <p className="text-gray-500 text-sm">Win-Loss 27-50</p>
                    </div>
                  </div>
                </div>
                {/* <span className="text-green-500">Win</span> */}
                <div className="flex flex-col">
                  <button className="ml-auto bg-gray-400 text-white px-4 py-2 rounded-md flex  items-center">
                    <span>$5.50</span>
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center mb-2 ps-8">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <img
                      src="https://images.unsplash.com/photo-1594069033313-8920df9150b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91cnNlfGVufDB8fDB8fHww"
                      alt="PunterMaster"
                      className="w-8 h-8 rounded-full"
                    />
                    <div className="ml-4">
                      <h3 className="font-bold text-sm">PunterMaster</h3>
                      <p className="text-gray-500 text-sm">Win-Loss 27-50</p>
                    </div>
                  </div>
                </div>
                {/* <span className="text-green-500">Win</span> */}
                <div className="flex flex-col">
                  <button className="ml-auto bg-gray-400 text-white px-4 py-2 rounded-md flex  items-center">
                    <span>$5.50</span>
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center mb-2 ps-8">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <img
                      src="https://images.unsplash.com/photo-1594069033313-8920df9150b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91cnNlfGVufDB8fDB8fHww"
                      alt="PunterMaster"
                      className="w-8 h-8 rounded-full"
                    />
                    <div className="ml-4">
                      <h3 className="font-bold text-sm">PunterMaster</h3>
                      <p className="text-gray-500 text-sm">Win-Loss 27-50</p>
                    </div>
                  </div>
                </div>
                {/* <span className="text-green-500">Win</span> */}
                <div className="flex flex-col">
                  <button className="ml-auto bg-gray-400 text-white px-4 py-2 rounded-md flex  items-center">
                    <span>$5.50</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full grid grid-cols-3 gap-4 px-4 md:px-8">
            <div className="flex flex-col justify-between items-center border p-2 md:p-4">
              <span className="text-gray-500 text-xs md:text-sm">Price</span>
              <span className="font-medium">$10.55</span>
            </div>
            <div className="flex flex-col justify-between items-center border p-2 md:p-4">
              <span className="text-gray-500 text-xs md:text-sm">Risking</span>
              <span className="font-medium">$1,500</span>
            </div>
            <div className="flex flex-col justify-between items-center border p-2 md:p-4">
              <span className="text-gray-500 text-xs md:text-sm">Win</span>
              <span className="font-medium">$155,899</span>
            </div>
          </div>
          <div className="px-4 md:px-8">
            <button className="bg-green-500 text-white px-4 py-2 rounded-md w-full mt-2 md:mt-4">
              Resulted
            </button>
          </div>
        </div>
        <div className="bg-white py-8 rounded-lg shadow-md ">
          <div className="flex justify-between items-center mb-4 px-4 md:px-8">
            <div className="flex items-center">
              <img
                src="https://plus.unsplash.com/premium_photo-1683140621573-233422bfc7f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHBvcnRyYWl0fGVufDB8fDB8fHww"
                alt="PunterMaster"
                className="w-12 h-12 rounded-full"
              />
              <div className="ml-4">
                <h3 className="font-bold text-lg md:text-xl">PunterMaster</h3>
                <p className="text-gray-500 text-sm">Win-Loss 27-50</p>
                <button className="bg-green-600 text-white text-xs md:text-sm px-2 py-1 rounded-md">
                  Won @ 39.00
                </button>
              </div>
            </div>
            <div className="flex flex-col">
              <button className="ml-auto bg-gray-800 text-white px-4 py-2 rounded-md flex items-center">
                <IoIosAddCircleOutline /> <span className="ms-1">Follow</span>
              </button>
              <p className="text-gray-500 mt-3 text-xs md:text-sm">26 April 2023 2:45pm</p>
            </div>
          </div>
          <div className="mb-4">
            <div className="w-[90%]">
              <div className="flex justify-between items-center mb-2 border-t text-center ps-8">
                <span className="font-medium">Parlay Pick</span>
                <span className="text-[#714DE4] border-t-4 border-[#714DE4]">
                  Pick
                </span>
                <span className="font-medium">Analysis</span>
              </div>
              <div className="flex justify-between items-center mb-2 ps-8">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <img
                      src="https://images.unsplash.com/photo-1594069033313-8920df9150b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91cnNlfGVufDB8fDB8fHww"
                      alt="PunterMaster"
                      className="w-8 h-8 rounded-full"
                    />
                    <div className="ml-4">
                      <h3 className="font-bold text-sm">PunterMaster</h3>
                      <p className="text-gray-500 text-sm">Win-Loss 27-50</p>
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
              <div className="flex justify-between items-center mb-2 ps-8">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <img
                      src="https://images.unsplash.com/photo-1594069033313-8920df9150b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91cnNlfGVufDB8fDB8fHww"
                      alt="PunterMaster"
                      className="w-8 h-8 rounded-full"
                    />
                    <div className="ml-4">
                      <h3 className="font-bold text-sm">PunterMaster</h3>
                      <p className="text-gray-500 text-sm">Win-Loss 27-50</p>
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
              <div className="flex justify-between items-center mb-2 ps-8">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <img
                      src="https://images.unsplash.com/photo-1594069033313-8920df9150b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91cnNlfGVufDB8fDB8fHww"
                      alt="PunterMaster"
                      className="w-8 h-8 rounded-full"
                    />
                    <div className="ml-4">
                      <h3 className="font-bold text-sm">PunterMaster</h3>
                      <p className="text-gray-500 text-sm">Win-Loss 27-50</p>
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
              <div className="flex justify-between items-center mb-2 ps-8">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <img
                      src="https://images.unsplash.com/photo-1594069033313-8920df9150b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91cnNlfGVufDB8fDB8fHww"
                      alt="PunterMaster"
                      className="w-8 h-8 rounded-full"
                    />
                    <div className="ml-4">
                      <h3 className="font-bold text-sm">PunterMaster</h3>
                      <p className="text-gray-500 text-sm">Win-Loss 27-50</p>
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
          <div className="w-full grid grid-cols-3 gap-4 px-4 md:px-8">
            <div className="flex flex-col justify-between items-center border p-2 md:p-4">
              <span className="text-gray-500 text-xs md:text-sm">Price</span>
              <span className="font-medium">$10.55</span>
            </div>
            <div className="flex flex-col justify-between items-center border p-2 md:p-4">
              <span className="text-gray-500 text-xs md:text-sm">Risking</span>
              <span className="font-medium">$1,500</span>
            </div>
            <div className="flex flex-col justify-between items-center border p-2 md:p-4">
              <span className="text-gray-500 text-xs md:text-sm">Win</span>
              <span className="font-medium">$155,899</span>
            </div>
          </div>
          <div className="px-4 md:px-8">
            <button className="bg-green-500 text-white px-4 py-2 rounded-md w-full mt-2 md:mt-4">
              Resulted
            </button>
          </div>
        </div>
        <div className="grid grid-rows-2 space-y-6">
          <div className="flex flex-col items-center justify-center bg-gradient-to-r from-[#714DE4] to-[#5E80E8] text-white px-4 py-6 rounded-lg w-full text-center">
            <p className="">Beat the Odds</p>
            <p className="text-[20px] font-medium">Unlock Your Potential</p>
          </div>
          <div className="flex flex-col items-center justify-center bg-gradient-to-r from-[#714DE4] to-[#5E80E8] text-white px-4 py-6 rounded-lg w-full text-center">
            <p className="">Beat the Odds</p>
            <p className="text-[20px] font-medium">Unlock Your Potential</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center bg-orange-500 text-white py-6 mt-8 rounded-lg">
        <h3 className="text-5xl font-bold mb-2 md:mr-6">lastLeg®</h3>
        <div>
          <p className="text-2xl md:text-3xl mb-1">Your Unfair Advantage on the Punt</p>
          <p className="text-3xl md:text-4xl font-bold">
            Save the Best for the Last on LastLeg®
          </p>
        </div>
      </div>
    </div>
  );
}

export default LatestWin;
