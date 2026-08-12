import { Metadata } from "next";
import { LegalBody } from "../components/legal-body";
import { PageHeader, Section } from "../components/primitives";

export const metadata: Metadata = {
  title: "Privacy Policy | Instant Shield Security Ltd",
  description:
    "How Instant Shield Security Ltd collects, uses and protects information submitted through this website.",
};

const PrivacyPage = () => {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        intro="Learn how Instant Shield Security Ltd collects, uses, stores, and protects information provided through this website, including information submitted through our contact and enquiry forms."
      />
      <Section>
        <LegalBody
          sections={[
            {
              heading: "Information We Collect",
              body: "We collect the information you provide through our enquiry form, including your name, organization, email address, telephone number, area of interest and message.",
            },
            {
              heading: "How Information Is Used",
              body: "Submitted information is used solely to respond to your enquiry, assess requirements and maintain correspondence relating to prospective or existing engagements.",
            },
            {
              heading: "Disclosure",
              body: "We do not sell or trade personal information. Information may be shared internally with the personnel responsible for responding to your enquiry, or where disclosure is required by law.",
            },
            {
              heading: "Retention",
              body: "Enquiry records are retained for as long as necessary to serve the purpose for which they were collected, or as required by applicable regulation.",
            },
            {
              heading: "Security",
              body: "Reasonable administrative and technical measures are applied to protect information against unauthorised access, alteration or disclosure.",
            },
            {
              heading: "Your Rights",
              body: "You may request access to, correction of, or deletion of information you have submitted by contacting us through the details on our contact page.",
            },
            {
              heading: "Contact",
              body: "Questions about this policy should be directed to the company using the contact details published on this website.",
            },
          ]}
        />
      </Section>
    </>
  );
};

export default PrivacyPage;
