import { Route, Routes } from "react-router";
import HeroLayout from "./components/HeroLayout";
import HeroPage from "./pages/HeroPage";
import MakeItemsPage from "./pages/MakeItemsPage";
import GenerateCardsPage from "./pages/GenerateCardsPage";

const AppRouting = () => {
  return (
    <Routes>
      <Route element={<HeroLayout />}>
        <Route path="/" element={<HeroPage />} />
      </Route>
      <Route element={<HeroLayout />}>
        <Route path="/make-items" element={<MakeItemsPage />} />
      </Route>
      <Route element={<HeroLayout />}>
        <Route path="/generate-cards" element={<GenerateCardsPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouting;
