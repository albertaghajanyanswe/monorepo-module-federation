import App from "@/App";
import { Shop } from "@/pages/shop";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const routes = [
  {
    path: "/shop",
    element: <App />,
    children: [
      {
        path: '/shop/main',
        element: <Suspense fallback={'Loading...'}><Shop /></Suspense>
      }
    ]
  },
];

export const router = createBrowserRouter(routes);
export default routes;