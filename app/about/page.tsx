import { Metadata } from "next";
import AboutPage from "./components/about";

export const metadata: Metadata = {
  title: "About Us | Instant Shield Security Ltd",
  description:
    "Learn more about Instant Shield Security Ltd and our commitment to providing top-tier security solutions.",
};

const page = () => {
  return <AboutPage />;
};

export default page;
