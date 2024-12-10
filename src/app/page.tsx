import ButtonBlue from "@/components/ButtonBlue";
import ButtonWhite from "@/components/ButtonWhite";
export default function Home() {
  return (
    <div className="mx-[20px] md:mx-[80px] lg:mx-[100px]">
      <section className="min-h-screen grid grid-cols-12">
        <div className="col-span-12 flex flex-col items-center justify-center gap-12">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-4xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-[#06216C] to-primary leading-loose max-w-[900px] mx-auto">
              Temukan Cara Belajar Yang Tepat Untuk Anda
            </h1>
            <p className="text-lg mx-auto max-w-[500px]">
              Optimalisasi proses belajar Anda dengan pendekatan yang terstruktur dan ilmiah
            </p>
          </div>
          <div className="flex justify-center gap-5">
            <ButtonBlue title="Temukan sekarang" />
            <ButtonWhite title="Tentang Kami" />
          </div>
        </div>
      </section>
    </div>
  );
}
