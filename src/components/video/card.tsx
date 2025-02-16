"use client";
import { deleteVideo, updateVideo } from "@/services/video";
import { Video } from "@/types/response";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function VideoCard(props: { data: Video }) {
  const router = useRouter();
  const [title, setTitle] = useState(props.data.title)
  const [id, setId] = useState(props.data.id)
  // const mock: FormEventHandler<HTMLFormElement> = (e) => {
  //   const inputValue = (e.currentTarget.elements[0] as HTMLInputElement).value;
  //   e.preventDefault();
  //   router.push(`/${inputValue}`);
  // };

  return (
    <>
      <div className="card shadow-md bg-base-200 card-side mt-2" key={props.data.id}>
        <figure className="max-lg:w-1/2">
          <img
            src={`https://cfvod.kaltura.com/p/2910381/sp/291038100/thumbnail/entry_id/${props.data.id}/version/100001/width/478/height/269/width/478/height/269/type/3/quality/100`}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
        <div className="card-actions justify-end" id={`${props.data?.id}-btn-del`}>
            <button className="btn btn-error" onClick={async()=>{
              const btn = document.getElementById(`${props.data?.id}-btn`)
              if(btn) btn.style.display = 'none'
              // console.log(id,title)
              console.log(await deleteVideo(id))
              router.refresh()
            }}>DELETE</button>
          </div>
          {/* ID */}
          <div
            // onClick={() => {
            //   const btn = document.getElementById(`${props.data?.id}-btn`)
            //   if(btn) btn.style.display = 'block'

            //   const input = document.getElementById(
            //     `id-input-${props.data?.id}`
            //   );
            //   if (input) {
            //     input.style.display = "block";
            //     input.focus();
            //   }

            //   const text = document.getElementById(`id-text-${props.data?.id}`);
            //   if (text) {
            //     text.style.display = "none";
            //   }
            // }}
            id={`id-text-${props.data?.id}`}
          >
            {" "}
            ID: {id}
          </div>

          <div className="hidden" id={`id-input-${props.data?.id}`}>
            ID:{" "}
            <input
              value={id}
              className="w-11/12 leading-5"
              placeholder="ID*"
              onChange={(e)=>{
                setId(e.currentTarget.value)
              }}
              required
            />
          </div>

          {/* Name */}
          <div
            onClick={() => {
              const btn = document.getElementById(`${props.data?.id}-btn`)
              if(btn) btn.style.display = 'block'

              const input = document.getElementById(
                `id-input-${props.data?.title}`
              );
              if (input) {
                input.style.display = "block";
                input.focus();
              }

              const text = document.getElementById(
                `id-text-${props.data?.title}`
              );
              if (text) {
                text.style.display = "none";
              }
            }}
            id={`id-text-${props.data?.title}`}
          >
            {" "}
            Name: {title}
          </div>

          <div className="hidden" id={`id-input-${props.data?.title}`}>
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

          <div className="card-actions justify-start hidden" id={`${props.data?.id}-btn`}>
            <button className="btn btn-primary" onClick={async()=>{
              const idInput = document.getElementById(`id-input-${props.data?.id}`)
              const idText = document.getElementById(`id-text-${props.data?.id}`)
              const titleInput = document.getElementById(`id-input-${props.data?.title}`)
              const titleText = document.getElementById(`id-text-${props.data?.title}`)
              if(idInput) idInput.style.display = 'none'
              if(idText) idText.style.display = 'block'
              if(titleInput) titleInput.style.display = 'none'
              if(titleText) titleText.style.display = 'block'


              const btn = document.getElementById(`${props.data?.id}-btn`)
              if(btn) btn.style.display = 'none'
              console.log(id,title)
              console.log(await updateVideo(id, title))
            }}>Update</button>
          </div>

        </div>
      </div>
    </>
  );
}
