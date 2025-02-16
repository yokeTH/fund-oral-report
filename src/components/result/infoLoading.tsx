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
        <p className="card-title">Infomation</p>
        <div className="divider"></div>
        <div className="animate-pulse h-2 bg-base-content rounded"></div>
        <div className="animate-pulse h-2 bg-base-content rounded"></div>
      </div>
    </div>
  );
}
