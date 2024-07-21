import React from "react";
import Pict1 from "../../../img/aboutus/Pict1.png";
import Pict2 from "../../../img/aboutus/Pict2.png";
import Pict3 from "../../../img/aboutus/Pict3.png";

const dummyData = [
  {
    name: "Airlangga Hartanto",
    title: "Menteri Koordinator dan Perekonomian RI",
    content:
      "Saya minta kepada segenap pengurus DPD, provinsi, kabupaten, dan kota, untuk kita harus memiliki roadmap 2024. Di tahun melakukan penggalangan opini masyarakat.",
    image: Pict1,
  },
  {
    name: "Joko Widodo",
    title: "Presiden RI",
    content:
      "Daerah merupakan bagian dari pemerintah yang langsung berinteraksi dengan masyarakat ketika proses demokratisasi berlangsung.",
    image: Pict2,
  },
  {
    name: "Puan Maharani",
    title: "Ketua DPR dan Fraksi PDI Perjuangan",
    content:
      "Daerah merupakan bagian dari pemerintah yang langsung berinteraksi dengan masyarakat ketika proses demokratisasi berlangsung.",
    image: Pict3,
  },
];

const ContentThree = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="text-center my-10">
        <h1 className="text-3xl md:text-4xl font-bold">
          What Political Figures Say
        </h1>
        <p className="text-[#4F5665] mx-auto mt-4 max-w-2xl">
          These are the stories of political figures who have joined us with
          great pleasure when using this incredible feature.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {dummyData.map((item, index) => (
          <div
            className="w-full sm:w-80 md:w-[400px] bg-white border border-gray-200 rounded-xl shadow-md hover:border-[#2161D5] flex flex-col"
            key={index}
          >
            <div className="flex items-center p-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <h1 className="font-bold text-lg">{item.name}</h1>
                <p className="text-[#4F5665] text-sm">{item.title}</p>
              </div>
            </div>
            <div className="p-4 flex-grow">
              <p className="text-sm">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentThree;
