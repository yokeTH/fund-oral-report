"use client";

import { useState } from "react";
import axios from "axios";
import FormData from "form-data";

export default function Upload() {
  const [file, setFile] = useState<File>();
  const [status, setStatus] = useState(false);
  const [error, setError] = useState(false);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setFile(e.target.files[0]);
  };
  const handleClick = async () => {
    setStatus(true);
    if (!file) return;
    let data = new FormData();
    data.append("file", file);

    let config = {
      method: "post",
      url: "https://uploadreport-ynob6lbl7q-et.a.run.app",
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        setStatus(true);
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        setError(true);
        console.log(error.response.data);
      });
  };
  return (
    <div className="container mx-auto p-3">
      <div className="card shadow-md mt-3 bg-base-100">
        <div className="card-body">
          <h2 className="card-title text-base-content">Upload ไฟล์ Excel</h2>
          <input
            type="file"
            className="file-input w-full max-w-xs file-input-primary min-w-full"
            onChange={handleFileChange}
          />
          {!(status || error) ? (
            <button
              className="btn btn-active btn-primary w-full mt-4"
              onClick={handleClick}
            >
              Submit
            </button>
          ) : (
            <span className="loading loading-spinner loading-lg text-primary"></span>
          )}
        </div>
      </div>
    </div>
  );
}
