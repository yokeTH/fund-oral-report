import { GetResponse } from "@/types/response";
import path from "path";

const compare = (a: any, b: any) => {
  let fa = a.videoTitle.split(" ") as string[];
  let fb = b.videoTitle.split(" ") as string[];
  if (Number(fa[1]) > Number(fb[1])) {
    return 1;
  }
  if (Number(fa[1]) < Number(fb[1])) {
    return -1;
  }
};

export const getData = async (id: string) => {
  // const url = (process.env.NEXT_PUBLIC_SEARCH_URL || process.env.SEARCH_URL) + id;
  const url = path.join(process.env.NEXT_PUBLIC_SEARCH_URL || process.env.SEARCH_URL as string, id);
  const req = await fetch(url,{
    cache: 'no-store'
  });
  try{
    const res = await req.json();
    console.log('student',res)
    return res as GetResponse | null;
  }catch{
    return null;
  }
};
