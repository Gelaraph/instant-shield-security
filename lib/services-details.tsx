/**
 * Detailed content for each capability. Derived from the company profile
 * already reflected across the site — no unsupported services are claimed.
 */

export type ServiceDetail = {
  slug: string;
  title: string;
  eyebrow: string;
  intro: string;
  overview: string;
  approach: string[];
  operational: string[];
  personnel: string;
  benefits: string[];
  related: string[];
};

export const SERVICE_DETAILS: ServiceDetail[] = [
  {
    slug: "security-protection",
    title: "Security & Protection",
    eyebrow: "Protective Services",
    intro:
      "Structured protective services designed around client risk profile, site conditions and operational discipline — delivered by supervised personnel under a single line of accountability.",
    overview:
      "Instant Shield provides protective coverage for government institutions, corporate facilities and critical infrastructure. Every deployment begins with an assessment of the site, the threat environment and the client's own operating rules, and is then staffed, briefed and supervised against that assessment rather than against a generic template.",
    approach: [
      "Site and risk assessment before any posting is agreed.",
      "Written post orders, shift patterns and escalation routes issued to every deployed officer.",
      "Supervisory visits and documented reporting through the contract period.",
      "Continuous review of quality, with corrective action recorded and closed out.",
    ],
    operational: [
      "Static guarding of offices, plants, stores and project sites",
      "Access control, visitor screening and gate management",
      "Patrol and response arrangements agreed with the client",
      "Incident reporting, occurrence books and shift handover records",
      "Coordination with client security teams and statutory authorities",
    ],
    personnel:
      "Officers are drawn from our pool of experienced and certified staff, screened before deployment and supervised by team leaders who have worked together long enough to guarantee fluidity of operation.",
    benefits: [
      "One accountable contractor rather than fragmented arrangements",
      "Documented performance you can audit",
      "Deployment capacity supported by our own infrastructure and financing",
    ],
    related: [
      "personnel-protection",
      "military-paramilitary",
      "kitting-equipment",
    ],
  },
  {
    slug: "military-paramilitary",
    title: "Military & Para-Military Support",
    eyebrow: "Institutional Support",
    intro:
      "Support services for general military and para-military requirements, delivered strictly within approved frameworks and formal agreements.",
    overview:
      "We support uniformed institutions with the logistics, supply and administrative capability that sits behind operational readiness. Work is scoped with the institution, executed under written agreement and reported against agreed milestones.",
    approach: [
      "Engagement only under approved frameworks and documented authority.",
      "Requirement definition agreed in writing before mobilisation.",
      "Delivery tracked against milestones and formally certified at each stage.",
      "Confidentiality maintained across every engagement.",
    ],
    operational: [
      "Supply and kitting of approved operational equipment",
      "Logistics, movement and distribution support",
      "Facility, camp and infrastructure support works",
      "Administrative and technical support personnel",
    ],
    personnel:
      "Assignments are staffed with personnel who hold the demonstrated competence for the task, supported by supervisors experienced in institutional contracting.",
    benefits: [
      "Compliance-first delivery within approved channels",
      "Single contractor across supply, logistics and works",
      "Predictable reporting and documentation",
    ],
    related: [
      "security-protection",
      "kitting-equipment",
      "procurement-distribution",
    ],
  },
  {
    slug: "personnel-protection",
    title: "Personnel Protection",
    eyebrow: "Close Protection",
    intro:
      "Protective coverage for executives, officials and personnel operating in demanding environments, planned around movement patterns rather than fixed posts.",
    overview:
      "Personnel protection is planned from the principal's routine: where they work, how they move and which parts of that routine are predictable to others. We build coverage around those realities and keep it under review as the routine changes.",
    approach: [
      "Profile and movement assessment agreed with the principal's office.",
      "Route planning, timing variation and advance checks on venues.",
      "Discreet posture that fits the client's professional environment.",
      "Regular review as travel patterns and exposure change.",
    ],
    operational: [
      "Close protection for executives and officials",
      "Residence and office coverage",
      "Journey management and advance reconnaissance",
      "Coordination with drivers, aides and host security",
    ],
    personnel:
      "Protection officers are selected for judgement and discretion as much as capability, and are assigned only where their experience matches the exposure involved.",
    benefits: [
      "Coverage that supports the principal's schedule instead of disrupting it",
      "Clear reporting lines into the principal's office",
      "Consistent teams, not rotating strangers",
    ],
    related: ["security-protection", "consultancy", "military-paramilitary"],
  },
  {
    slug: "kitting-equipment",
    title: "Kitting & Equipment Supply",
    eyebrow: "Supply",
    intro:
      "Sourcing, kitting and supply of operational equipment to specification and schedule, with verification before anything is handed over.",
    overview:
      "We source, assemble and issue operational equipment as complete kits against a written specification. Items are inspected on receipt, made up into kits, recorded and distributed with signed acceptance at the point of delivery.",
    approach: [
      "Specification confirmed and priced before procurement begins.",
      "Supplier selection governed by our quality policy and HSE scope.",
      "Inspection on receipt, with rejects replaced before issue.",
      "Kitting, labelling and documented distribution.",
    ],
    operational: [
      "Specification development and sourcing",
      "Quality inspection and acceptance testing",
      "Kit assembly, labelling and packing",
      "Warehousing, distribution and signed handover",
    ],
    personnel:
      "Procurement and stores personnel handle sourcing and inspection, supported by technical staff where specification judgement is required.",
    benefits: [
      "Equipment that matches specification, verified before issue",
      "Full delivery documentation for audit",
      "Financing capacity that supports large single-tranche supply",
    ],
    related: [
      "procurement-distribution",
      "military-paramilitary",
      "vector-control",
    ],
  },
  {
    slug: "procurement-distribution",
    title: "Procurement & Distribution",
    eyebrow: "Supply Chain",
    intro:
      "End-to-end procurement, logistics and distribution for public sector and corporate programmes, from sourcing through to last-mile delivery records.",
    overview:
      "Instant Shield has executed procurement and distribution contracts for state governments and public institutions, including large pharmaceutical distribution programmes and bulk supply contracts. The same controls apply at every scale: sourcing, verification, distribution and documented receipt.",
    approach: [
      "Requirement and quantity schedule agreed in writing.",
      "Sourcing from suppliers assessed against our quality and HSE criteria.",
      "Verification on receipt; storage under conditions appropriate to the goods.",
      "Distribution against a schedule, with signed receipts returned to the client.",
    ],
    operational: [
      "Pharmaceutical and public health commodity distribution",
      "Bulk consumables and welfare supply",
      "Furniture, equipment and institutional supply",
      "Warehousing, transport and last-mile distribution",
    ],
    personnel:
      "Procurement, logistics and field distribution teams work under a single project supervisor accountable for the whole chain.",
    benefits: [
      "Proven record on state-level distribution programmes",
      "Auditable receipt documentation at every delivery point",
      "Financing arrangements that support contract execution",
    ],
    related: ["kitting-equipment", "project-management", "vector-control"],
  },
  {
    slug: "project-management",
    title: "Project Management",
    eyebrow: "Delivery",
    intro:
      "Planning, coordination and controlled delivery of multi-stakeholder projects, with one supervisory structure carrying the contract from award to close-out.",
    overview:
      "We take responsibility for scope, programme, cost control and reporting across projects that involve several contractors, agencies and approval bodies. Delivery may be direct, through deployed personnel, or through controlled subcontracting where scope or specialism makes that the right route.",
    approach: [
      "Scope, programme and responsibility matrix agreed at inception.",
      "Single point of contact and a single reporting format for the client.",
      "Progress, cost and risk reviewed on a fixed cycle, not only at completion.",
      "Formal close-out with as-built records and handover documentation.",
    ],
    operational: [
      "Programme planning and stakeholder coordination",
      "Contract administration and cost control",
      "Subcontractor selection and supervision",
      "Progress reporting, snagging and close-out",
    ],
    personnel:
      "Projects are led by managers with delivery experience in the relevant sector, supported by technical and administrative staff assigned for the contract duration.",
    benefits: [
      "Clear ownership across multiple contractors",
      "Early visibility of slippage and cost risk",
      "Documentation that survives audit and handover",
    ],
    related: [
      "engineering-infrastructure",
      "technical-supervision",
      "project-rehabilitation",
    ],
  },
  {
    slug: "engineering-infrastructure",
    title: "Engineering & Infrastructure",
    eyebrow: "Works",
    intro:
      "Engineering support and infrastructure works executed with technical supervision throughout, not only at inspection points.",
    overview:
      "Our engineering work covers civil and infrastructure delivery for institutional and corporate clients. Technical supervision is embedded in the works team so that quality is controlled as the work proceeds rather than corrected afterwards.",
    approach: [
      "Design intent and specification confirmed before mobilisation.",
      "Method statements and HSE controls agreed for each work package.",
      "Continuous technical supervision on site.",
      "Testing, commissioning and documented handover.",
    ],
    operational: [
      "Civil and building works",
      "Site preparation and infrastructure installation",
      "Mechanical and utility support works",
      "Testing, commissioning and as-built documentation",
    ],
    personnel:
      "Works are staffed with skilled and certified technical personnel and supervised by engineers with applied experience in comparable projects.",
    benefits: [
      "Quality controlled during construction, not after",
      "HSE governance applied across contractors and suppliers",
      "Single accountability for works and supervision",
    ],
    related: ["project-management", "water-schemes", "technical-supervision"],
  },
  {
    slug: "consultancy",
    title: "Consultancy Services",
    eyebrow: "Advisory",
    intro:
      "Seasoned consultants advising on technical, operational and procurement decisions, drawing on experience across oil and gas, telecommunications, banking, education, research and process industries.",
    overview:
      "Clients engage us where a decision needs independent technical judgement: whether a specification is right, whether a supplier can deliver, whether a stalled project can be recovered, or how a security posture should be structured. Advice is written, evidenced and usable.",
    approach: [
      "Terms of reference agreed so the deliverable is unambiguous.",
      "Evidence gathered on site and from records, not assumed.",
      "Findings and options presented with cost and risk implications.",
      "Support through implementation where the client wants continuity.",
    ],
    operational: [
      "Technical and specification review",
      "Procurement and supplier capability assessment",
      "Security and operational risk advisory",
      "Feasibility and project recovery studies",
    ],
    personnel:
      "Assignments are staffed by consultants with sector-specific backgrounds across our fields of expertise, matched to the subject rather than to availability.",
    benefits: [
      "Independent judgement before commitment",
      "Recommendations tied to cost and deliverability",
      "Continuity into execution if required",
    ],
    related: [
      "technical-supervision",
      "project-management",
      "personnel-protection",
    ],
  },
  {
    slug: "water-schemes",
    title: "Water Schemes & Boreholes",
    eyebrow: "Water Infrastructure",
    intro:
      "Development and delivery of water schemes and borehole installations, from survey through to commissioning and handover.",
    overview:
      "We deliver borehole and water scheme projects for institutional, community and corporate clients, taking the work from hydrogeological survey through drilling, installation and testing to a scheme that can actually be operated and maintained.",
    approach: [
      "Survey and siting before drilling is committed.",
      "Construction and development to specification, with yield testing.",
      "Pumping, storage and reticulation sized to real demand.",
      "Commissioning, water quality testing and operator handover.",
    ],
    operational: [
      "Hydrogeological survey and siting",
      "Drilling, casing and borehole development",
      "Pump, storage tank and reticulation installation",
      "Yield and water quality testing, commissioning",
    ],
    personnel:
      "Drilling and installation crews work under technical supervision, with testing signed off before handover.",
    benefits: [
      "Schemes sized for sustained use, not just completion",
      "Test records supplied at handover",
      "Maintenance guidance for the operating team",
    ],
    related: [
      "engineering-infrastructure",
      "project-rehabilitation",
      "technical-supervision",
    ],
  },
  {
    slug: "project-rehabilitation",
    title: "Rehabilitation of Existing Projects",
    eyebrow: "Recovery",
    intro:
      "Assessment, remediation and completion of stalled or degraded assets, starting with an honest account of what was actually built.",
    overview:
      "Abandoned and deteriorating projects rarely fail for one reason. We assess the physical condition and the contractual position, establish what can be salvaged, and price the route to completion before work restarts.",
    approach: [
      "Condition survey and verification of completed work.",
      "Assessment of what is recoverable and what must be replaced.",
      "Costed completion programme agreed before mobilisation.",
      "Execution under continuous technical supervision.",
    ],
    operational: [
      "Condition and structural assessment",
      "Remedial and make-good works",
      "Completion of outstanding scope",
      "Testing, commissioning and close-out documentation",
    ],
    personnel:
      "Recovery projects are led by supervisors experienced in assessing existing work, supported by the relevant technical trades.",
    benefits: [
      "A realistic completion cost before money is committed",
      "Recovery of value already invested in the asset",
      "Documented close-out on projects that had none",
    ],
    related: [
      "engineering-infrastructure",
      "project-management",
      "technical-supervision",
    ],
  },
  {
    slug: "vector-control",
    title: "Vector Control Equipment & Chemicals",
    eyebrow: "Public Health",
    intro:
      "Supply of vector control equipment and chemicals for public health programmes, handled under the same quality and HSE controls as the rest of our supply work.",
    overview:
      "We supply spraying equipment, protective wear and approved chemicals to public health programmes, with handling, storage and disposal treated as part of the scope rather than as the client's problem after delivery.",
    approach: [
      "Products sourced against the programme's approved list.",
      "Storage, handling and waste disposal governed by our HSE scope.",
      "Protective equipment supplied alongside chemicals as standard.",
      "Documented distribution with signed receipt at each point.",
    ],
    operational: [
      "Spraying and application equipment supply",
      "Approved vector control chemical supply",
      "Protective wear and safety equipment",
      "Distribution, storage guidance and disposal arrangements",
    ],
    personnel:
      "Supply is handled by procurement and stores personnel working to documented handling procedures.",
    benefits: [
      "Safe handling built into the supply, not added later",
      "Experience with state public health distribution programmes",
      "Complete distribution records for programme reporting",
    ],
    related: ["procurement-distribution", "kitting-equipment", "consultancy"],
  },
  {
    slug: "technical-supervision",
    title: "Technical Supervision & Project Evaluation",
    eyebrow: "Assurance",
    intro:
      "Independent supervision, monitoring and evaluation of project performance, reporting to the client rather than to the contractor being assessed.",
    overview:
      "Where a client needs assurance that what is being certified matches what has been built, we provide independent supervision and evaluation. Findings are evidenced, quantified and reported in a format the client can act on.",
    approach: [
      "Scope and reporting cycle agreed with the client at appointment.",
      "Physical verification against drawings, specification and payment claims.",
      "Non-conformances raised, tracked and closed out formally.",
      "Evaluation reports with quantified findings and recommendations.",
    ],
    operational: [
      "Construction and works supervision",
      "Verification of payment claims and certificates",
      "Monitoring and evaluation of programme performance",
      "Non-conformance tracking and close-out reporting",
    ],
    personnel:
      "Supervision is carried out by technical personnel independent of the delivery contractor, with competence matched to the works being assessed.",
    benefits: [
      "Independent evidence before payment is certified",
      "Early detection of specification drift",
      "Reports that stand up to audit",
    ],
    related: ["project-management", "consultancy", "project-rehabilitation"],
  },
];

export function getServiceDetail(slug: string) {
  return SERVICE_DETAILS.find((s) => s.slug === slug);
}
