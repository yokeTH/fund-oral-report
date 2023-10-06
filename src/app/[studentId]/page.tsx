"use client";

import Footer from "@/components/Footer";
import Table from "@/components/result/Table";
import Info from "@/components/result/info";

export default function Result() {
  return (
    <>
      <div className="container mx-auto p-3 lg:max-2xl:flex">
        <div className="w-full block lg:max-2xl:inline lg:max-2xl:w-9/12 lg:max-2xl:pr-2">
          <Table />
        </div>
        <div className="w-full block max-lg:mt-4 lg:max-2xl:inline lg:max-2xl:w-3/12 lg:max-2xl:pl-2">
          <Info />
        </div>
      </div>
      <Footer />
    </>
  );
}
