import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout/MainLayout";
import Home from "./Pages/Home/Home";
import ReadInstructions from "./Pages/ReadInstructions/ReadInstructions";
import WatchTutorial from "./Pages/WatchTutorial/WatchTutorial";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/read-instructions/:id",
        element: <ReadInstructions />,
      },
      {
        path: "/watch-tutorial/:id", 
        element: <WatchTutorial />,
      },
    ],
  },
]);
