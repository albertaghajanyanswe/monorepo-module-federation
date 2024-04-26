import App from "@/App";
import { About } from "@/pages/about";
import { Home } from "@/pages/home";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const routes = [
  {
    path: "/admin",
    element: <App />,
    children: [
      {
        path: '/admin',
        element: <Suspense fallback={'Loading...'}><Home /></Suspense>
      },
      {
        path: '/admin/about',
        element: <Suspense fallback={'Loading...'}><About /></Suspense>
      }
    ]
  },
];

export const router = createBrowserRouter(routes);
export default routes;