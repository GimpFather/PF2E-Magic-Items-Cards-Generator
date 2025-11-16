import { Route, Routes } from "react-router";
import { lazy, Suspense } from "react";
import HeroLayout from "./components/HeroLayout";
import { CircularProgress, Box } from "@mui/material";

const HeroPage = lazy(() => import("./pages/HeroPage"));
const MakeItemsPage = lazy(() => import("./pages/MakeItemsPage"));
const GenerateCardsPage = lazy(() => import("./pages/GenerateCardsPage"));

const LoadingFallback = () => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    minHeight="100vh"
  >
    <CircularProgress />
  </Box>
);

const AppRouting = () => {
  return (
    <Suspense fallback={<LoadingFallback />}>
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
    </Suspense>
  );
};

export default AppRouting;
