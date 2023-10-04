'use client';
import Table from '@/components/table';
import { VideoData } from '@/interfaces/videoData';
import { getData } from '@/services/getData';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Home() {
  const path = usePathname();
  const [id, setId] = useState('');
  const [data, setData] = useState<VideoData>({});
  let inputValue: string;
  let [found, setFound] = useState(false);
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    inputValue = event.target.value;
  };
  const onClickHandler = async () => {
    const input = document.getElementById('searhBox') as HTMLInputElement;
    input.value = '';
    setId(inputValue);
    console.log('ID', id);
    const req = await getData(inputValue);
    setData(await req);
    console.log(data);
    setFound(true);
  };
  useEffect(() => {
    inputValue = path.slice(1);
    setId(path.slice(1));
    const req = getData(inputValue);
    req.then((res) => {
      setData(res);
      setFound(true);
      console.log(data);
    });
  }, []);
  return (
    <div className="container mx-auto flex items-center justify-center p-4">
      <div className="artboard">
        <div className="title mt-16 text-xl">ตรวจสอบ % วิดีโอ วิชา Fund Oral</div>
        <br />
        <input id="searhBox" type="text" placeholder="รหัสนิสิต*" className="input w-full" onChange={onChangeHandler} required />
        <button className="btn btn-active btn-neutral w-full mt-4" onClick={onClickHandler}>
          ตรวจสอบ
        </button>
        <br />
        {found ? <Table data={data} /> : ''}
      </div>
    </div>
  );
}
