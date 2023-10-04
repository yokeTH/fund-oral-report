import Content from '@/components/content';
import React, { useEffect, useState } from 'react';
export default function Table({ data }: any) {
  if (!data) {
    console.log(data);
    return (
      <>
        <div className="alert alert-warning mt-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <span>Not found</span>
        </div>
      </>
    );
  }
  const sections = Object.keys(data.sections);
  const [selected, setSelected] = useState('');
  const setSection = (event: React.MouseEvent<HTMLButtonElement>) => {
    setSelected(event.currentTarget.value);
  };
  useEffect(() => {
    if (sections.length == 1) {
      setSelected(sections[0]);
    }
  }, []);
  return (
    <>
      <div className="alert mt-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <span>UPLOAD at : {new Date(data.updateTime).toString()}</span>
      </div>
      <div className="overflow-x-auto">
        <br />
        <div id="sectionButton">
          <h5>Section </h5>
          {sections.map((section: string) => (
            <button className="btn btn-active mr-4" onClick={setSection} value={section}>
              {section}
            </button>
          ))}
        </div>
        <div className="title mt-4 text-xl">
          {data.name} {data.lastname}
        </div>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Video</th>
              <th>Percentage (%)</th>
            </tr>
          </thead>
          <tbody>{selected ? <Content data={data.sections[selected]} /> : ''}</tbody>
        </table>
      </div>
    </>
  );
}
