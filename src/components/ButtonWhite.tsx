import React from "react";

function ButtonWhite({title = 'Isi Title ini'}) {
  return (
    <button className="px-6 py-3 text-base bg-white rounded-full text-primary shadow-sm font-medium transition-all duration-300 ease-in-out hover:bg-opacity-90">
      {title}
    </button>
  );
}

export default ButtonWhite;
