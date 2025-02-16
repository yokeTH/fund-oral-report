"use server"
import { GetResponse, Video } from "@/types/response";
import path from "path";

export const getVideo = async () => {
  console.log(process.env.NEXT_PUBLIC_VIDEO_URL || process.env.VIDEO_URL )
  const url = path.join(process.env.NEXT_PUBLIC_VIDEO_URL || process.env.VIDEO_URL as string);
  const req = await fetch(url,{
    cache: 'no-store'
  });
  try{
    const res = await req.json();
    console.log('video',res)
    return res as Video[] | null;
  }catch{
    return null;
  }
};

export const deleteVideo = async (id:string) => {
  const url = path.join(process.env.NEXT_PUBLIC_VIDEO_URL || process.env.VIDEO_URL as string, id);
  const req = await fetch(url,{
    cache: 'no-store',
    method: 'DELETE',
  });
  try{
    const res = await req.json();
    console.log('Delete',res)
    return res as Video[] | null;
  }catch{
    return null;
  }
};

export const newVideo = async (id:string, title?: string) => {
  const url = path.join(process.env.NEXT_PUBLIC_VIDEO_URL || process.env.VIDEO_URL as string, id);
  const req = await fetch(url,{
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({id, title})
  });
  try{
    const res = await req.json();
    console.log('POST VIDEO',res)
    return res as Video[] | null;
  }catch{
    return null;
  }
};

export const updateVideo = async (id:string, title?: string) => {
  const url = path.join(process.env.NEXT_PUBLIC_VIDEO_URL || process.env.VIDEO_URL as string, id);
  const req = await fetch(url,{
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({title: title})
  });
  // console.log(req)
  try{
    const res = await req.json();
    console.log('video',res)
    return res as Video[] | null;
  }catch{
    return null;
  }
};