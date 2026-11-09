export const navLinks = [
  { label: "Businesses", href: "/#businesses" },
  { label: "Mining & Energies", href: "/businesses/mining" },
  { label: "Civil Contractors", href: "/businesses/civil" },
  { label: "Green Farm", href: "/businesses/agriculture" },
  { label: "About", href: "/#about" },
  { label: "Team", href: "/team" },
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
  video?: {
    src: string;
    poster?: string;
    caption: string;
  };
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
        src: "/images/mining-processing.jpg",
        alt: "Workers processing raw mineral concentrate by hand on-site",
        caption: "On-site mineral processing and beneficiation",
      },
      {
        src: "/images/mining-sample-1.jpg",
        alt: "Raw copper-bearing mineral ore samples",
        caption: "Raw ore samples, assessed before processing",
      },
      {
        src: "/images/mining-sample-2.jpg",
        alt: "Raw mica and quartz-bearing mineral rock samples",
        caption: "Mineral-bearing rock from an active site",
      },
    ],
    video: {
      src: "/videos/mining-operations.mp4",
      caption: "Mineral processing in motion on an active Dada Minings & Energies site",
    },
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

export type TeamExperience = {
  role: string;
  org: string;
  period?: string;
  points: string[];
};

export type TeamMember = {
  id: string;
  name: string;
  initials: string;
  photo?: string;
  role: string;
  tagline: string;
  bio: string[];
  highlights?: string[];
  experience?: TeamExperience[];
  projects?: string[];
  skills?: string[];
  education?: string[];
  memberships?: string[];
  languages?: string[];
  contact?: {
    email?: string;
    phone?: string;
  };
};

export const teamMembers: TeamMember[] = [
  {
    id: "nuhu-aminu-nuhu",
    name: "Engr. Nuhu Aminu Nuhu",
    initials: "NA",
    photo: "/images/team-nuhu-aminu.jpg",
    role: "Founder & Group Chief Executive Officer",
    tagline: "Civil Engineer · Entrepreneur · International Development Advocate",
    bio: [
      "Engr. Nuhu Aminu Nuhu is a Nigerian entrepreneur, civil engineer and international development advocate, serving as the Founder and Group Chief Executive Officer of Dada Group — a diversified Nigerian business group with interests in construction and civil engineering, agriculture, mining and energy, and international trade.",
      "With an academic background in Civil Engineering and a Master's degree specialising in Project Management and Building Information Modelling (BIM), he brings together technical knowledge, strategic management and an entrepreneurial vision to drive sustainable business development and infrastructure growth.",
      "He is currently pursuing a PhD in Civil Engineering at Beijing Jiaotong University (BJTU), China, where his academic interests focus on intelligent geotechnical risk assessment, railway infrastructure resilience and emerging technologies in infrastructure development. His international academic experience across Nigeria, Russia and China has strengthened his understanding of global business environments, international cooperation and cross-border partnerships.",
      "Beyond entrepreneurship and engineering, he is actively involved in international youth leadership and institutional engagement, serving as Global President of the National Association of Nigerian Students in Diaspora (NANS-D) — providing leadership and representation for Nigerian students across the global diaspora.",
      "His vision as Founder and Group CEO is to build a competitive, innovative and internationally connected Nigerian enterprise capable of delivering quality services, developing strategic partnerships, creating economic opportunities and contributing to sustainable development — with Dada Group committed throughout to professionalism, integrity, innovation, operational excellence and long-term value creation.",
    ],
    highlights: [
      "Civil Engineering & Project Management",
      "Building Information Modelling (BIM)",
      "International Business Development",
      "Youth & Diaspora Leadership",
    ],
    education: [
      "PhD Candidate, Civil Engineering — Beijing Jiaotong University (BJTU), China",
      "M.Sc. Civil Engineering — Project Management & BIM",
      "B.Eng. Civil Engineering",
    ],
    memberships: [
      "Global President, National Association of Nigerian Students in Diaspora (NANS-D)",
    ],
  },
  {
    id: "mubarak-aminu",
    name: "Mubarak Aminu",
    initials: "MA",
    photo: "/images/team-mubarak-aminu.jpg",
    role: "Managing Director",
    tagline:
      "Mining Entrepreneur · Mineral Processing Specialist · Strategic Minerals Executive",
    bio: [
      "Mubarak Aminu is a Nigerian mining entrepreneur, mineral processing specialist and business executive serving as the Managing Director of Dada Group — a company committed to advancing Nigeria's mineral resources through responsible mining, mineral processing, strategic sourcing and international mineral trade.",
      "With nearly a decade of experience and involvement in Nigeria's mining and solid minerals sector, he has developed practical expertise across mineral exploration and sourcing, mining operations, processing, mineral beneficiation, supply-chain management and commercial negotiations.",
      "His professional engagement spans a diverse portfolio of strategic minerals, including tin (cassiterite), tantalite, columbite, monazite, zircon, ilmenite, wolframite, gold, lithium-bearing minerals, bastnäsite, mica, copper and other industrial and critical minerals. Through his involvement in processing operations, he has gained valuable experience in ore characteristics, mineral separation, concentrate production, material specifications, grade assessment and the commercial requirements of mineral buyers and international processing industries.",
      "Under his leadership, Dada Group is focused on building a reliable and commercially sustainable mineral supply network — connecting verified mining sources and processing operations in Nigeria with domestic and international buyers, investors, smelters and mineral processing companies. His broader vision is to contribute to the development of Nigeria's solid minerals industry by promoting value addition, responsible sourcing, operational efficiency and stronger international partnerships — connecting Nigeria's mineral wealth to global industrial opportunities.",
    ],
    highlights: [
      "Mining & Mineral Sourcing — building relationships with mining communities, licensed operators and strategic suppliers",
      "Mineral Processing & Beneficiation — transforming raw mineral resources into higher-value concentrates",
      "Critical & Strategic Minerals — supply and development of minerals essential to manufacturing, clean energy and electronics",
      "International Mineral Trade — offtake arrangements, export opportunities and long-term supply agreements",
      "Investment & Strategic Partnerships — connecting local opportunities with investors across Asia and the Middle East",
    ],
  },
  {
    id: "malzam-muazu-isah",
    name: "Malzam Mu'azu Isah",
    initials: "MI",
    role: "Geoscientist",
    tagline: "Geoscientist · Industry Leader · Community Builder",
    bio: [
      "Malzam Mu'azu Isah turns rock, data and people into results. A Nigerian geologist with over five years of field leadership at Nanomines Limited, he has worked across lead, zinc, gold, tin and columbite — from ore characterisation and resource estimation to grade control and HSE management.",
      "He is completing an M.Sc. in Geology (Complex Data Analysis in Geosciences) at Kazan Federal University, combining seismic interpretation and machine learning with hands-on field experience in Petrel, Techlog and IP Seismic.",
      "Beyond the technical work, Malzam leads: he is President of the Nigerian Students' Association at KFU and of NANS-Russia, and as a fluent English and conversational Russian speaker, he builds bridges between Africa, Russia and the global resource industry.",
    ],
    highlights: [
      "Ore Characterisation & Resource Estimation",
      "Grade Control & HSE Management",
      "Seismic Interpretation & Machine Learning",
      "Petrel, Techlog & IP Seismic",
    ],
    education: [
      "M.Sc. Geology, Complex Data Analysis in Geosciences — Kazan Federal University, Russia (in progress)",
    ],
    memberships: [
      "President, Nigerian Students' Association, Kazan Federal University",
      "President, NANS-Russia",
    ],
    languages: ["English (fluent)", "Russian (conversational)"],
  },
  {
    id: "abdulmumin-abdullah-ibrahim",
    name: "Abdulmumin Abdullah Ibrahim",
    initials: "AI",
    role: "Head, Construction Division",
    tagline:
      "Civil Engineer · Construction & Project Management Specialist · Infrastructure Development Leader",
    bio: [
      "Abdulmumin Abdullah Ibrahim is a Nigerian civil engineering professional with experience in construction operations, project management and infrastructure development across Nigeria and Togo. His experience spans residential construction, foundation works, land reclamation, soil stabilisation, site supervision and construction safety.",
      "Having served in Project Manager and Assistant Project Manager capacities, he has coordinated construction teams, monitored project schedules, tracked progress against planned milestones, managed site resources, coordinated subcontractors and overseen quality and safety inspections. His approach emphasises measurable project performance, efficient resource utilisation, timely execution and compliance with engineering standards.",
      "He holds a Bachelor's degree in Civil Engineering from IAEC University, Togo, and is pursuing an M.Sc. in Petroleum Engineering at Kazan Federal University, Russia. As head of the Group's Construction Division, he is committed to delivering quality infrastructure, operational efficiency and sustainable, standards-compliant execution across every project.",
    ],
    highlights: [
      "Residential Construction & Foundation Works",
      "Land Reclamation & Soil Stabilisation",
      "Site Supervision & Construction Safety",
      "Project Scheduling & Subcontractor Coordination",
    ],
    education: [
      "M.Sc. Petroleum Engineering — Kazan Federal University, Russia (in progress)",
      "B.Eng. Civil Engineering — IAEC University, Togo",
    ],
  },
  {
    id: "haruna-ibrahim-haruna",
    name: "Haruna Ibrahim Haruna",
    initials: "HI",
    photo: "/images/team-haruna-ibrahim.jpg",
    role: "Surveying & Geoinformatics Professional",
    tagline: "Engineering Surveying · Road & Infrastructure Projects · GIS",
    bio: [
      "Surveying and Geoinformatics professional with hands-on experience supporting road, housing, drainage and culvert construction projects, alongside GIS-based land administration work. Experienced in site surveying, construction setting-out, road horizontal and vertical alignment, elevation control, and survey data acquisition using GNSS, Total Station and levelling instruments.",
      "Also experienced in GIS data editing and digitisation through the Kano Geographic Information System (KANGIS) land administration automation project — bringing a practical combination of field surveying, geospatial data management and construction project exposure.",
    ],
    highlights: [
      "Engineering Surveying & Construction Setting-Out",
      "Road Horizontal & Vertical Alignment, Elevation Control",
      "GNSS, Total Station & Levelling Operations",
      "Survey Control & Construction Data Acquisition",
      "GIS Data Editing, Digitisation & Geospatial Management",
      "Land Administration Records & GIS Automation Support",
    ],
    experience: [
      {
        role: "Surveyor",
        org: "Radoc Construction",
        period: "September 2026 – Present",
        points: [
          "Conducts surveying and construction data acquisition to support project execution.",
          "Carries out setting-out activities and assists with establishing and checking construction positions.",
          "Supports road horizontal and vertical alignment works and maintains elevation control.",
        ],
      },
      {
        role: "GIS Analyst",
        org: "JABTEK Computer Solutions Consultancy — KANGIS Land Administration Automation",
        period: "November 2024 – June 2025",
        points: [
          "Edited and managed data collected by field enumerators for the KANGIS land administration automation project.",
          "Scanned legacy paper records and uploaded digitised files to digital storage.",
          "Supported physical file management and tracking, including monitoring records moving into and out of the filing system.",
        ],
      },
      {
        role: "Chief Surveyor",
        org: "Geomatic Consult Integrated Services — 200-Unit Housing Project, Adamawa State",
        period: "2019 – 2021",
        points: [
          "Led surveying activities for a 200-unit housing development.",
          "Located and established the positions of the 200 housing units to support site layout and construction.",
        ],
      },
      {
        role: "Site Manager",
        org: "Kanwood Construction and Block Industry",
        points: [
          "Held site-management responsibilities within a construction and block-industry operation.",
        ],
      },
    ],
    projects: [
      "200-unit housing development, Adamawa State — surveying and location of the housing units.",
      "3 km road project, Danbatta, Kano State; 2 km township road, Jambulo, Kano State; township road, Doko, Garki LGA, Jigawa State.",
      "Drainage construction, Darki town, Wudil LGA, Kano State.",
      "Six-cell culvert project, Bebeji LGA, Kano State (ecological project).",
    ],
    skills: [
      "GNSS, Total Station & Levelling Instruments",
      "AutoCAD & Civil 3D",
      "ArcGIS, QGIS & Landsat Imagery",
      "Construction Setting-Out & Spatial Data Management",
    ],
    education: [
      "B.Tech. Surveying and Geo-informatics — Modibbo Adama University of Technology, Yola, Nigeria (Sept 2016 – Jan 2024, Second Class Lower Division)",
    ],
    memberships: [
      "Pupilage Member, Nigerian Institution of Surveyors (NIS) — June 2025 to present",
      "Certificate of Participation, NIS Annual General Meeting, Kano — 2026",
      "Senator representing the department, Student Representative Assembly (SRA) — 2018–2019",
    ],
    languages: ["English", "Hausa"],
    contact: {
      email: "harunaibrahimbappa@gmail.com",
      phone: "+234 806 5171 913",
    },
  },
];
