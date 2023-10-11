import dotenv from "dotenv";

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
  dotenv.config()
  const url = process.env.NEXT_PUBLIC_SEARCH_URL + id;
  const req = fetch(url);
  const result = await (await req).json();
  if (result.data == null) return result;
  result.data.sections = Object.keys(result.data.sections).map((key) => ({
    sectionName: key,
    sectionVideoData: result.data.sections[key].map(
      (e: { video: any; percentage: any }) => ({
        videoTitle: e.video,
        percentage: e.percentage,
      })
    ),
  }));
  result.data.updateAt = result.data.updateTime;
  result.data.sections.forEach((e: any) => {
    e.sectionVideoData.sort(compare);
  });
  return await result;
};
