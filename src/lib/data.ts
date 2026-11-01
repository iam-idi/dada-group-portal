export const navLinks = [
  { label: "Businesses", href: "/#businesses" },
  { label: "Mining & Energies", href: "/businesses/mining" },
  { label: "Civil Contractors", href: "/businesses/civil" },
  { label: "Green Farm", href: "/businesses/agriculture" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
};

export type Highlight = {
  title: string;
  description: string;
};

export type Subsidiary = {
  id: string;
  name: string;
  shortName: string;
  sector: string;
  regNumber: string;
  tin: string;
  incorporated: string;
  tagline: string;
  description: string;
  capabilities: string[];
  heroImage: string;
  heroImageAlt: string;
  overview: string[];
  highlights: Highlight[];
  gallery: GalleryImage[];
};

export const subsidiaries: Subsidiary[] = [
  {
    id: "mining",
    name: "Dada Minings & Energies Ltd",
    shortName: "Minings & Energies",
    sector: "Mining, Minerals & Energy",
    regNumber: "RC 8904961",
    tin: "33603398-0001",
    incorporated: "8 October 2025",
    tagline: "Reliable mineral supply, sourced from Nigeria.",
    description:
      "From minor to major metals, industrial minerals and gemstones, we source, process and supply raw materials from Nigeria's resource-rich terrain to buyers who demand consistency, traceability and scale.",
    capabilities: [
      "Minor & major metals",
      "Gemstones & precious minerals",
      "Exploration & site assessment",
      "Export-grade supply chains",
    ],
    heroImage: "/images/mining-hero.jpg",
    heroImageAlt:
      "Aerial view of a mineral processing and crushing site, with heavy plant equipment working an open quarry face",
    overview: [
      "Dada Minings & Energies Ltd is the resource arm of Dada Group — built to source, process and supply Nigeria's mineral wealth, from industrial minerals and base metals to gemstones, to buyers who need dependable volumes and paperwork that holds up.",
      "Nigeria sits on one of the most mineral-diverse landmasses in West Africa, yet much of that endowment still moves through fragmented, informal supply chains. Our work is to professionalise that chain end to end: proper site assessment, safe extraction practice, and traceable logistics from the ground to the buyer.",
      "We operate as a sourcing and supply partner rather than a single-shipment broker — built for buyers who need the same quality and documentation on the tenth shipment as the first.",
    ],
    highlights: [
      {
        title: "Exploration & Site Assessment",
        description:
          "Every deposit begins with rigorous geological and commercial assessment before a single commitment is made — the discipline an institutional buyer expects.",
      },
      {
        title: "Minor & Major Metals",
        description:
          "We source and supply a range of minor and major metals from vetted sites, matched to buyer specification and volume requirements.",
      },
      {
        title: "Gemstones & Precious Minerals",
        description:
          "Rough and semi-processed gemstones sourced from deposits across Nigeria, supplied to cutting houses, jewellers and export buyers.",
      },
      {
        title: "Export-Grade Supply Chains",
        description:
          "Consistent grading, documentation and logistics designed to move material from site to port without surprises.",
      },
    ],
    gallery: [
      {
        src: "/images/mining-2.jpg",
        alt: "Excavator loading a dump truck inside an active quarry",
        caption: "Extraction & processing coordination at an active site",
      },
      {
        src: "/images/mining-3.jpg",
        alt: "Close-up pile of raw, uncut opal gemstones",
        caption: "Rough gemstones, sourced and graded before sale",
      },
    ],
  },
  {
    id: "civil",
    name: "Dada Civil Contractors Ltd",
    shortName: "Civil Contractors",
    sector: "Civil Engineering & Construction",
    regNumber: "RC 8896957",
    tin: "33596920-0001",
    incorporated: "6 October 2025",
    tagline: "Infrastructure built to last generations.",
    description:
      "We plan, engineer and deliver roads, earthworks and structural projects with the discipline of a modern contractor — on schedule, on specification, and built for the terrain it serves.",
    capabilities: [
      "Road & earthworks construction",
      "Structural & civil engineering",
      "Project & site management",
      "Materials testing & quality control",
    ],
    heroImage: "/images/civil-hero.jpg",
    heroImageAlt:
      "Heavy construction machinery and excavators working an active infrastructure development site",
    overview: [
      "Dada Civil Contractors Ltd designs, manages and builds the physical infrastructure that communities and businesses run on — roads, earthworks, drainage and structural works — executed with contractor discipline from first survey to final handover.",
      "Nigeria's infrastructure deficit is well documented; closing it takes contractors who treat a road or a structure as a long-term asset, not a single invoice. That means engineering that accounts for terrain and load, procurement that doesn't cut corners on materials, and site management that keeps a project on schedule.",
      "We manage the full project lifecycle in-house: survey and engineering design, procurement and materials testing, construction and site management, and quality assurance through to handover.",
    ],
    highlights: [
      {
        title: "Road & Earthworks Construction",
        description:
          "Grading, drainage and surfacing work engineered for the terrain and traffic load it will actually carry.",
      },
      {
        title: "Structural & Civil Engineering",
        description:
          "In-house engineering for structural, drainage and earthworks design — specified before the first excavation, not during it.",
      },
      {
        title: "Project & Site Management",
        description:
          "Dedicated site management and scheduling discipline that keeps budgets, timelines and safety on track.",
      },
      {
        title: "Materials Testing & Quality Control",
        description:
          "Materials testing and inspection built into every phase, not bolted on at the end.",
      },
    ],
    gallery: [
      {
        src: "/images/civil-2.jpg",
        alt: "Wide view of an active civil infrastructure construction site with cranes and excavators",
        caption: "Site-wide infrastructure works in progress",
      },
      {
        src: "/images/civil-3.jpg",
        alt: "Two dump trucks parked at a construction site",
        caption: "Materials haulage and site logistics",
      },
    ],
  },
  {
    id: "agriculture",
    name: "Dada Green Farm Ltd",
    shortName: "Green Farm",
    sector: "Agriculture & Agro-Allied",
    regNumber: "RC 8904865",
    tin: "33603375-0001",
    incorporated: "8 October 2025",
    tagline: "Cultivating food security, sustainably.",
    description:
      "A modern agricultural operation focused on sustainable cultivation and agro-allied production — building toward food security and value-added produce for local and regional markets.",
    capabilities: [
      "Sustainable crop cultivation",
      "Agro-allied processing",
      "Land development",
      "Supply to local & regional markets",
    ],
    heroImage: "/images/agri-hero.jpg",
    heroImageAlt:
      "Aerial view of cultivated green farmland divided into neat planted rows",
    overview: [
      "Dada Green Farm Ltd is Dada Group's agricultural operation — built around sustainable cultivation and agro-allied processing to help close Nigeria's food security gap, while creating consistent, value-added produce for local and regional markets.",
      "Agriculture is Nigeria's largest employer and one of its most under-capitalised sectors. We treat farming as a structured operation rather than subsistence work: planned land use, modern cultivation practice, and processing capacity that adds value before produce ever leaves the farm gate.",
      "From land development through cultivation to agro-allied processing and market supply, we're building toward predictable harvests and dependable buyers, season after season.",
    ],
    highlights: [
      {
        title: "Sustainable Crop Cultivation",
        description:
          "Planned cultivation practices that protect soil and yield over multiple seasons, not just the next harvest.",
      },
      {
        title: "Land Development",
        description:
          "Land clearing, preparation and development carried out to support long-term cultivation, not one-off planting.",
      },
      {
        title: "Agro-Allied Processing",
        description:
          "Value-added processing that turns raw produce into market-ready product before it leaves the farm.",
      },
      {
        title: "Supply to Local & Regional Markets",
        description:
          "Structured supply relationships built for consistency — the same quality and volume, season after season.",
      },
    ],
    gallery: [
      {
        src: "/images/agri-2.jpg",
        alt: "Aerial view of excavators and heavy equipment preparing farmland for cultivation",
        caption: "Land development ahead of the planting season",
      },
      {
        src: "/images/agri-3.jpg",
        alt: "Aerial view of neat green rows of cultivated crops",
        caption: "Cultivated rows, ready for the growing season",
      },
    ],
  },
];

export const holding = {
  name: "Dada Group Ltd",
  regNumber: "RC 9438599",
  tin: "2623737670007",
  incorporated: "24 March 2026",
  hq: "Abuja, Federal Republic of Nigeria",
};

export const pillars = [
  {
    title: "Integrity",
    description:
      "Every entity under the Dada Group is formally incorporated and compliant under the Companies and Allied Matters Act — we build on a foundation of documentation, not promises.",
  },
  {
    title: "Diversification",
    description:
      "Mining, construction and agriculture are structurally different businesses. We run them as independent, specialised companies — each with its own expertise, under one group discipline.",
  },
  {
    title: "Local Resource, Global Standard",
    description:
      "Nigeria holds the raw materials, the land and the labour. We apply international standards of process, safety and quality to everything we extract, build and grow.",
  },
  {
    title: "Long-Term Value",
    description:
      "We are not building for a single contract or a single season. Dada Group is structured to compound value across resources, infrastructure and food systems over decades.",
  },
];

export const approach = [
  {
    step: "01",
    title: "Assess",
    description:
      "Every site, deposit or contract begins with rigorous technical and commercial assessment before a single commitment is made.",
  },
  {
    step: "02",
    title: "Structure",
    description:
      "We put the right entity, team and compliance framework around the opportunity — the way an institutional partner expects.",
  },
  {
    step: "03",
    title: "Execute",
    description:
      "On-ground delivery, managed with the same project discipline whether it's a mineral shipment, a road, or a harvest.",
  },
  {
    step: "04",
    title: "Sustain",
    description:
      "We build relationships and operations designed to outlast a single deal — repeat supply, repeat contracts, repeat seasons.",
  },
];
