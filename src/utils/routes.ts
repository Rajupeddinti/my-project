import { createBrowserRouter } from "react-router";
import Layout from "../components/Layout";
import Dashboard from "../pages/Dashboard";
import PatientsDirectory from "../pages/PatientsDirectory";
import PatientProfile from "../pages/PatientProfile";
import Appointments from "../pages/Appointments";
import AICalls from "../pages/AICalls";
import SmartFrontDesk from "../pages/SmartFrontDesk";
import Campaigns from "../pages/Campaigns";
import CampaignDetail from "../pages/CampaignDetail";
import Feedback from "../pages/Feedback";
import Analytics from "../pages/Analytics";
import Integrations from "../pages/Integrations";
import Templates from "../pages/Templates";
import Users from "../pages/Users";
import Settings from "../pages/Settings";
import Support from "../pages/Support";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Dashboard },
      { path: "patients", Component: PatientsDirectory },
      { path: "patients/:id", Component: PatientProfile },
      { path: "appointments", Component: Appointments },
      { path: "ai-calls", Component: AICalls },
      { path: "front-desk", Component: SmartFrontDesk },
      { path: "campaigns", Component: Campaigns },
      { path: "campaigns/:id", Component: CampaignDetail },
      { path: "feedback", Component: Feedback },
      { path: "analytics", Component: Analytics },
      { path: "integrations", Component: Integrations },
      { path: "templates", Component: Templates },
      { path: "users", Component: Users },
      { path: "settings", Component: Settings },
      { path: "support", Component: Support },
      { path: "*", Component: NotFound },
    ],
  },
]);
