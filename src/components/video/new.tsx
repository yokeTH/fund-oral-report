"use client";
import { newVideo, updateVideo } from "@/services/video";
import { Video } from "@/types/response";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function NewVideo() {
  const router = useRouter();
  const [title, setTitle] = useState("")
  const [id, setId] = useState("")// const mock: FormEventHandler<HTMLFormElement> = (e) => {
  //   const inputValue = (e.currentTarget.elements[0] as HTMLInputElement).value;
  //   e.preventDefault();
  //   router.push(`/${inputValue}`);
  // };

  return (
    <>
      <div className="card shadow-md bg-base-200 card-side mt-2">
        <figure className="max-lg:w-1/2">
        </figure>
        <div className="card-body">

          <div className="">
            ID:{" "}
            <input
              className="w-11/12 leading-5"
              placeholder="ID*"
              onChange={(e)=>{
                setId(e.currentTarget.value)
              }}
              required
            />
          </div>

          {/* Name */}
          <div>
            Name:{" "}
            <input
              value={title}
              className="w-11/12 leading-5"
              placeholder="Title*"
              onChange={(e)=>{
                setTitle(e.currentTarget.value)
              }}
              required
            />
          </div>

          <div className="card-actions justify-start" id={`btn`}>
            <button className="btn btn-primary" onClick={async()=>{
              // const btn = document.getElementById(`btn`)
              // if(btn) btn.style.display = 'none'
              console.log(id,title)
              await newVideo(id, title)
              router.refresh()
            }}>ADD</button>
          </div>

        </div>
      </div>
    </>
  );
}
