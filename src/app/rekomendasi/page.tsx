"use client";
import ButtonBlue from "@/components/ButtonBlue";
import Input from "@/components/Input";
import Select from "@/components/inputSelect";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { addPost } from "@/utils/firebase";
import { marked } from "marked";
import Accordion from "@/components/Accordion";

export default function Rekomendasi() {
  const [prediction, setPrediction] = useState<string | null>(null);
  const [alasan, setAlasan] = useState<string | null>(null);
  const [alasanMetode, setAlasanMetode] = useState<string>("");
  const [penjelasanMetode, setPenjelasanMetode] = useState<string>("");
  const [langkah, setLangkah] = useState<string>("");
  const [pengantar, setPengantar] = useState<string>("");
  const [isClient, setIsClient] = useState(false);
  const [isloading, setIsloading] = useState(false);

  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    gayaBalajar: "",
    suasana: "",
    durasi: "",
    interval: "",
    tujuan: "",
    kesulitan: "",
    pemahaman: "",
  });

  const [errors, setErrors] = useState({
    nama: "",
    email: "",
    gayaBalajar: "",
    suasana: "",
    durasi: "",
    interval: "",
    tujuan: "",
    kesulitan: "",
    pemahaman: "",
  });

  const optionGayaBelajar = [
    { label: "Auditory", value: "0" },
    { label: "Kinestik", value: "1" },
    { label: "Visual", value: "2" },
  ];

  const optionSuasana = [
    { label: "Individual", value: "0" },
    { label: "Sosial", value: "1" },
  ];

  const optionDurasi = [
    { label: "Panjang (Lebih Dari 60 Menit)", value: "0" },
    { label: "Sedang (40 - 50 Menit)", value: "1" },
    { label: "Singkat (15 - 25 Menit)", value: "2" },
  ];

  const optionInterval = [
    { label: "Ya", value: "0" },
    { label: "Tidak", value: "1" },
  ];

  const optionTujuan = [
    { label: "Jangka Panjang (Pemahaman Mendalam)", value: "0" },
    { label: "Jangka Pendek (Ujian)", value: "1" },
    { label: "Kebutuhan Khusus (Interview)", value: "2" },
    { label: "Pengembangan Pribadi (Memperdalam Pengetahuan)", value: "3" },
  ];

  const optionKesulitan = [
    { label: "Mudah", value: "0" },
    { label: "Sedang", value: "2" },
    { label: "Sulit", value: "1" },
  ];

  const optionPemahaman = [
    { label: "Rendah", value: "2" },
    { label: "Sedang", value: "0" },
    { label: "Tinggi", value: "1" },
  ];

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: { [key in keyof typeof formData]: string } = {
      nama: "",
      email: "",
      gayaBalajar: "",
      suasana: "",
      durasi: "",
      interval: "",
      tujuan: "",
      kesulitan: "",
      pemahaman: "",
    };

    for (const field in formData) {
      if (!formData[field as keyof typeof formData]) {
        newErrors[field as keyof typeof formData] = `${field} is required`;
      } else {
        newErrors[field as keyof typeof formData] = "";
      }
    }

    setErrors(newErrors);

    if (Object.values(newErrors).every((error) => error === "")) {
      setIsloading(true);

      const dataToSend = {
        nama: formData.nama,
        email: formData.email,
        GayaBelajar: formData.gayaBalajar,
        Suasana: formData.suasana,
        Durasi: formData.durasi,
        Interval: formData.interval,
        Tujuan: formData.tujuan,
        Kesulitan: formData.kesulitan,
        Pemahaman: formData.pemahaman,
      };

      try {
        const response = await axios.post(
          "https://personalearns.online/predict",
          dataToSend,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.data.MetodeBelajar) {
          setPrediction(response.data.MetodeBelajar);
          setAlasan(response.data.Alasan);

          addPost({
            nama: formData.nama,
            email: formData.email,
            GayaBelajar: formData.gayaBalajar,
            Suasana: formData.suasana,
            Durasi: formData.durasi,
            Interval: formData.interval,
            Tujuan: formData.tujuan,
            Kesulitan: formData.kesulitan,
            Pemahaman: formData.pemahaman,
            MetodeBelajar: response.data.MetodeBelajar,
          });
        } else {
          setPrediction("No prediction available");
        }
      } catch (error) {
        console.error("Error during fetch:", error);
        setPrediction("An error occurred while fetching the prediction.");
      } finally {
        setIsloading(false);
      }
    }
  };

  const formFields = [
    { name: "nama", title: "Nama", type: "text", placeholder: "Masukan Nama" },
    {
      name: "email",
      title: "Email",
      type: "email",
      placeholder: "Masukan Email",
    },
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  const selectFields = [
    { name: "gayaBalajar", title: "Gaya Belajar", options: optionGayaBelajar },
    { name: "suasana", title: "Suasana Belajar", options: optionSuasana },
    { name: "durasi", title: "Durasi Belajar", options: optionDurasi },
    { name: "interval", title: "Interval Belajar", options: optionInterval },
    { name: "tujuan", title: "Tujuan Belajar", options: optionTujuan },
    { name: "kesulitan", title: "Kesulitan Belajar", options: optionKesulitan },
    { name: "pemahaman", title: "Pemahaman Belajar", options: optionPemahaman },
  ];

  useEffect(() => {
    if (alasan) {
      const start = alasan.indexOf("**1");
      const end = alasan.indexOf("**2");

      if (start !== -1 && end !== -1) {
        const penjelasanMetode = alasan.slice(start + 3, end).trim();
        setPenjelasanMetode(penjelasanMetode);
      }

      const start1 = alasan.indexOf("**2");
      const end1 = alasan.indexOf("**3");

      if (start1 !== -1 && end1 !== -1) {
        const metode = alasan.slice(start1 + 3, end1).trim();
        setAlasanMetode(metode);
      }

      const start2 = alasan.indexOf("**3");

      if (start2 !== -1) {
        const langkahMetode = alasan.slice(start2 + 3).trim();
        setLangkah(langkahMetode);
      }

      const start3 = alasan.indexOf("Hai");
      const end3 = alasan.indexOf(".");

      if (start1 !== -1 && end1 !== -1) {
        const pendahuluan = alasan.slice(start3, end3).trim();
        setPengantar(pendahuluan);
        console.log("Metode Belajar:", pendahuluan);
      }
    }
  }, [alasan]);

  return (
    <>
      <div className="w-full lg:min-h-[100vh] min-h-[160vh] relative -z-10">
        <div className="w-full lg:min-h-[100vh] min-h-[160vh] backdrop-blur-2xl z-10"></div>
        <div className="w-40 h-40 bg-blue-700 rounded-full -z-10 top-44 absolute animate-floating1"></div>
        <div className="w-20 h-20 bg-blue-700 rounded-full -z-10 top-20 right-6 absolute animate-floating2"></div>
        <div className="w-20 h-20 bg-blue-700 rounded-full -z-10 top-80 right-52 absolute animate-floating3"></div>
        <div className="w-20 h-20 bg-blue-700 rounded-full -z-10 bottom-24 left-52 absolute animate-floating3"></div>
      </div>
      <div className="min-h-[100vh] w-full z-30 absolute top-20 ">
        <div className="mx-[20px] md:mx-[80px] lg:mx-[100px]">
          <div className="h-fit my-10 flex justify-center items-center">
            <div className="w-full shadow p-5 rounded-xl">
              <h1 className="text-primary text-base">
                Isi data dibawah untuk menemukan metode belajar yang sesuai
                untuk kamu
              </h1>

              <form
                onSubmit={handleSubmit}
                className="my-6 grid grid-cols-12 gap-5"
              >
                {formFields.map((field) => (
                  <div key={field.name} className="col-span-12 lg:col-span-6">
                    <Input
                      name={field.name}
                      title={field.title}
                      type={field.type}
                      placeholder={field.placeholder}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleChange(
                          field.name as keyof typeof formData,
                          e.target.value
                        )
                      }
                      error={errors[field.name as keyof typeof errors]}
                    />
                  </div>
                ))}

                {selectFields.map((field) => (
                  <div key={field.name} className="col-span-12 lg:col-span-6">
                    <Select
                      name={field.name}
                      title={field.title}
                      options={field.options}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                        handleChange(
                          field.name as keyof typeof formData,
                          e.target.value
                        )
                      }
                      error={errors[field.name as keyof typeof errors]}
                    />
                  </div>
                ))}

                <div className="my-2 col-span-12">
                  <ButtonBlue title="Temukan Sekarang" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-[20px] md:mx-[80px] lg:mx-[100px]">
        {isClient && prediction && (
          <div className="mb-10 text-lg border px-10 py-5 rounded-xl">
            <h1 className="text-xl text-primary font-bold">Rekomendasi</h1>
            <div
              className="text-base text-justify my-4"
              dangerouslySetInnerHTML={{ __html: marked(pengantar ?? "") }}
            />
            <Accordion
              content={`**1${penjelasanMetode}`}
              title={`Penjelasan Metode ${prediction}`}
            />
            <Accordion
              content={`**2${alasanMetode}`}
              title={`Alasan Mengapa ${prediction}`}
            />
            <Accordion
              content={`**3${langkah}`}
              title={`Langkah Langkah Implementasi ${prediction}`}
            />
          </div>
        )}
      </div>
      {isloading && (
        <div className="fixed top-0 min-w-full min-h-[100vh] bg-black/80 z-50 flex flex-col gap-5 items-center justify-center">
          <span className="loader"></span>
          <p className="text-white text-xl">Kami sedang menganalisa</p>
        </div>
      )}
    </>
  );
}
