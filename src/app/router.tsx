import { createBrowserRouter, Navigate } from "react-router";
import { DashboardLayout } from "./layout";
import { DiscoverPage } from "../pages/discover";
import { SubmissionsPage } from "../pages/submissions";
import { WalletPage } from "../pages/wallet";
import { ProfilePage } from "../pages/profile";
import { DesignSystemPage } from "../pages/design-system";
import { NotBuiltPage } from "../pages/not-built";

export const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/dashboard/challenges" replace /> },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <Navigate to="/dashboard/challenges" replace /> },
      { path: "challenges", element: <DiscoverPage /> },
      { path: "challenges/:id", element: <NotBuiltPage what="Challenge detail" back="/dashboard/challenges" backLabel="Discover" /> },
      { path: "submissions", element: <SubmissionsPage /> },
      { path: "submissions/:id", element: <NotBuiltPage what="Submission detail" back="/dashboard/submissions" backLabel="My submissions" /> },
      { path: "wallet", element: <WalletPage /> },
      { path: "profile", element: <ProfilePage /> },
    ],
  },
  { path: "/design-system", element: <DesignSystemPage /> },
  {
    path: "/signed-out",
    element: (
      <div className="min-h-svh bg-bg">
        <NotBuiltPage what="Sign in" back="/dashboard/challenges" backLabel="Discover" />
      </div>
    ),
  },
  { path: "*", element: <Navigate to="/dashboard/challenges" replace /> },
]);
