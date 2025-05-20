
// main.jsx ou index.jsx
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import History from "./pages/History";
import RootLayout from "./Layout/RootLayout";
import ErrorPage from "./pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage  />,
    children: [
      { index: true, element: <Home /> },
      { path: "History", element: <History /> },
      { path: "Home", element: <Home /> },
    ],
  },
]);


