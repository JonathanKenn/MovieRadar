import React from "react";

const DetailsMovie = ({ details }) => {
  const formatReleaseDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  const countryNames = {
    US: "United States",
    GB: "United Kingdom",
    CA: "Canada",
    // Tambahkan lebih banyak kode negara sesuai kebutuhan
  };

  const formatCountryName = (countryCode) => {
    return countryNames[countryCode] || countryCode;
  };

  const formatHomepage = (url) => {
    return url.replace(/^https?:\/\/(www\.)?/, "");
  };
  return (
    <div className="text-sm lg:text-base">
      <div className="flex border-t border-t-theGray py-3">
        <h4 className="mr-5 font-semibold">Release Date</h4>
        <p className="text-[#0d63bf]">
          {details.release_date
            ? formatReleaseDate(details.release_date)
            : "Release Date"}
        </p>
      </div>
      <div className="flex border-t border-t-theGray py-3">
        <h4 className="mr-5 font-semibold">Country of origin</h4>
        <p className="text-[#0d63bf]">
          {details.origin_country && details.origin_country.length > 0
            ? formatCountryName(details.origin_country[0])
            : "Country of Origin"}
        </p>
      </div>
      <div className="flex border-t border-t-theGray py-3">
        <h4 className="mr-5 font-semibold">Official sites</h4>
        <a href={details.homepage} className="text-[#0d63bf]">
          {details.homepage ? formatHomepage(details.homepage) : "Homepage"}
        </a>
      </div>
      <div className="flex border-t border-t-theGray py-3">
        <h4 className="mr-5 font-semibold">Language</h4>
        <p className="text-[#0d63bf]">
          {details.spoken_languages && details.spoken_languages.length > 0
            ? details.spoken_languages[0].english_name
            : "-"}
        </p>
      </div>
      <div className="flex border-t border-t-theGray py-3">
        <h4 className="mr-5 font-semibold">Production companies</h4>
        <p className="text-[#0d63bf]">
          {details.production_companies &&
          details.production_companies.length > 0
            ? details.production_companies[0].name
            : "-"}
        </p>
      </div>
      <div className="flex border-t border-t-theGray py-3">
        <h4 className="mr-5 font-semibold">Budget</h4>
        <p className="text-[#0d63bf]">
          {details.budget ? `$${details.budget.toLocaleString("en-US")}` : "-"}
        </p>
      </div>
      <div className="flex border-t border-t-theGray py-3">
        <h4 className="mr-5 font-semibold">Revenue</h4>
        <p className="text-[#0d63bf]">
          {details.revenue
            ? `$${details.revenue.toLocaleString("en-US")}`
            : "-"}
        </p>
      </div>
    </div>
  );
};

export default DetailsMovie;
