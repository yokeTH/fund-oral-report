import Table from "@/components/result/Table";
import Info from "@/components/result/info";
import SearchCardSmall from "@/components/search/SearchCardSmall";
import { getData } from "@/services/getData";

export default async function Result({params} : {params : {studentId : string}}) {
  const data = await getData(params.studentId)
  return (
    <>
      <div className="mx-auto lg:flex">
        <div className="w-full block lg:inline lg:w-3/12 lg:pr-2">
          <SearchCardSmall />
          <Info data={data} />
        </div>
        <div className="w-full block max-lg:mt-4 lg:inline lg:w-9/12 lg:pl-2">
          <Table data={data}/>
        </div>
      </div>
    </>
  );
}
