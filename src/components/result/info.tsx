import { GetResponse } from "@/types/response";

export default function Info(props: {data:GetResponse | null}) {
  return (
    <div className="card shadow-md bg-base-200">
      <div className="card-body box-border">
        <p className="card-title">Infomation</p>
        {/* <div className="divider"></div> */}
        <div>
          {props.data ? <>ID: <span className=" bg-primary text-primary-content rounded p-1"> {props.data.id} </span> </> : <><span className=" bg-error text-error-content p-1 rounded text-lg">NOT FOUND</span></>}
        </div>
        <div>
          {props.data? "Name: " + props.data.name + " " + props.data.lastname : ""}
        </div>
        <div>
          {props.data? "Update: " + new Date(props.data.version).toLocaleString('TH-TH') : ""}
        </div>
      </div>
    </div>
  );
}
