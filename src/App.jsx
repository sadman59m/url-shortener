import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import UrlManager from "./pages/UrlManager";
import { loader as urlItemLoader } from "./pages/UrlManager";
import AuthenticationPage from "./pages/Authentication";
import { checkAuth } from "./util/auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
    loader: checkAuth,
  },
  {
    path: "/:urlItemId",
    element: <UrlManager />,
    errorElement: <ErrorPage />,
    id: "url-item",
    loader: urlItemLoader,
  },
  {
    path: "/auth",
    element: <AuthenticationPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
