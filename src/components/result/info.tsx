interface Props {
  data?: {
    id: string;
    studentID: string;
    name: string;
    lastname: string;
    updateAt: Date;
  };
  studentId?: string;
}

export default function Info({ data, studentId }: Props) {
  return (
    <div className="card shadow-md bg-base-200">
      <div className="card-body box-border">
        {/* LOADIND */}
        {data ? (
          ""
        ) : (
          <span className="loading loading-spinner loading-lg text-primary"></span>
        )}
        <p className="card-title">Infomation</p>
        <div className="divider"></div>
        <p>ID: {studentId}</p>
        {data ? (
          <>
            <p>
              Name: {data.name} {data.lastname}
            </p>
            <p>
              Update: {new Date(data.updateAt).toLocaleDateString()}{" "}
              {new Date(data.updateAt).toLocaleTimeString()}
            </p>
          </>
        ) : (
          <>
            <div className="animate-pulse h-2 bg-primary-content rounded"></div>
            <div className="animate-pulse h-2 bg-primary-content rounded"></div>
          </>
        )}
      </div>
    </div>
  );
}
