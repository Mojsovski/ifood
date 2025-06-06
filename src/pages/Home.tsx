import LandingPageLayout from "../components/layout/LandingPageLayout/LandingPageLayout";
// import Experience from "../components/view/LandingPage/Experience";
import Hero from "../components/view/LandingPage/Hero";

function Home() {
  return (
    <LandingPageLayout title="Ifood">
      <Hero />
      {/* <Experience /> */}
    </LandingPageLayout>
  );
}

export default Home;
