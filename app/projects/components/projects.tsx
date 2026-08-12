import { ProjectTimeline } from "@/app/components/home/project-timeline";
import {
  CTASection,
  ExecutionModelSection,
} from "@/app/components/home/sections";
import {
  PageHeader,
  Section,
  SectionHeader,
} from "@/app/components/primitives";

const ProjectsPage = () => {
  return (
    <>
      <PageHeader
        eyebrow="Track Record"
        title="Contracts delivered across Nigeria"
        intro="A selection of completed contracts delivered for state governments, ministries and public service commissions. These records demonstrate reliable procurement, distribution, and project execution."
      />
      <Section tone="dark" className="overflow-hidden pt-0">
        <div className="container-x relative">
          <div className="mt-16">
            <SectionHeader
              tone="dark"
              eyebrow="Past Projects"
              title="Proven delivery for government & institutional clients"
              intro="Each entry represents a completed contract — sourced, supplied, and executed to specification and schedule to the contracting authority."
            />
            <div className="mt-14">
              <ProjectTimeline />
            </div>
          </div>
        </div>
      </Section>
      <ExecutionModelSection />
      <CTASection
        title="Add your project to our delivery record"
        btnText="View Our Services"
        btnHref="/services"
      />
    </>
  );
};

export default ProjectsPage;
