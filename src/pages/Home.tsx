import LandingPageLayout from "../components/layout/LandingPageLayout/LandingPageLayout";
import Category from "../components/view/LandingPage/Category";
import Experience from "../components/view/LandingPage/Experience";
import Hero from "../components/view/LandingPage/Hero";
import Latest from "../components/view/LandingPage/Latest";

function Home() {
  return (
    <LandingPageLayout title="Ifood">
      <Hero />
      <Experience />
      <Category />
      <Latest />
    </LandingPageLayout>
  );
}

export default Home;
