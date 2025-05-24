import type { ReactNode } from "react";
import PageHead from "../../common/PageHead/PageHead";
import NavbarLayout from "./NavbarLayout/NavbarLayout";

interface IProps {
  title: string;
  children: ReactNode;
}

function LandingPageLayout(props: IProps) {
  const { title, children } = props;

  return (
    <>
      <PageHead title={title} />
      <NavbarLayout />
      <div className="py-10 md:p-6 bg-[#f6f9f8] h-screen">{children}</div>
    </>
  );
}

export default LandingPageLayout;
