import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import UrlManager from "./pages/UrlManager";
import { loader as urlItemLoader } from "./pages/UrlManager";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "https://url-shortener-beige-gamma.vercel.app/:urlItemId",
    element: <UrlManager />,
    errorElement: <ErrorPage />,
    id: "url-item",
    loader: urlItemLoader,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
