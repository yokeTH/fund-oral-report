import TableLoading from "@/components/result/TableLoading";
import InfoLoding from "@/components/result/infoLoading";
import SearchCardSmall from "@/components/search/SearchCardSmall";
import { getData } from "@/services/getData";

export default async function Result({params} : {params : {studentId : string}}) {
  return (
    <>
      {/* Content Page */}
      <div className="mx-auto lg:flex">
        <div className="w-full block lg:inline lg:w-3/12 lg:pr-2">
        <span className="loading loading-spinner loading-lg"></span>
          <InfoLoding />
        </div>
        <div className="w-full block max-lg:mt-4 lg:inline lg:w-9/12 lg:pl-2">
          <TableLoading />
        </div>
      </div>
    </>
  );
}
