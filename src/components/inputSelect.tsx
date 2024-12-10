'use client';
import React from "react";
import { IoIosArrowDown } from "react-icons/io";

interface SelectProps {
  name: string;
  value: string;
  title: string;
  options: { label: string; value: string }[];
  onChange: React.ChangeEventHandler<HTMLSelectElement>; // Tipe untuk onChange
  error?: string; // Tipe untuk error
}

export default function Select({
  title,
  name,
  value,
  options,
  onChange,
  error,
}: SelectProps) {
  return (
    <div className="flex flex-col">
      <div>
        <p className="text-xs text-red-500">{error}</p>
      </div>
      <label htmlFor={name} className="text-base text-hitam mb-1">
        {title}
      </label>
      <div className="w-full relative">
        <select
          name={name}
          id={name}
          value={value || ""}
          onChange={onChange}
          className="text-sm text-hitam w-full rounded-full py-2 px-5 ring-1 ring-abu focus:outline-none focus:ring-primary focus:ring-2 transition-all bg-white appearance-none"
          aria-expanded={!!value}
        >
          <option value="" disabled>
            Pilih {title}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div
          className={`absolute top-1/2 right-5 transform -translate-y-1/2 transition-transform ${
            value ? "rotate-180" : ""
          }`}
        >
          <IoIosArrowDown className="text-gray-500 text-lg" />
        </div>
      </div>
    </div>
  );
}
