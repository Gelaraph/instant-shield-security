import { Metadata } from "next";
import { LegalBody } from "../components/legal-body";
import { PageHeader, Section } from "../components/primitives";

export const metadata: Metadata = {
  title: "Terms of Service | Instant Shield Security Ltd",
  description:
    "Terms governing the use of the Instant Shield Security Ltd website and the information published on it.",
};

const TermsPage = () => {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Terms of Service"
        intro="These terms outline the conditions for accessing and using the Instant Shield Security Ltd website, including the information, services, and resources made available through the site."
      />
      <Section>
        <LegalBody
          sections={[
            {
              heading: "Acceptance of Terms",
              body: "By accessing this website you agree to these terms. If you do not accept them, please discontinue use of the site.",
            },
            {
              heading: "Use of Content",
              body: "Content published here is provided for general information about the company's services and previous project experience. It does not constitute an offer, warranty or contractual commitment.",
            },
            {
              heading: "Intellectual Property",
              body: "The company name, logo, text, imagery and layout of this website are the property of Instant Shield Security Ltd and may not be reproduced without written permission.",
            },
            {
              heading: "Accuracy of Information",
              body: "We take reasonable care to keep published information accurate and current. Project records describe previous engagements and should not be read as representations of current contracts.",
            },
            {
              heading: "Enquiries and Submissions",
              body: "Information submitted through the enquiry form must be accurate and lawfully provided. Submitting an enquiry does not create a contractual relationship.",
            },
            {
              heading: "Limitation of Liability",
              body: "To the extent permitted by law, the company is not liable for loss arising from reliance on information published on this website.",
            },
            {
              heading: "Governing Law",
              body: "These terms are governed by the laws of the Federal Republic of Nigeria.",
            },
          ]}
        />
      </Section>
    </>
  );
};

export default TermsPage;
