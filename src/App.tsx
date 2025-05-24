import { HeroUIProvider } from "@heroui/react";
import Home from "./pages/Home";

function App() {
  return (
    <HeroUIProvider>
      <Home />
    </HeroUIProvider>
  );
}

export default App;
