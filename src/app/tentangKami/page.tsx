import Card from "@/components/Card";
import React from "react";

export default function TentangKami() {
  return (
    <div className="mx-[20px] md:mx-[80px] lg:mx-[100px] pt-16">
      <div className="min-h-screen">
        <h1 className="text-center text-4xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-[#06216C] to-primary mb-10">
          Team Personalearns
        </h1>

        {/* Flexbox untuk card pada layar kecil */}
        <div className="flex flex-wrap justify-center gap-10 w-full">
          <Card
            name="Faiz aflah Hafizuddin"
            jobdesk="Team Manager"
            desk="Seorang pemimpin tim yang memastikan proyek ini berjalan lancar dan sesuai dengan tujuan."
          />
          <Card
            name="Harry Wira Pratama"
            jobdesk="Quality Assurance"
            desk="Tugas Quality Assurance (QA) adalah memastikan kualitas produk sesuai standar sebelum dirilis."
          />
          <Card
            name="Ceaesa Anasya"
            jobdesk="Data Collection"
            desk="Tugas Data Collection adalah mengumpulkan dan memverifikasi data agar akurat dan siap digunakan."
          />
        </div>

        {/* Flexbox untuk card pada layar lebih besar */}
        <div className="flex flex-wrap justify-center gap-10 w-full my-10">
          <Card
            name="Fialdina Jetara Putri"
            jobdesk="Quality Assurance"
            desk="Tugas Quality Assurance (QA) adalah memastikan kualitas produk sesuai standar sebelum dirilis."
          />
          <Card
            name="Nadhifah Salsabila"
            jobdesk="Data Collection"
            desk="Tugas Data Collection adalah mengumpulkan dan memverifikasi data agar akurat dan siap digunakan."
          />
        </div>
      </div>
    </div>
  );
}
