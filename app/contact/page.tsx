import { Metadata } from "next";
import ContactPage from "./components/contact";

export const metadata: Metadata = {
  title: "Contact Us | Instant Shield Security Ltd",
  description:
    "Get in touch with Instant Shield Security Ltd for any inquiries or support.",
};

const page = () => {
  return <ContactPage />;
};

export default page;
