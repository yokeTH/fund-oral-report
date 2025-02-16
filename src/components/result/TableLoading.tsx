
export default function Table() {
  return (
    <div className="card shadow-md z-0 bg-base-200">
      <div className="card-body box-border">
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
              {Array.from(Array(3).keys()).map((e) => (
                <tr key={e}>
                  <td className="w-8/12">
                    <div className="animate-pulse h-2 bg-base-content rounded"></div>
                  </td>
                  <td className="w-4/12">
                    <div className="animate-pulse h-2 bg-base-content rounded"></div>
                  </td>
                  <td className="w-4/12">
                    <div className="animate-pulse h-2 bg-base-content rounded"></div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
