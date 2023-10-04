const content = ({ data }: any) => {
  if (!data) return <></>;
  data.sort((a: any, b: any) => {
    let fa = a.video.split(' ');
    let fb = b.video.split(' ');
    if (Number(fa[1]) > Number(fb[1])) {
      return 1;
    }
    if (Number(fa[1]) < Number(fb[1])) {
      return -1;
    }
  });
  return (
    <>
      {data.map((item: any) => (
        <tr>
          <td>{item.video}</td>
          <td>{item.percentage}</td>
        </tr>
      ))}
    </>
  );
};

export default content;
