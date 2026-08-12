import { Metadata } from "next";
import ProjectsPage from "./components/projects";

export const metadata: Metadata = {
  title: "Project Experience | Instant Shield Security Ltd",
  description:
    "Overview of our past projects and successful implementations across various industries.",
};

const page = () => {
  return <ProjectsPage />;
};

export default page;
