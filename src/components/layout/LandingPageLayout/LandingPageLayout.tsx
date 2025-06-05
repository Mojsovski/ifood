import type { ReactNode } from "react";
import PageHead from "../../common/PageHead/PageHead";
import NavbarLayout from "./NavbarLayout/NavbarLayout";
import FooterLayout from "./FooterLayout/FooterLayout";

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
      <div className="px-10 md:py-6 md:px-12 bg-[#f6f9f8] ">{children}</div>
      <FooterLayout />
    </>
  );
}

export default LandingPageLayout;
