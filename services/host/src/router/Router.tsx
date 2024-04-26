import App from "@/App";
import { createBrowserRouter } from "react-router-dom";

/*
  * see inside <services/admin/webpack.config.ts>
  *
    name: 'admin',
    filename: 'remoteEntry.js',
    exposes: {
      './Router': './src/router/Router.tsx',
    },
  *
  *<name>/<exposes_childName> -> admin/Router
*/

// @ts-ignore
import shopRoutes from 'shop/Router';
// @ts-ignore
import adminRoutes from 'admin/Router';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      ...shopRoutes,
      ...adminRoutes,
    ]
  },
]);