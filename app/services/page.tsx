import { Metadata } from "next";
import ServicesPage from "./components/services";

export const metadata: Metadata = {
  title: "Services | Instant Shield Security Ltd",
  description:
    "Security and protection, procurement and distribution, project management, engineering, consultancy, water schemes and technical supervision services.",
};

const page = () => {
  return <ServicesPage />;
};

export default page;
