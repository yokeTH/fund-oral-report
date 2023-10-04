export const getData = async (id: string) => {
  const url = `https://getreport-ynob6lbl7q-et.a.run.app/` + id;
  const req = fetch(url);
  const result = await (await req).json();
  console.log(await req);
  return await result.data;
};
