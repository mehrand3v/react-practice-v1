//src/router/appRoutes.jsx
import { Navigate } from "react-router-dom";
import RootLayout from "@/components/layout/RootLayout";
import NotFound from "@pages/NotFound";
import ErrorPage from "@pages/ErrorPage";

const PlaceholderPage = () => (
  <div className="p-6">
    <h1 className="text-2xl font-semibold text-gray-800">Coming Soon</h1>
    <p className="mt-2 text-gray-600">
      This feature is currently under development.
    </p>
  </div>
);

const routes = [
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />, // ✅ Handles crashes, API failures, etc. error handling at the root level
    children: [
      { index: true, element: <PlaceholderPage /> },
      { path: "sales", element: <PlaceholderPage /> },
      { path: "products", element: <PlaceholderPage /> },
      // { path: "/products/:id", element: <Product /> }, // for dynamic routing
      { path: "users", element: <PlaceholderPage /> },
      { path: "orders", element: <PlaceholderPage /> },
      { path: "analytics", element: <PlaceholderPage /> },
      { path: "settings", element: <PlaceholderPage /> },
      { path: "inventory", element: <PlaceholderPage /> },
      { path: "transactions", element: <PlaceholderPage /> },
      { path: "dashboard", element: <Navigate to="/" replace /> }, // Redirect
      { path: "*", element: <NotFound /> }, // ✅ Handles 404 errors
    ],
  },
];

export default routes;