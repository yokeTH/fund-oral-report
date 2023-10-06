export default function Table() {
  return (
    <div className="card shadow-md bg-base-100 shadow-[rgb(87, 13, 248)]">
      <div className="card-body box-border box-border">
        <span className="loading loading-spinner loading-lg text-primary"></span>
        <div>
          <p className="inline">sec : </p>
          {/* Skeleton */}
          <button className="btn border rounded-full inline">
            <div className="animate-pulse h-2 bg-primary-content rounded w-8 h-4 "></div>
          </button>

          {/* Skeleton */}
        </div>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Video</th>
              <th>%</th>
            </tr>
          </thead>
          <tbody>
            {/* Skeleton */}
            <tr>
              <td className="w-8/12">
                <div className="animate-pulse h-2 bg-primary-content rounded"></div>
              </td>
              <td className="w-4/12">
                <div className="animate-pulse h-2 bg-primary-content rounded"></div>
              </td>
            </tr>
            <tr>
              <td className="w-8/12">
                <div className="animate-pulse h-2 bg-primary-content rounded"></div>
              </td>
              <td className="w-4/12">
                <div className="animate-pulse h-2 bg-primary-content rounded"></div>
              </td>
            </tr>
            <tr>
              <td className="w-8/12">สวัสดี</td>
              <td className="w-4/12">XXX</td>
            </tr>

            {/* Skeleton */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
