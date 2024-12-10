import React from "react";

function ButtonBlue({ title = "Temukan Sekarang" }) {
  return (
    <button className="px-10 py-3 lg:text-base bg-primary rounded-full text-white font-medium transition-all duration-300 ease-in-out hover:bg-opacity-90">
      {title}
    </button>
  );
}

export default ButtonBlue;
