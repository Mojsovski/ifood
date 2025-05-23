import Head from "@uiw/react-head";

interface IProps {
  title: string;
}

function PageHead(props: IProps) {
  const { title = "IFood" } = props;
  return (
    <Head>
      <Head.Title>{title}</Head.Title>
      <Head.Meta charSet="utf-8" />
      <Head.Link rel="icon" href="/assets/react.svg" type="image/x-icon" />
    </Head>
  );
}

export default PageHead;
