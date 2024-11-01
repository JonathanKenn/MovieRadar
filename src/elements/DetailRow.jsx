import React from "react";

const DetailRow = ({ label, value }) => {
  return (
    <div className="flex border-t border-t-theGray py-3">
      <h4 className="mr-5 font-semibold">Release Date</h4>
      <p className="text-[#0d63bf]">
        {details.release_date
          ? formatReleaseDate(details.release_date)
          : "Release Date"}
      </p>
    </div>
  );
};

export default DetailRow;
