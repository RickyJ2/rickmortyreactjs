
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import LoadingPage from "./pages/loadingPage";
import ErrorNotFound from "./pages/errorNotFound";

export const RouteNames = {
  HOME: "/app",
  DETAIL: "/detail",
  LOCATIONS: "/locations",
};

const routes = {
  [RouteNames.HOME]: import("./pages/listCharactersPage"),
  [RouteNames.DETAIL]: <></>,
  [RouteNames.LOCATIONS]: <></>,
};

const lazyRoutes = Object.entries(routes).map(([route, component]) => ({
  route,
  component: lazy(() => component),
}));

export const RoutersComponent = () => (
  <Suspense fallback={<LoadingPage/>
  }>
    <Routes>
      {lazyRoutes.map(({ route, component: Component }) => (
        <Route key={route} path={route} element={<Component />} />
      ))}
      <Route path="*" element={<ErrorNotFound/>} />
    </Routes>
  </Suspense>
);
