import { createFileRoute } from "@tanstack/react-router";
import Login from "../pages/Login";

export const Route = createFileRoute("/login")({ // Change from LoginRoute to Route
  component: Login,
});