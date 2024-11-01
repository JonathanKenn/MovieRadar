import React from "react";

const MovieCrew = ({ title, crew, role }) => {
  // Gunakan Set untuk melacak nama yang sudah ditampilkan
  const displayedNames = new Set();

  // Buat array untuk menampung nama-nama unik
  const uniqueNames = crew
    .filter((credit) => credit.job === role || credit.department === role)
    .map((person) => {
      if (!displayedNames.has(person.name)) {
        displayedNames.add(person.name); // Tambahkan nama ke Set
        return person.name; // Kembalikan nama untuk array
      }
      return null; // Kembalikan null jika nama sudah ditampilkan
    })
    .filter(Boolean); // Menghapus nilai null dari array

  return (
    <div className="flex border-t border-t-theGray py-2">
      <p className="mr-5 font-semibold">{title}:</p>
      {/* Gabungkan nama-nama dengan tanda ~ */}
      <span className="font-medium text-[#5699f0]">
        {uniqueNames.join(" ~ ")}
      </span>
    </div>
  );
};

export default MovieCrew;
