import type { ReactNode } from "react";
import PageHead from "../../common/PageHead/PageHead";

interface IProps {
  title: string;
  children: ReactNode;
}

function LandingPageLayout(props: IProps) {
  const { title, children } = props;

  return (
    <>
      <PageHead title={title} />
      <div className="py-10 md:p-6">{children}</div>
    </>
  );
}

export default LandingPageLayout;
