import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, ShieldCheck, Sparkles, Star } from "lucide-react";
import DataAnalyticsImg from '../assets/data analytics.png';

import google_1 from '../assets/google_1.png';
import networking from '../assets/Networking.png';
import cybersecurity from '../assets/Cybersecurity.png';
import amazon from '../assets/amazon_1.png';
import google_2 from '../assets/google_2.png';
import google_3 from '../assets/google_2.png';
import Ccna from '../assets/Ccna.png'
import python_1 from '../assets/python_1.png';
import amazon1 from '../assets/amazon_2.png';
import amazon2 from '../assets/amazon_3.png';
import Dp700 from '../assets/dp700.png';
import Dp600 from '../assets/dp600.png';
import Dp800 from '../assets/dp800.png';
import Az400 from '../assets/az400.png';
import Az104 from '../assets/az104.png';
import Gh200 from '../assets/githubactions.png';


// ============================================================
// DATA — badge fields (img/link/name/issuer) are unchanged.
// A `tier` field drives the visual hierarchy below. Assignment
// is based on industry recognition + relevance to Software
// Engineering / Cloud / Data / the Microsoft ecosystem:
//
//   tier1 — Flagship: Microsoft Fabric Data Engineer cert +
//           the Data Analytics research internship. These are
//           the two strongest signals in the current dataset.
//   tier2 — High-value platform/security certs (CCNA, Python,
//           Google Cloud x2, Cybersecurity).
//   tier3 — Supporting AWS Educate badges + networking basics.
//
// NOTE: DP-800 (SQL) and AZ-104 (Azure Admin) were requested
// for Tier 1 but have no corresponding entry (no image/link)
// in the source data, so they aren't fabricated here. Add them
// as objects with tier: "tier1" and they'll automatically join
// the Spotlight rotation below — nothing else needs to change.
// ============================================================
type Tier = "tier1" | "tier2" | "tier3";

interface Badge {
  img: string;
  link: string;
  name: string;
  issuer: string;
  tier: Tier;
  // Short one-line description — only populated for Tier 1
  // flagship credentials, shown in the Spotlight Hero.
  description?: string;
}

const badges: Badge[] = [
  { img: Dp700 ,
    link: "https://learn.microsoft.com/api/credentials/share/en-us/Abdul1Rafi/D7500F731B21916C?sharingId=F405F5CEA2FEC3B5",
     name: "Fabric Data Engineer Associate ", 
     issuer: "Microsoft", 
     tier: "tier1", 
     description: "Validates skills in designing, implementing, and managing enterprise-scale data engineering solutions using Microsoft Fabric." 
    },
  {
  img: Az104,
  link: "https://learn.microsoft.com/api/credentials/share/en-us/Abdul1Rafi/B112B367276E36F5?sharingId=F405F5CEA2FEC3B5",
  name: "Azure Administrator",
  issuer: "Microsoft",
  tier: "tier1",
  description: "Validates skills in implementing, managing, and monitoring Azure identity, governance, storage, compute, virtual networks, and cloud resources."
},
{
  img: Az400,
  link: "https://learn.microsoft.com/api/credentials/share/en-us/Abdul1Rafi/C4DAA33671F8E1EC?sharingId=F405F5CEA2FEC3B5",
  name: "DevOps Engineer",
  issuer: "Microsoft",
  tier: "tier1",
  description: "Validates expertise in designing and implementing DevOps practices, CI/CD pipelines, infrastructure automation, monitoring, and collaboration using Azure."
},
{
  img: Gh200,
  link: "https://learn.microsoft.com/api/credentials/share/en-us/Abdul1Rafi/C45C1354F93E2D76?sharingId=F405F5CEA2FEC3B5",
  name: "GitHub Actions",
  issuer: "Microsoft",
  tier: "tier1",
  description: "Validates proficiency in using GitHub Copilot to accelerate software development, improve code quality, and enhance developer productivity with AI."
},
{
  img: Dp800,
  link: "https://learn.microsoft.com/api/credentials/share/en-us/Abdul1Rafi/DDAA5F7681D816BA?sharingId=F405F5CEA2FEC3B5",
  name: "SQL AI Developer Associate",
  issuer: "Microsoft",
  tier: "tier1",
  description: "Validates skills in implementing, managing, and optimizing SQL Server databases while leveraging AI-powered capabilities for modern data solutions."
},
{
  img: Dp600,
  link: "https://learn.microsoft.com/api/credentials/share/en-us/Abdul1Rafi/570051E3818C2C89?sharingId=F405F5CEA2FEC3B5",
  name: "Fabric Analytics Engineer Associate",
  issuer: "Microsoft",
  tier: "tier1",
  description: "Validates expertise in designing, building, and optimizing enterprise analytics solutions using Microsoft Fabric, Power BI, and modern data warehousing."
},
  { img: DataAnalyticsImg, link: "https://www.linkedin.com/posts/abdulrafi0870_data-science-internship-at-nit-trichy-activity-7225038436569595904-TMte?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEOf1RMBnMTpFDWRJN_Fj4ZQJTwrG57J6-8",
     name: "Data Science Internship",
      issuer: "NIT TRICHY", 
     tier: "tier1",
      description: "Research internship applying data analytics and visualization techniques to real-world datasets."
     },
  { img: google_1, link: "https://www.credly.com/earner/earned/badge/89d0f82c-5eed-48d9-9f30-d04fb259bc28", name: " Cloud Computing", issuer: "Google Cloud ", tier: "tier2" },
  { img: google_2, link: "https://www.credly.com/earner/earned/badge/e1da049b-959a-45cb-9095-0b533c22900f", name: "Google Cloud Network", issuer: "Google Cloud", tier: "tier2" },
  { img: google_3, link: "https://www.credly.com/earner/earned/badge/540b7f1e-800a-45b6-a36d-ecc1f003fe7e", name: "Load Balancer", issuer: "Google Cloud", tier: "tier2" },
  { img: cybersecurity, link: "https://www.credly.com/badges/1b34e777-19e8-4393-8cf5-9b26f011b19c", name: "CyberSecurity", issuer: "Cisco Networks ", tier: "tier3" },
  { img: networking, link: "https://www.credly.com/badges/1297ccee-71b5-4541-a35f-bc88c80722ee", name: "Networking", issuer: "Cisco Networks", tier: "tier3" },
  { img: python_1, link: "https://www.credly.com/badges/b233454e-1ed7-4b85-aeb3-5c6730824648", name: "Python Essentials", issuer: "Cisco Networks", tier: "tier3" },
  { img: Ccna, link: "https://www.credly.com/badges/3089f15a-92f9-436d-9dc2-537b110ff33b", name: "CCNA", issuer: "Cisco Network", tier: "tier3" },
  { img: amazon, link: "https://www.credly.com/earner/earned/badge/e1da049b-959a-45cb-9095-0b533c22900f", name: "ServerLess", issuer: "AWS Educate", tier: "tier2" },
  { img: amazon1, link: "https://www.credly.com/badges/1297ccee-71b5-4541-a35f-bc88c80722ee", name: " AWS Storage", issuer: "AWS Educate", tier: "tier2" },
];

const tier1 = badges.filter((b) => b.tier === "tier1");
const tier2 = badges.filter((b) => b.tier === "tier2");
const tier3 = badges.filter((b) => b.tier === "tier3");

const SPOTLIGHT_INTERVAL_MS = 5500;
const prefersReducedMotion =
  typeof window !== "undefined" && window.matchMedia
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;

// ============================================================
// SECTION EYEBROW — a small reusable label used to introduce
// each tier, so the story ("flagship → core → additional") is
// legible even before a recruiter reads a single badge name.
// ============================================================
const SectionEyebrow: React.FC<{ label: string; description: string }> = ({ label, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="mb-8 flex flex-col items-center text-center"
  >
    <span className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">{label}</span>
    <p className="max-w-md text-sm text-gray-500">{description}</p>
  </motion.div>
);

// ============================================================
// TIER 1 — SPOTLIGHT HERO
// Auto-rotating, single flagship card. Largest image, richest
// motion, an animated conic-gradient halo, and a persistent
// (not hover-only) CTA — maximum, undivided attention.
// ============================================================
const SpotlightHero: React.FC<{ items: Badge[] }> = ({ items }) => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (items.length < 2 || paused || prefersReducedMotion) return;
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, SPOTLIGHT_INTERVAL_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [items.length, paused, index]);

  if (items.length === 0) return null;
  const badge = items[index];

  const go = (dir: 1 | -1) => setIndex((prev) => (prev + dir + items.length) % items.length);

  return (
    <div className="mb-24">
      <SectionEyebrow
        label="Tier 1 · Flagship Achievements"
        description="The credentials that define my professional identity."
      />

      <div
        className="relative mx-auto max-w-5xl"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Rotating conic-gradient halo — the section's signature element */}
        <div className="spotlight-halo pointer-events-none absolute -inset-[2px] rounded-[32px] opacity-70" />
        <div className="pointer-events-none absolute -inset-16 -z-10 rounded-full bg-blue-600/20 blur-[100px]" />

        <div className="relative overflow-hidden rounded-[30px] bg-gradient-to-br from-gray-950 via-black to-gray-950 p-[2px]">
          <div className="relative overflow-hidden rounded-[28px] bg-black/90 backdrop-blur-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={badge.link + badge.name}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center gap-10 p-10 md:flex-row md:p-16"
              >
                {/* Image with pulsing glow */}
                <a
                  href={badge.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View credential: ${badge.name} by ${badge.issuer}`}
                  className="relative flex-shrink-0 rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/80"
                >
                  <motion.div
                    animate={{ scale: [1, 1.03, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 rounded-3xl bg-blue-500/40 blur-3xl"
                  />
                  <motion.div
                    whileHover={{ scale: 1.06, rotate: 2 }}
                    transition={{ type: "spring", stiffness: 260, damping: 18 }}
                    className="relative flex h-48 w-48 items-center justify-center rounded-3xl border border-blue-500/30 bg-gradient-to-br from-gray-800 to-gray-950 p-7 shadow-[0_0_80px_-10px_rgba(59,130,246,0.6)] md:h-60 md:w-60"
                  >
                    <img src={badge.img} alt={badge.name} className="h-full w-full object-contain" />
                  </motion.div>
                </a>

                {/* Copy */}
                <div className="flex flex-1 flex-col items-center text-center md:items-start md:text-left">
                  <span className="mb-4 flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-300">
                    <Star className="h-3.5 w-3.5" strokeWidth={2.5} />
                    Flagship Credential
                  </span>
                  <h3 className="mb-2 text-3xl font-bold leading-tight text-white md:text-5xl">
                    {badge.name.trim()}
                  </h3>
                  <p className="mb-3 text-lg font-medium text-gray-400">{badge.issuer.trim()}</p>
                  {badge.description && (
                    <p className="mb-6 max-w-md text-sm leading-relaxed text-gray-500">{badge.description}</p>
                  )}

                  <div className="mb-8 flex items-center gap-2">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                    <span className="text-sm font-medium text-green-400">Verified Credential</span>
                  </div>

                  <a
                    href={badge.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition-all duration-300 hover:bg-blue-500 hover:shadow-blue-500/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                  >
                    View Credential
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Arrows */}
            {items.length > 1 && (
              <>
                <button
                  aria-label="Previous flagship credential"
                  onClick={() => go(-1)}
                  className="absolute left-4 top-1/2 hidden -translate-y-1/2 rounded-full border border-white/10 bg-black/50 p-2 text-gray-300 backdrop-blur-md transition-colors hover:border-blue-400/60 hover:text-blue-300 md:flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  aria-label="Next flagship credential"
                  onClick={() => go(1)}
                  className="absolute right-4 top-1/2 hidden -translate-y-1/2 rounded-full border border-white/10 bg-black/50 p-2 text-gray-300 backdrop-blur-md transition-colors hover:border-blue-400/60 hover:text-blue-300 md:flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}
          </div>
        </div>

        {/* Dots + auto-advance progress */}
        {items.length > 1 && (
          <div className="mt-6 flex items-center justify-center gap-2">
            {items.map((item, i) => (
              <button
                key={item.link + item.name}
                aria-label={`Show flagship credential ${i + 1}: ${item.name}`}
                aria-current={i === index}
                onClick={() => setIndex(i)}
                className="relative h-1.5 w-10 overflow-hidden rounded-full bg-white/10"
              >
                {i === index && !prefersReducedMotion && !paused && (
                  <motion.span
                    key={`${index}-progress`}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: SPOTLIGHT_INTERVAL_MS / 1000, ease: "linear" }}
                    className="absolute inset-y-0 left-0 rounded-full bg-blue-400"
                  />
                )}
                {i === index && (paused || prefersReducedMotion) && (
                  <span className="absolute inset-0 rounded-full bg-blue-400" />
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// ============================================================
// TIER 2 / TIER 3 — shared card, sized + toned by tier
// ============================================================
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, delay: Math.min(i * 0.06, 0.5), ease: [0.22, 1, 0.36, 1] },
  }),
};

const staticTierStyles: Record<
  "tier2" | "tier3",
  {
    Icon: typeof ShieldCheck;
    eyebrow: string;
    imgBox: string;
    titleSize: string;
    padding: string;
    borderIdle: string;
    borderHover: string;
    glow: string;
    lift: number;
  }
> = {
  tier2: {
    Icon: ShieldCheck,
    eyebrow: "Core Skill",
    imgBox: "h-16 w-16 md:h-20 md:w-20",
    titleSize: "text-lg",
    padding: "p-6",
    borderIdle: "border-gray-800/60",
    borderHover: "group-hover:border-blue-500/60",
    glow: "group-hover:shadow-[0_0_44px_-12px_rgba(59,130,246,0.45)]",
    lift: -6,
  },
  tier3: {
    Icon: Sparkles,
    eyebrow: "Verified",
    imgBox: "h-10 w-10 md:h-11 md:w-11",
    titleSize: "text-sm",
    padding: "p-4",
    borderIdle: "border-gray-800/50",
    borderHover: "group-hover:border-blue-500/35",
    glow: "group-hover:shadow-[0_0_20px_-10px_rgba(59,130,246,0.3)]",
    lift: -3,
  },
};

const StaticBadgeCard: React.FC<{ badge: Badge; index: number; tier: "tier2" | "tier3" }> = ({
  badge,
  index,
  tier,
}) => {
  const s = staticTierStyles[tier];
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      className="group"
    >
      <motion.a
        href={badge.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View credential: ${badge.name} by ${badge.issuer}`}
        whileHover={{ y: s.lift }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
        className={`relative flex h-full flex-col rounded-[24px] border ${s.borderIdle} ${s.borderHover} ${s.glow} bg-gradient-to-br from-gray-900/90 to-black/80 ${s.padding} backdrop-blur-sm transition-all duration-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/80`}
      >
        <div className="mb-3 flex items-center justify-between">
          <span className="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-gray-500 transition-colors group-hover:text-blue-400">
            <s.Icon className="h-3 w-3" strokeWidth={2.5} />
            {s.eyebrow}
          </span>
          {tier === "tier2" && (
            <ArrowUpRight className="h-3.5 w-3.5 text-gray-600 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blue-400 group-hover:opacity-100" />
          )}
        </div>

        <div className="mb-4 flex flex-1 items-center justify-center">
          <div
            className={`${s.imgBox} flex items-center justify-center rounded-xl border border-gray-700/50 bg-gradient-to-br from-gray-800 to-gray-900 p-2 transition-colors duration-300 group-hover:border-blue-800/50`}
          >
            <img
              src={badge.img}
              alt={badge.name}
              className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        </div>

        <div className="text-center">
          <h4 className={`${s.titleSize} font-bold leading-tight text-white transition-colors group-hover:text-blue-400`}>
            {badge.name.trim()}
          </h4>
          <p className="mt-1 text-xs font-medium text-gray-500">{badge.issuer.trim()}</p>
        </div>
      </motion.a>
    </motion.div>
  );
};

// ============================================================
// SECTION
// ============================================================
const BadgesSection: React.FC = () => {
  return (
    <section className="relative mb-0 overflow-hidden bg-black py-20">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#010d24] via-[#00030b] to-black opacity-90" />
        <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-blue-500/10 blur-[100px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <motion.h2
            className="mb-6 text-4xl font-bold text-white md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Badges{" "}
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent drop-shadow-lg">
              & Certification
            </span>
          </motion.h2>
          <motion.p
            className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-400 md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A collection of badges and certifications that reflect my expertise and growth in technology
          </motion.p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mx-auto mt-6 h-1 rounded-full bg-gradient-to-r from-blue-600 to-blue-400"
          />
        </motion.div>

        {/* TIER 1 — Spotlight */}
        <SpotlightHero items={tier1} />

        {/* TIER 2 — Core Expertise */}
        <div className="mb-20">
          <SectionEyebrow
            label="Tier 2 · Core Expertise"
            description="Cloud credentials that strongly support my profile."
          />
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
            {tier2.map((badge, index) => (
              <StaticBadgeCard key={badge.link + badge.name} badge={badge} index={index} tier="tier2" />
            ))}
          </div>
        </div>

        {/* TIER 3 — Additional Learning */}
        <div>
          <SectionEyebrow
            label="Tier 3 · Additional Learning"
            description="Badges that show continuous, hands-on learning."
          />
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-5">
            {tier3.map((badge, index) => (
              <StaticBadgeCard key={badge.link + badge.name} badge={badge} index={index} tier="tier3" />
            ))}
          </div>
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3">
            <div className="transform cursor-pointer rounded-xl border border-gray-800/50 bg-gradient-to-br from-gray-900/50 to-black/30 p-6 shadow-md backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-blue-500/40">
              <div className="mb-2 text-3xl font-bold text-blue-400">12+</div>
              <div className="font-medium text-gray-300">Technologies Mastered</div>
            </div>

            <div className="transform cursor-pointer rounded-xl border border-gray-800/50 bg-gradient-to-br from-gray-900/50 to-black/30 p-6 shadow-md backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-blue-500/40">
              <div className="mb-2 text-3xl font-bold text-blue-400">25+</div>
              <div className="font-medium text-gray-300">Projects Completed</div>
            </div>

            <div className="transform cursor-pointer rounded-xl border border-gray-800/50 bg-gradient-to-br from-gray-900/50 to-black/30 p-6 shadow-md backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-blue-500/40">
              <div className="mb-2 text-3xl font-bold text-blue-400">100%</div>
              <div className="font-medium text-gray-300">Verified</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Signature spotlight halo + reduced-motion support */}
      <style>{`
        .spotlight-halo {
          background: conic-gradient(from 0deg, #3b82f6, transparent 25%, #60a5fa, transparent 75%, #3b82f6);
          animation: spin-halo 6s linear infinite;
        }
        @keyframes spin-halo {
          to { transform: rotate(360deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          .spotlight-halo { animation: none; }
          * {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
};

export default BadgesSection;