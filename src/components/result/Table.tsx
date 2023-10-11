import { Section } from "@/interfaces/response";
import { MouseEventHandler, use, useEffect, useState } from "react";

interface Props {
  data?: Section[];
}

export default function Table({ data }: Props) {
  const [sec, setSec] = useState<string>();
  const secBtnClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    setSec(e.currentTarget.value);
  };
  useEffect(() => {
    if (data && data.length == 1) {
      setSec(data[0].sectionName);
    }
  }, [data]);
  return (
    <div className="card shadow-md z-0 bg-base-200">
      <div className="card-body box-border box-border">
        {/* SECTION */}
        <div>
          <p className="inline">sec : </p>
          {data ? (
            data.map((e) => (
              <button
                className={`btn ${
                  sec == e.sectionName ? "bg-primary" : "bg-base-300"
                }
                hover:bg-primary-focus
                border inline
                `}
                value={e.sectionName}
                onClick={secBtnClick}
              >
                {e.sectionName}
              </button>
            ))
          ) : (
            // skeleton
            <button className="btn bg-base-300 border inline">
              <div className="animate-pulse h-2 bg-primary-content rounded w-8 h-4 "></div>
            </button>
          )}
        </div>

        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-primary text-lg text-primary-content">
              <th>Video Title</th>
              <th>%</th>
            </tr>
          </thead>
          <tbody>
            {sec && data ? (
              data
                .filter((e) => e.sectionName == sec)[0]
                .sectionVideoData.map((e) => (
                  <tr className="hover:bg-primary-focus">
                    <td className="w-8/12">{e.videoTitle}</td>
                    <td className="w-4/12">{e.percentage}</td>
                  </tr>
                ))
            ) : (
              <>
                {Array.from(Array(3).keys()).map((e) => (
                  <tr key={e}>
                    <td className="w-8/12">
                      <div className="animate-pulse h-2 bg-primary-content rounded"></div>
                    </td>
                    <td className="w-4/12">
                      <div className="animate-pulse h-2 bg-primary-content rounded"></div>
                    </td>
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
