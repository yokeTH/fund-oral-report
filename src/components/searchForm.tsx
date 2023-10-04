import { VideoData } from '@/interfaces/videoData';
import { getData } from '@/services/getData';
import { useState } from 'react';
import Table from './table';

const searchForm = () => {
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
  return (
    <>
      <form className="flex flex-col items-center justify-center w-full">
        <input id="searhBox" type="text" placeholder="รหัสนิสิต*" className="input w-full" onChange={onChangeHandler} required />
        <button className="btn btn-active btn-neutral w-full mt-4" onClick={onClickHandler}>
          ตรวจสอบ
        </button>
      </form>
      <br />
      {found ? <Table data={data} /> : ''}
    </>
  );
};

export default searchForm;
