import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout, Home, ErrorPage, Booking, Access} from "../pages/index";
import {ROUTER_CONFIG} from "../config/constants"

const router = createBrowserRouter([
  {
    path: ROUTER_CONFIG.HOME,
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ROUTER_CONFIG.HOME,
        element: <Home />
      },
      {
        path:ROUTER_CONFIG.ACCESS,
        element: <Access />
      },
      {
        path: ROUTER_CONFIG.BOOKING,
        element: <Booking />
      }
    ]
  },
]);

export function Route() {
  return <RouterProvider router={router} />
}