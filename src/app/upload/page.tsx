'use client';

import { useState } from 'react';
import axios from 'axios';
import FormData from 'form-data';

export default function Upload() {
  const [file, setFile] = useState<File>();
  const [status, setStatus] = useState(false);
  const [error, setError] = useState(false);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setFile(e.target.files[0]);
  };
  const handleClick = async () => {
    if (!file) return;
    let data = new FormData();
    data.append('file', file);

    let config = {
      method: 'post',
      url: 'https://uploadreport-ynob6lbl7q-et.a.run.app',
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
    <div className="container mx-auto flex items-center justify-center">
      <div className="artboard">
        <div className="title mt-16 text-xl">Upload ไฟล์ Excel</div>
        <br />
        <input type="file" className="file-input w-full max-w-xs" onChange={handleFileChange} />
        <button className="btn btn-active btn-neutral w-full mt-4" onClick={handleClick}>
          Submit
        </button>
        <br />
        {status ? (
          <div className="alert alert-success mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Upload Success</span>
          </div>
        ) : (
          ''
        )}
        {error ? (
          <div className="alert alert-error mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Error! Task failed successfully.</span>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
