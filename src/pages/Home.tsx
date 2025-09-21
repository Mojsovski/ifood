import LandingPageLayout from "../components/layout/LandingPageLayout/LandingPageLayout";
import Category from "../components/view/LandingPage/Category";
import Experience from "../components/view/LandingPage/Experience";
import Explore from "../components/view/LandingPage/Explore";
import Hero from "../components/view/LandingPage/Hero";
import Latest from "../components/view/LandingPage/Latest";

function Home() {
  return (
    <LandingPageLayout title="Ifood">
      <Hero />
      <Experience />
      <Category />
      <Latest />
      <Explore />
    </LandingPageLayout>
  );
}

export default Home;
