"use client";

import Footer from "@/components/Footer";
import SearchCard from "@/components/search/SearchCard";

export default function Home() {
  return (
    <>
      <div className="container mx-auto p-3">
        <SearchCard />
      </div>
      <Footer />
    </>
  );
}
