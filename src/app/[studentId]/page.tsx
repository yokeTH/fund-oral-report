"use client";

import Footer from "@/components/Footer";
import Table from "@/components/result/Table";
import Info from "@/components/result/info";
import { Response } from "@/interfaces/response";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { getData } from "@/services/getData";
import SearchCardSmall from "@/components/search/SearchCardSmall";
import MultipleSecWarning from "@/components/aleart/multipleSecWarning";
import NotFoundWarning from "@/components/aleart/NotFoundWarning";


export default function Result() {
  const path = usePathname().slice(1);
  const [exp, setExp] = useState<boolean>(false);
  const [data, setData] = useState<Response>();
  const [loaded, setLoaded] = useState(false);
  const [notFound, setNotFound] = useState(false);
  if (!data && !loaded) {
    setLoaded(true);
    getData(path).then((result) => {
      if (!result.data) {
        setNotFound(true);
        setData({
          ...result,
          data: {
            studentID: "",
            name: "NOT",
            lastname: "FOUND",
            sections: [],
            updateAt: new Date(Date.now()),
          },
        });
      } else {
        setData(result);
      }
    });
  }

  useEffect(() => {
    if (data && data.data && data.data.sections.length > 1) {
      setTimeout(() => {
        setExp(true);
      }, 6000);
    }
  }, [data]);

  return (
    <>
      {/* mutiple sec warning */}
      {data && data.data && data.data.sections.length > 1 && !exp ? (
        <MultipleSecWarning />
      ) : (
        ""
      )}

      {/* not found warning */}
      {notFound ? <NotFoundWarning /> : ""}

      {/* Content Page */}
      <div className="container mx-auto p-3 lg:max-2xl:flex">
        <div className="w-full block lg:max-2xl:inline lg:max-2xl:w-3/12 lg:max-2xl:pr-2">
          <SearchCardSmall />
          <Info data={data?.data} studentId={path} />
        </div>
        <div className="w-full block max-lg:mt-4 lg:max-2xl:inline lg:max-2xl:w-9/12 lg:max-2xl:pl-2">
          <Table data={data?.data.sections} />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
