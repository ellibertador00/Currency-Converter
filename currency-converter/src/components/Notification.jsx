import React from "react";

const Notification = ({ message, type, onClose }) => {
  const bgColor = type === "error" ? "bg-red-500" : "bg-green-500";
  const textColor = "text-white";

  return (
    <div
      className={`fixed top-5 right-5 px-6 py-3 rounded-lg shadow-lg flex items-center space-x-3 ${bgColor} ${textColor}`}
    >
      <span className="text-sm font-semibold">{message}</span>
      <button
        onClick={onClose}
        className="ml-4 bg-white text-red-500 rounded-full p-1 focus:outline-none hover:bg-gray-200"
      >
        ✖
      </button>
    </div>
  );
};

export default Notification;
