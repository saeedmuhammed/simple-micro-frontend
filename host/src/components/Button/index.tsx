import React from "react";
import "tailwindcss/tailwind.css";

const Button = ({ className }: { className?: string }) => {
  return (
    <div
      className={`w-32 h-12 text-sm bg-blue-500 text-white flex justify-center items-center rounded-md cursor-pointer ${className}`}
    >
      {" "}
      Button from host
    </div>
  );
};
export default Button;
