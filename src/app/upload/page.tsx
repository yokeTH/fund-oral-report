"use client";

import { useState } from "react";
import axios from "axios";
import FormData from "form-data";
import UploadSuccess from "@/components/aleart/uploadSuccess";
import UploadError from "@/components/aleart/uploadError";

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
      url: process.env.UPLOAD_URL,
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
            <UploadSuccess/>
          ) : (
            ""
          )}
          {error ? (
            <UploadError/>
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
