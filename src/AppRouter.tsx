import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { ROUTES } from "./constants/routes";
import MainPage from "./pages/MainPage";
import SettingsPage from "./pages/SettingsPage";
import ExercisePage from "./pages/ExercisePage";

export const AppRouter = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: ROUTES.HOME, element: <MainPage /> },
      {
        path: ROUTES.SETTINGS,
        element: <SettingsPage />,
      },
      { path: ROUTES.EXERCISE, element: <ExercisePage /> },
      { path: "*", element: <MainPage /> },
    ],
  },
]);
