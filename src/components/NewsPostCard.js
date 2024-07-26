import React from "react";
import { FaRegComment } from "react-icons/fa";
import { SlShareAlt } from "react-icons/sl";
import { CiHeart } from "react-icons/ci";

const NewsPostCard = ({
  title,
  description,
  imageSrc,
  author,
  postingTime,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-2">
        <img
          src={imageSrc}
          alt="Post Image"
          className="w-full h-56 object-cover rounded-md"
        />
      </div>
      <div className="flex items-center justify-between p-2">
        <div className="flex items-center space-x-2">
          <img
            src={author.profileImage}
            alt={author.name}
            className="w-8 h-8 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-semibold">{author.name}</p>
            <p className="text-xs text-gray-500">{postingTime}</p>
          </div>
        </div>
      </div>
      <div className="p-2">
        <p className="text-gray mb-4">{description}</p>
      </div>
        <div className="flex items-center justify-between border py-2 border-t px-2">
          <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-700">
            <FaRegComment />
            <span>156</span>
          </button>
          <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-700">
            <SlShareAlt />
            <span>100</span>
          </button>
          <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-700">
            <CiHeart />
            <span>50</span>
          </button>
        </div>
    </div>
  );
};

export default NewsPostCard;
