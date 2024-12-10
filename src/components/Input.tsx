import React from "react";

interface InputProps {
  name: string;
  value: string;
  title: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Tipe spesifik
  placeholder: string;
  error?: string; // Opsional, tipe string
}

export default function Input({
  title,
  type,
  name,
  value,
  onChange,
  placeholder,
  error,
}: InputProps) {
  return (
    <div className="flex flex-col">
      {/* Tampilkan error jika ada */}
      {error && <p className="text-xs text-red-500">{error}</p>}
      <label htmlFor={name} className="text-base text-hitam">
        {title}
      </label>
      <input
        value={value}
        onChange={onChange}
        name={name}
        id={name}
        placeholder={placeholder}
        type={type}
        className="text-sm text-hitam rounded-full py-2 px-5 ring-1 ring-abu focus:outline-none focus:ring-primary focus:ring-2 transition-all"
      />
    </div>
  );
}
