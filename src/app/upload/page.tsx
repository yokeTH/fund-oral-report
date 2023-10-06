"use client";

import { useState } from "react";
import axios from "axios";
import FormData from "form-data";

export default function Upload() {
  const [file, setFile] = useState<File>();
  const [status, setStatus] = useState(false);
  const [error, setError] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setFile(e.target.files[0]);
  };
  const handleClick = async () => {
    setIsUploading(true);
    setStatus(false);
    setError(false);
    if (!file) return;
    let data = new FormData();
    data.append("file", file);

    let config = {
      method: "post",
      url: process.env.NEXT_PUBLIC_UPLOAD_URL,
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        setStatus(true);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      })
      .finally(() => {
        setIsUploading(false);
      });
  };
  return (
    <div className="container mx-auto p-3">
      <div className="card shadow-md mt-3 bg-base-200">
        <div className="card-body">
          <h2 className="card-title text-base-content">Upload ไฟล์ Excel</h2>
          {status ? (
            <div className="alert alert-success">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Success!</span>
            </div>
          ) : (
            ""
          )}
          {error ? (
            <div className="alert alert-error">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Error!</span>
            </div>
          ) : (
            ""
          )}
          {isUploading ? (
            <span className="loading loading-spinner loading-lg text-primary"></span>
          ) : (
            ""
          )}
          <input
            type="file"
            className="file-input w-full max-w-xs file-input-primary min-w-full"
            onChange={handleFileChange}
          />
          <button
            className="btn btn-active btn-primary w-full mt-4"
            onClick={handleClick}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
