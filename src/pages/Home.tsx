import LandingPageLayout from "../components/layout/LandingPageLayout/LandingPageLayout";
import Category from "../components/view/LandingPage/Category";
import Experience from "../components/view/LandingPage/Experience";
import Hero from "../components/view/LandingPage/Hero";

function Home() {
  return (
    <LandingPageLayout title="Ifood">
      <Hero />
      <Experience />
      <Category />
    </LandingPageLayout>
  );
}

export default Home;
