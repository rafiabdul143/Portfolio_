import React from 'react';
import { motion } from 'framer-motion';
import BadgesSection from '../components/BadgesSection';
import {
  Code,
  GitBranch,
  Briefcase,
  Layers,
  TrendingUp,
  Cloud,
  Workflow,
  DatabaseZap,
  Cpu,
  GraduationCap,
} from 'lucide-react';
import picture from '../assets/picture.jpeg';

// Technical Toolkit: keep every skill category and item together in one section.
const skills = {
  microsoftFabric: [
    'Lakehouse',
    'Data Warehouse',
    'OneLake',
    'Data Pipelines',
    'PySpark',
    'Spark Notebooks',
    'Dataflows Gen2',
    'Mirroring',
    'Power BI',
    'Semantic Models',
    'SQL Analytics Endpoint',
  ],

  cloud: [
    'Microsoft Azure',
    'Microsoft Entra ID',
    'Azure Virtual Networks',
    'Azure Storage',
    'Azure Compute',
    'Azure Resource Management',
    'Azure Monitor',
    'Azure Governance',
    'Azure CLI',
    'PowerShell',
  ],

  devops: [
    'Git & GitHub',
    'GitHub Actions',
    'Azure DevOps',
    'CI/CD Pipelines',
    'Build & Release Pipelines',
    'Infrastructure as Code',
    'ARM Templates & Bicep',
    'Docker',
    'Kubernetes',
    'Terraform',
    'Ansible',
  ],

  frontend: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3'],

  backend: ['C#', 'ASP.NET Core', 'Node.js', 'Python', 'REST APIs'],

  databases: [
    'Microsoft SQL Server',
    'T-SQL',
    'SQL Database Development',
    'MongoDB',
    'MySQL',
  ],
};

const traineeTraining = [
  'SQL Server',
  'Azure',
  'Networking',
  'Storage',
  'DevOps Fundamentals',
  'Microsoft Fabric',
];

const internTags = ['Azure Fundamentals', 'SQL Server', 'Git & GitHub'];
const coreDomains = ['Software Development', 'Cloud', 'DevOps', 'Data Engineering'];
const professionalAttributes = [
  'Problem Solver',
  'Quick Learner',
  'Adaptable',
  'Effective Communicator',
];
const workFocus = [
  'Enterprise Fabric Support',
  'Data Engineering',
  'Data Integration',
  'Analytics Solutions',
];

const chipClass =
  'rounded-full border border-blue-800/50 bg-blue-950/40 px-3 py-1.5 text-[11px] font-medium text-blue-200';
const tagClass =
  'rounded-md border border-gray-700 bg-gray-800 px-2 py-1 text-[10px] text-gray-300';
const bulletListClass =
  'mt-1.5 list-disc space-y-1 pl-4 text-xs leading-relaxed text-gray-400 marker:text-blue-500/60';
const strongClass = 'font-semibold text-gray-200';

const About: React.FC = () => {
  const toolkitCategories = [
    { key: 'microsoftFabric', title: 'Microsoft Fabric', icon: Layers },
    { key: 'cloud', title: 'Cloud & Infrastructure', icon: Cloud },
    { key: 'devops', title: 'DevOps & CI/CD', icon: Workflow },
    { key: 'frontend', title: 'Frontend', icon: Code },
    { key: 'backend', title: 'Backend', icon: Cpu },
    { key: 'databases', title: 'Databases', icon: DatabaseZap },
  ] as const;

  return (
    <section id="about" className="relative overflow-hidden bg-black py-16 text-white md:py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-[#010d24] via-black to-[#030a17] opacity-90" />

      <div className="container relative z-10 mx-auto px-5 sm:px-6">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.1 }}
          className="mb-10 text-center"
        >
          <h2 className="mb-3 text-3xl font-extrabold tracking-tight md:text-4xl">
            About <span className="text-blue-500">Me</span>
          </h2>
          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-gray-400 md:text-base">
            Software Engineer specializing in{' '}
            <strong className="text-gray-200">Microsoft Cloud &amp; Data Platforms</strong>,
            working across enterprise data solutions, cloud technologies and application
            development.
          </p>
        </motion.div>

        {/* TOP ROW: profile on the left, professional summary on the right */}
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3 lg:gap-7">
          {/* Profile / identity panel */}
          <motion.aside
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-col rounded-2xl border border-gray-800 bg-gray-900/55 p-6 shadow-xl backdrop-blur-sm lg:col-span-1"
          >
            <div className="mx-auto mb-5 h-40 w-40 overflow-hidden rounded-full border-[3px] border-blue-600 p-1 shadow-[0_0_25px_rgba(37,99,235,0.18)] sm:h-44 sm:w-44 lg:h-40 lg:w-40">
              <img
                src={picture}
                alt="Abdul Rafi"
                className="h-full w-full rounded-full object-cover"
              />
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-white">Abdul Rafi</h3>
              <p className="mt-1 text-base font-semibold text-blue-400">Software Engineer</p>
              <p className="mt-2 text-xs leading-relaxed text-gray-400">
                Cloud &amp; Data Engineering <span className="text-gray-600">|</span> Application
                Development
              </p>
             
      
            </div>

            <div className="mt-6 border-t border-gray-800 pt-5">
              <h4 className="mb-3 text-sm font-semibold text-blue-300">Core Domains</h4>
              <div className="flex flex-wrap gap-2">
                {coreDomains.map((domain) => (
                  <span key={domain} className={chipClass}>
                    {domain}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 border-t border-gray-800 pt-5">
              <h4 className="mb-3 text-sm font-semibold text-blue-300">Professional Attributes</h4>
              <div className="flex flex-wrap gap-2">
                {professionalAttributes.map((attribute) => (
                  <span key={attribute} className={chipClass}>
                    {attribute}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 border-t border-gray-800 pt-5">
              <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-blue-300">
                <GraduationCap className="h-4 w-4" aria-hidden="true" />
                Education
              </h4>
              <div className="rounded-xl border border-gray-800 bg-black/20 p-3">
                <p className="text-xs font-semibold text-white">
                  B.Tech · CSE with IoT Specialization
                </p>
                <p className="mt-1 text-[10px] text-gray-400">KITS Warangal</p>
                <div className="mt-2 flex items-center justify-between gap-2">
                  <p className="text-[10px] text-gray-500">June 2022 – May 2025</p>
                  <span className="text-[10px] font-semibold text-gray-300">CGPA: 7.73</span>
                </div>
              </div>
            </div>

            <div className="mt-5 border-t border-gray-800 pt-5">
              <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-blue-300">
                <Briefcase className="h-4 w-4" aria-hidden="true" />
                Internship
              </h4>
              <div className="rounded-xl border border-gray-800 bg-black/20 p-3">
                <p className="text-xs font-semibold text-white">Data Science Intern</p>
                <p className="mt-1 text-[11px] font-medium text-blue-300">NIT Tiruchirappalli</p>
                <p className="mt-1 text-[10px] text-gray-500">June 2024 – July 2024</p>
                <p className="mt-2 text-[10px] leading-relaxed text-gray-400">
                  Exposure to data analysis, preprocessing and analytical techniques
                  for extracting insights from datasets.
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-xl border border-blue-800/40 bg-blue-950/25 p-3">
              <div className="flex items-center gap-2">
                <p className="text-sm font-bold text-white">6× Microsoft Certified</p>
              </div>
              <p className="mt-1 text-[10px] leading-relaxed text-gray-400">
                Azure · DevOps · Fabric · SQL · GitHub
              </p>
            </div>
          </motion.aside>

          {/* Professional summary panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true, amount: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="h-full rounded-2xl border border-gray-800 bg-gray-900/55 p-5 shadow-xl backdrop-blur-sm transition-colors duration-300 hover:border-blue-700/60 sm:p-6">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/15 text-blue-400">
                    <Briefcase className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Professional Summary</h3>
                    <p className="mt-0.5 text-[11px] text-gray-500">
                      Software Engineering · Cloud · Data Platforms
                    </p>
                  </div>
                </div>
                <span className="hidden items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-[10px] font-medium text-emerald-300 sm:inline-flex">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
                  Currently Working
                </span>
              </div>
<div className="space-y-3 text-sm leading-relaxed text-gray-300">
  <p>
    I am a <strong className="text-white">Software Engineer at Quadrant Technologies</strong>,
    working at the intersection of cloud data engineering, platform operations, and enterprise
    analytics. After joining as an intern in June 2025, I transitioned into a full-time
    engineering role in December 2025.
  </p>

  <p>
    My core focus is <strong className="text-white">Microsoft Fabric Data Engineering</strong>,
    working across the data platform lifecycle, from ingestion and transformation to analytics
    and reporting, with an emphasis on platform stability and operational efficiency.
  </p>

  <p>
    My broader technical foundation spans
    <strong className="text-white"> Microsoft Azure, networking, and DevOps</strong>,
    alongside application development using
    <strong className="text-white"> C#, ASP.NET Core MVC, SQL Server, and REST APIs</strong>.
    This cross-functional background helps me understand enterprise solutions beyond
    individual services and components.
  </p>
</div>

              <div className="mt-5 border-t border-gray-800 pt-4">
                <h4 className="mb-3 flex items-center gap-2 text-xs font-semibold text-blue-300">
                  <Layers className="h-4 w-4" aria-hidden="true" /> Current Work Focus
                </h4>
                <div className="flex flex-wrap gap-2">
                  {workFocus.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-blue-800/40 bg-blue-950/40 px-2.5 py-1 text-[10px] font-medium text-blue-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Career timeline */}
              <div className="mt-5 border-t border-gray-800 pt-4">
                <h4 className="mb-4 flex items-center gap-2 text-sm font-semibold text-blue-300">
                  <GitBranch className="h-4 w-4" aria-hidden="true" /> Career Timeline
                </h4>

                <div className="relative space-y-5 pl-6">
                  <div className="absolute bottom-2 left-[5px] top-2 w-px bg-gradient-to-b from-blue-500 via-blue-600/50 to-gray-700" />

                 {/* Software Engineer · Quadrant Technologies */}
<div className="relative">
  <span
    aria-hidden="true"
    className="absolute -left-[25px] top-1.5 h-2.5 w-2.5 rounded-full bg-blue-400 ring-4 ring-blue-400/20"
  />
  <p className="text-[11px] font-semibold uppercase tracking-wide text-blue-400">
    <time dateTime="2025-12">December 2025</time> – Present
  </p>

  <h5 className="mt-1 flex flex-wrap items-center gap-2 text-sm font-bold text-white">
    <span>Software Engineer</span>
    <span className="text-gray-600" aria-hidden="true">·</span>
    <span className="font-semibold text-blue-300">Quadrant Technologies</span>
  
  </h5>

  <ul className={bulletListClass}>
  <li>
    Provide technical support and solution engineering for
    <strong className={strongClass}> 6+ enterprise Microsoft Fabric customers</strong>,
    managing Data Factory pipelines, Lakehouse workloads, Notebooks, Warehouses,
    and Semantic Models across production environments.
  </li>

  <li>
    Investigate and resolve
    <strong className={strongClass}> 30–40 customer incidents per month</strong>,
    performing root-cause analysis for ingestion failures, notebook execution issues,
    semantic model refresh failures, and data transformation errors.
  </li>

  <li>
    Implement validation frameworks, monitoring alerts, and retry mechanisms,
    improving successful pipeline execution rates from approximately
    <strong className={strongClass}> 85% to over 95%</strong>
    across production workloads.
  </li>
</ul>
</div>


{/* Software Engineer Intern · Quadrant Technologies */}
<div className="relative">
  <span
    aria-hidden="true"
    className="absolute -left-[25px] top-1.5 h-2.5 w-2.5 rounded-full bg-gray-500 ring-4 ring-gray-500/15"
  />
  <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-500">
    <time dateTime="2025-06">June 2025</time> –{" "}
    <time dateTime="2025-11">November 2025</time>
  </p>

  <h5 className="mt-1 flex flex-wrap items-center gap-2 text-sm font-bold text-white">
    <span>Software Engineer Intern</span>
    <span className="text-gray-600" aria-hidden="true">·</span>
    <span className="font-semibold text-blue-300">Quadrant Technologies</span>
  </h5>

  <ul className={bulletListClass}>
    <li>
      Completed structured training across
      <strong className={strongClass}> Microsoft Azure, SQL Server, Networking, Storage, C# and Microsoft Fabric</strong>,
      gaining hands-on experience through labs and internal project assignments.
    </li>

    <li>
      Contributed to internal engineering projects by developing SQL queries,
      REST APIs and application features while participating in debugging,
      testing and code review activities under senior engineer mentorship.
    </li>

    <li>
      Built foundational knowledge in cloud infrastructure, data platforms and
      enterprise application development, leading to a full-time engineering role.
    </li>
  </ul>

  <div className="mt-2 flex flex-wrap gap-1.5">
    {internTags.map((item) => (
      <span key={item} className={tagClass}>
        {item}
      </span>
    ))}
  </div>
</div>
                  {/* C# Developer Intern · Shalsys */}
                  <div className="relative">
                    <span
                      aria-hidden="true"
                      className="absolute -left-[25px] top-1.5 h-2.5 w-2.5 rounded-full bg-gray-500 ring-4 ring-gray-500/15"
                    />
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                      <time dateTime="2025-03">March 2025</time> –{' '}
                      <time dateTime="2025-05">May 2025</time>
                    </p>
                    <h5 className="mt-1 text-sm font-bold text-white">
                      C# Developer Intern · Shalsys Private Limited
                    </h5>
                    <p className="mt-1 text-xs leading-relaxed text-gray-400">
                      Worked on C# Windows applications and SQL Server queries, with foundational
                      exposure to ASP.NET Core MVC, Epicor ERP and enterprise business solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* SECOND ROW: one full-width Technical Toolkit section */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true, amount: 0.08 }}
          aria-labelledby="technical-toolkit-heading"
          className="mt-7 rounded-2xl border border-gray-800 bg-gray-900/50 p-5 shadow-2xl backdrop-blur-sm sm:p-6"
        >
          <div className="mb-5 flex flex-wrap items-end justify-between gap-2 border-b border-gray-700 pb-3">
            <div>
              <h3 id="technical-toolkit-heading" className="text-xl font-bold text-blue-400">
                Technical Toolkit
              </h3>
              <p className="mt-1 text-xs text-gray-500">
                Technologies and tools across my engineering disciplines
              </p>
            </div>
            <span className="text-[10px] font-medium uppercase tracking-wider text-gray-500">
              {toolkitCategories.length} Skill Areas
            </span>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {toolkitCategories.map(({ key, title, icon: Icon }) => (
              <div
                key={key}
                className="group rounded-xl border border-gray-800 bg-black/20 p-4 transition-all duration-300 hover:border-blue-700/60 hover:bg-gray-900/70"
              >
                <h4 className="mb-3 flex items-center gap-2 text-sm font-bold text-white">
                  <Icon
                    className="h-5 w-5 text-blue-500 transition-colors group-hover:text-blue-300"
                    aria-hidden="true"
                  />
                  {title}
                </h4>
                <ul className="ml-1 list-none space-y-1.5 text-xs text-gray-400">
                  {skills[key].map((skill) => (
                    <li key={skill} className="flex items-start">
                      <span
                        aria-hidden="true"
                        className="mr-2 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500"
                      />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>
      </div>

      <BadgesSection />
    </section>
  );
};

export default About;