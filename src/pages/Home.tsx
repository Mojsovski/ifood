import LandingPageLayout from "../components/layout/LandingPageLayout/LandingPageLayout";
import LandingPage from "../components/view/LandingPage/LandingPage";

function Home() {
  return (
    <LandingPageLayout title="Ifood">
      <LandingPage />
    </LandingPageLayout>
  );
}

export default Home;
