import React, { useEffect, useState } from "react";
import ReviewProductList from "../components/ReviewProducts/ReviewProductList";
import { ReviewProductFilter } from "../components/ReviewProducts/Filter";
export default function ReviewProduct() {
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
      document.title = "Market-Toll - Products";
    };
    scrollToTop();
  }, []);
  const [filterData, setFilterData] = useState([]);
  const [productLength, setFilterLength] = useState(0);

  console.log(filterData, "filterData");
  return (
    <div className="w-full flex flex-col gap-y-4">
      <h1 className="text-xl font-bold">
        Pending Products/Services{" "}
        <span className="text-[#0098EA] text-sm">({productLength})</span>
      </h1>
      <ReviewProductFilter setFilterData={setFilterData} />
      <ReviewProductList filterData={filterData} setFilterLength={setFilterLength} />
    </div>
  );
}
