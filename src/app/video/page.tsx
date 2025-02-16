import VideoCard from "@/components/video/card";
import NewVideo from "@/components/video/new";
import { getVideo } from "@/services/video";

export default async function video(){
  const data = await getVideo()
  return (
    <>
      <div className="container">
        {data ? data.map(v => (
          <>
          <VideoCard data={v} key={v.id}/>
          </>
        )) : ''}
        <NewVideo/>
        {/* <VideoCard data={data?.report[0].video}/> */}
        {/* <VideoCard id="s"/>
        <VideoCard id="a"/>
        <VideoCard id="e"/> */}
      </div>
    </>
  )
}