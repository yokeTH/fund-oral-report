import { GetResponse } from "@/types/response";

interface RadialProgressProps {
  percentage: number;
}

const RadialProgress: React.FC<RadialProgressProps> = ({ percentage }) => (
  <div className="radial-progress text-primary group-hover:text-primary-content group-hover:scale-110 transition-transform" style={{ "--value" : percentage, "--size": "4rem" } as React.CSSProperties} role="progressbar">
    {percentage}%
  </div>
);

export default function Table(props: { data: GetResponse | null }) {
  return (
    <div className="card shadow-md z-0 bg-base-200">
      <div className="card-body box-border" style={{"padding": "1.5rem"}}>
        {/* <div>
          <p className="inline">sec : </p>
          <button className="btn bg-base-300 border inline">
            <div className="animate-pulse bg-primary-content rounded w-8 h-4 "></div>
          </button>
        </div> */}

        <table className="table">
          <thead>
            <tr className="bg-primary text-lg text-primary-content">
              <th className="w-2/12 text-center">#</th>
              <th className="w-10/12 text-center">Title</th>
              <th className="w-2/12 text-center">%</th>
            </tr>
          </thead>
          <tbody>
            {props.data ? (
              props.data.report.map((e) => (
                <tr key={e.id} className="group transition-transform hover:bg-primary">
                  <td className="text-center">
                    <div className="group-hover:scale-100">
                      <img className="group-hover:scale-110 group-hover:rounded-md transition-transform" src={`https://cfvod.kaltura.com/p/2910381/sp/291038100/thumbnail/entry_id/${e.videoId}/version/100001/width/478/height/269/width/478/height/269/type/3/quality/100`} />
                    </div>
                  </td>
                  <td className="text-center group-hover:text-primary-content group-hover:scale-115 transition-transform">
                    <span className="text-ellipsis">
                      {e.video.title ? e.video.title : e.videoId}
                    </span>
                  </td>
                  <td className="text-center">
                    <RadialProgress percentage={e.percentage}/>
                  </td>
                </tr>
              ))
            ) : (
              <></>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
