import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, MotionConfig, motion, type PanInfo, type Variants } from "framer-motion";
import { ArrowUpRight, BadgeCheck, ChevronLeft, ChevronRight } from "lucide-react";
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
import redis from '../assets/redis.png';

// ============================================================
// CONSTANTS
// ============================================================
const AUTOPLAY_MS = 7000;
const SWIPE_DISTANCE_PX = 60;
const SWIPE_VELOCITY = 500;
const POST_DRAG_CLICK_GUARD_MS = 300;

// ============================================================
// TYPES
// ============================================================
type Tier = "tier1" | "tier2" | "tier3";

interface Badge {
  img: string;
  link: string;
  name: string;
  issuer: string;
  tier: Tier;
  /** Exam / credential code, e.g. "DP-700". Flagship only. */
  code?: string;
  /** Certification level, e.g. "Associate". Flagship only. */
  level?: string;
  /** 1–2 sentence overview of what the credential covers. Flagship only. */
  summary?: string;
  /** Products / technologies the credential is about. Flagship only. */
  technologies?: string[];
}

// ============================================================
// DATA
// Flagship order is deliberate: Data Engineering leads, because
// that is the specialisation recruiters should see first.
// ============================================================
const badges: Badge[] = [
  {
    img: Dp700,
    link: "https://learn.microsoft.com/api/credentials/share/en-us/Abdul1Rafi/D7500F731B21916C?sharingId=F405F5CEA2FEC3B5",
    name: "Fabric Data Engineer",
    issuer: "Microsoft",
    tier: "tier1",
    code: "DP-700",
    level: "Associate",
    summary: "Validates the ability to design, build and operate enterprise data engineering solutions on Microsoft Fabric, from ingestion and transformation to monitoring and optimisation.",
    technologies: ["Microsoft Fabric", "Lakehouse", "Data Pipelines", "PySpark", "T-SQL", "KQL"],
  },
  {
    img: Dp600,
    link: "https://learn.microsoft.com/api/credentials/share/en-us/Abdul1Rafi/570051E3818C2C89?sharingId=F405F5CEA2FEC3B5",
    name: "Fabric Analytics Engineer",
    issuer: "Microsoft",
    tier: "tier1",
    code: "DP-600",
    level: "Associate",
    summary: "Covers designing and building analytics solutions in Microsoft Fabric: preparing and serving data, and developing the semantic models that power Power BI reporting.",
    technologies: ["Microsoft Fabric", "Power BI", "DAX", "Semantic Models", "Lakehouse & Warehouse", "T-SQL"],
  },
  {
    img: Az104,
    link: "https://learn.microsoft.com/api/credentials/share/en-us/Abdul1Rafi/B112B367276E36F5?sharingId=F405F5CEA2FEC3B5",
    name: "Azure Administrator",
    issuer: "Microsoft",
    tier: "tier1",
    code: "AZ-104",
    level: "Associate",
    summary: "Validates hands-on administration of Azure: identities and governance, storage, compute, virtual networking, and monitoring and backup.",
    technologies: ["Microsoft Entra ID", "Azure RBAC & Policy", "Virtual Machines", "Virtual Networks", "Azure Storage", "Azure Monitor"],
  },
  {
    img: Az400,
    link: "https://learn.microsoft.com/api/credentials/share/en-us/Abdul1Rafi/C4DAA33671F8E1EC?sharingId=F405F5CEA2FEC3B5",
    name: "DevOps Engineer",
    issuer: "Microsoft",
    tier: "tier1",
    code: "AZ-400",
    level: "Expert",
    summary: "Covers designing and implementing DevOps processes on Azure: source control, CI/CD pipelines, infrastructure automation, security and monitoring.",
    technologies: ["Azure DevOps", "Azure Pipelines", "GitHub Actions", "Git", "Infrastructure as Code", "Azure Monitor"],
  },
  {
    img: Dp800,
    link: "https://learn.microsoft.com/api/credentials/share/en-us/Abdul1Rafi/DDAA5F7681D816BA?sharingId=F405F5CEA2FEC3B5",
    name: "SQL AI Developer",
    issuer: "Microsoft",
    tier: "tier1",
    code: "DP-800",
    level: "Associate",
    summary: "Covers building AI-enabled database solutions across SQL Server, Azure SQL and SQL databases in Microsoft Fabric, integrating AI directly into SQL-based applications.",
    technologies: ["SQL Server", "Azure SQL", "SQL Database in Fabric", "T-SQL", "Vector Search"],
  },
  {
    img: Gh200,
    link: "https://learn.microsoft.com/api/credentials/share/en-us/Abdul1Rafi/C45C1354F93E2D76?sharingId=F405F5CEA2FEC3B5",
    name: "GitHub Actions",
    issuer: "Microsoft",
    tier: "tier1",
    code: "GH-200",
    summary: "Validates the ability to automate software workflows with GitHub Actions: authoring and maintaining workflows and actions, and managing Actions securely at scale.",
    technologies: ["GitHub Actions", "YAML Workflows", "Reusable Workflows", "Custom Actions", "Runners", "Secrets & Environments"],
  },
    {
    img: redis,
    link: "https://credentials.redis.io/d15a06cb-7bcd-4517-a92a-2b73e454d919#acc.nBgGSP7k",
    name: "Redis Associate Developer",
    issuer: "Redis",
    code:"Redis",
    tier: "tier1",
    level: "Associate",
     "summary": "Validates the foundational knowledge and skills required to design, build, and operate applications using Redis. Covers core data structures, caching strategies, pub/sub messaging, and basic persistence.",
  "technologies": ["Redis", "In-Memory Database", "Caching", "NoSQL", "Data Structures", "Pub/Sub"]
},
  {
    img: DataAnalyticsImg,
    link: "https://www.linkedin.com/posts/abdulrafi0870_data-science-internship-at-nit-trichy-activity-7225038436569595904-TMte?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEOf1RMBnMTpFDWRJN_Fj4ZQJTwrG57J6-8",
    name: "Data Science Internship",
    issuer: "NIT TRICHY",
    tier: "tier1",
    summary: "Two-week offline research internship at NIT Tiruchirappalli (July 2024) focused on Machine Learning and Data Science.",
    technologies: ["Machine Learning", "Data Science", "Data Analytics", "Data Visualisation"],
  },
  { img: google_1, link: "https://www.credly.com/earner/earned/badge/89d0f82c-5eed-48d9-9f30-d04fb259bc28", name: "Cloud Computing", issuer: "Google Cloud", tier: "tier2" },
  { img: google_2, link: "https://www.credly.com/earner/earned/badge/e1da049b-959a-45cb-9095-0b533c22900f", name: "Google Cloud Network", issuer: "Google Cloud", tier: "tier2" },
  { img: google_3, link: "https://www.credly.com/earner/earned/badge/540b7f1e-800a-45b6-a36d-ecc1f003fe7e", name: "Load Balancer", issuer: "Google Cloud", tier: "tier2" },
  { img: amazon, link: "https://www.credly.com/earner/earned/badge/e1da049b-959a-45cb-9095-0b533c22900f", name: "Serverless", issuer: "AWS Educate", tier: "tier2" },
  { img: amazon1, link: "https://www.credly.com/badges/1297ccee-71b5-4541-a35f-bc88c80722ee", name: "AWS Storage", issuer: "AWS Educate", tier: "tier2" },
  { img: cybersecurity, link: "https://www.credly.com/badges/1b34e777-19e8-4393-8cf5-9b26f011b19c", name: "Cybersecurity", issuer: "Cisco Networks", tier: "tier3" },
  { img: networking, link: "https://www.credly.com/badges/1297ccee-71b5-4541-a35f-bc88c80722ee", name: "Networking", issuer: "Cisco Networks", tier: "tier3" },
  { img: python_1, link: "https://www.credly.com/badges/b233454e-1ed7-4b85-aeb3-5c6730824648", name: "Python Essentials", issuer: "Cisco Networks", tier: "tier3" },
  { img: Ccna, link: "https://www.credly.com/badges/3089f15a-92f9-436d-9dc2-537b110ff33b", name: "CCNA", issuer: "Cisco Networks", tier: "tier3" },
];

const FLAGSHIP = badges.filter((b) => b.tier === "tier1");
const CLOUD = badges.filter((b) => b.tier === "tier2");
const ADDITIONAL = badges.filter((b) => b.tier === "tier3");

// Stats are derived from the data above, so they can never drift out of date.
const STATS = [
  { value: badges.filter((b) => b.issuer === "Microsoft").length, label: "Microsoft certifications" },
  { value: badges.length, label: "Credentials & badges" },
  { value: new Set(badges.map((b) => b.issuer)).size, label: "Issuing organisations" },
];

// ============================================================
// HOOKS
// ============================================================
function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(() =>
    typeof window !== "undefined" && !!window.matchMedia ? window.matchMedia(query).matches : false
  );
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);
    onChange();
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [query]);
  return matches;
}

/** True while the element is on screen — used to pause autoplay off-screen. */
function useInViewport<T extends Element>(ref: React.RefObject<T>, rootMargin = "-10% 0px"): boolean {
  const [inView, setInView] = useState<boolean>(true);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { rootMargin });
    io.observe(el);
    return () => io.disconnect();
  }, [ref, rootMargin]);
  return inView;
}

// ============================================================
// SMALL PIECES
// ============================================================
const MicrosoftMark: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 23 23" className={className} aria-hidden="true">
    <path fill="#f25022" d="M1 1h10v10H1z" />
    <path fill="#7fba00" d="M12 1h10v10H12z" />
    <path fill="#00a4ef" d="M1 12h10v10H1z" />
    <path fill="#ffb900" d="M12 12h10v10H12z" />
  </svg>
);

const GroupHeading: React.FC<{ title: string; description: string; count?: number }> = React.memo(
  ({ title, description, count }) => (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-5 flex items-end justify-between gap-4 border-b border-white/10 pb-3"
    >
      <div>
        <h3 className="text-base font-semibold text-white md:text-lg">{title}</h3>
        <p className="mt-0.5 text-xs text-gray-500 md:text-sm">{description}</p>
      </div>
      {count !== undefined && (
        <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-gray-400">
          {count}
        </span>
      )}
    </motion.div>
  )
);
GroupHeading.displayName = "GroupHeading";

// ============================================================
// FLAGSHIP SHOWCASE
// Desktop: large feature card (left) + always-visible selector
// rail (right) so every flagship credential is visible at once.
// Mobile/tablet: card on top (swipe left/right), rail becomes a
// horizontally scrollable strip underneath.
// Autoplay pauses on hover, focus, drag, off-screen and when the
// user prefers reduced motion.
// ============================================================
const slideVariants: Variants = {
  enter: (dir: number) => ({ opacity: 0, x: dir >= 0 ? 48 : -48 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir >= 0 ? -48 : 48 }),
};

const FlagshipShowcase: React.FC<{ items: Badge[] }> = ({ items }) => {
  const canSwipe = useMediaQuery("(max-width: 1023px), (pointer: coarse)");
  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  const wrapRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const justDraggedRef = useRef(false);
  const inView = useInViewport(wrapRef);

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [hovering, setHovering] = useState(false);
  const [focused, setFocused] = useState(false);
  const [dragging, setDragging] = useState(false);

  const count = items.length;
  const badge = items[index] ?? items[0];

  const go = useCallback(
    (dir: 1 | -1) => {
      setDirection(dir);
      setIndex((prev) => (prev + dir + count) % count);
    },
    [count]
  );

  const select = useCallback(
    (i: number) => {
      setDirection(i >= index ? 1 : -1);
      setIndex(i);
    },
    [index]
  );

  const autoplay = count > 1 && inView && !hovering && !focused && !dragging && !prefersReducedMotion;

  // One timeout per slide keeps the timer and the progress bar in lock-step,
  // and any manual change restarts the countdown.
  useEffect(() => {
    if (!autoplay) return;
    const t = window.setTimeout(() => go(1), AUTOPLAY_MS);
    return () => window.clearTimeout(t);
  }, [autoplay, index, go]);

  // Keep the active thumbnail centred in the horizontal rail (mobile/tablet).
  // Scrolls only the rail itself, never the page.
  useEffect(() => {
    const rail = railRef.current;
    const el = rail?.children[index] as HTMLElement | undefined;
    if (!rail || !el || rail.scrollWidth <= rail.clientWidth) return;
    rail.scrollTo({
      left: el.offsetLeft - (rail.clientWidth - el.clientWidth) / 2,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  }, [index, prefersReducedMotion]);

  const onDragStart = useCallback(() => {
    justDraggedRef.current = true;
    setDragging(true);
  }, []);

  const onDragEnd = useCallback(
    (_e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      setDragging(false);
      const { x: offset } = info.offset;
      const { x: velocity } = info.velocity;
      if (Math.abs(offset) > SWIPE_DISTANCE_PX || Math.abs(velocity) > SWIPE_VELOCITY) {
        go(offset < 0 || velocity < -SWIPE_VELOCITY ? 1 : -1);
      }
      window.setTimeout(() => {
        justDraggedRef.current = false;
      }, POST_DRAG_CLICK_GUARD_MS);
    },
    [go]
  );

  // Stops the click that follows a swipe from opening the credential link.
  const guardClick = useCallback((e: React.MouseEvent) => {
    if (justDraggedRef.current) {
      e.preventDefault();
      e.stopPropagation();
    }
  }, []);

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (count < 2) return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        go(-1);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        go(1);
      }
    },
    [count, go]
  );

  if (count === 0) return null;

  const isMicrosoft = badge.issuer === "Microsoft";
  const isLinkedIn = badge.link.includes("linkedin.com");

  return (
    <div className="mb-14 md:mb-16">
      <div
        ref={wrapRef}
        className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_132px] lg:gap-5"
        role="region"
        aria-roledescription="carousel"
        aria-label="Flagship credentials"
        tabIndex={0}
        onKeyDown={onKeyDown}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        onFocusCapture={() => setFocused(true)}
        onBlurCapture={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setFocused(false);
        }}
      >
        {/* ---------------- Feature card ---------------- */}
        <div className="relative min-w-0 overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-[#0a1020] via-[#05070d] to-black shadow-[0_30px_80px_-40px_rgba(37,99,235,0.45)]">
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-blue-500/70 to-transparent" />

          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.div
              key={badge.link + badge.name}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.28, ease: "easeOut" }}
              drag={canSwipe ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              dragDirectionLock
              onDragStart={onDragStart}
              onDragEnd={onDragEnd}
              style={{ touchAction: "pan-y" }}
              className="flex min-h-[600px] select-none flex-col md:min-h-[640px] lg:min-h-[540px] lg:flex-row"
            >
              {/* Certificate — the hero of the card */}
              <a
                href={badge.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View credential: ${badge.name} by ${badge.issuer}`}
                onClick={guardClick}
                className="group relative flex items-center justify-center overflow-hidden bg-white/[0.02] p-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-400/80 sm:p-8 lg:w-[58%] lg:shrink-0 lg:border-r lg:border-white/10 lg:p-10"
              >
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{ background: "radial-gradient(60% 60% at 50% 50%, rgba(37,99,235,0.18), transparent)" }}
                />
                <motion.img
                  src={badge.img}
                  alt={badge.name}
                  draggable={false}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 260, damping: 24 }}
                  className="pointer-events-none relative h-auto max-h-[260px] w-full rounded-lg object-contain drop-shadow-[0_24px_40px_rgba(0,0,0,0.65)] sm:max-h-[360px] lg:max-h-[480px]"
                />
              </a>

              {/* Information */}
              <div className="flex min-w-0 flex-1 flex-col justify-center gap-5 p-6 pb-16 sm:p-8 sm:pb-16 lg:p-10 lg:pb-16">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-gray-200">
                    {isMicrosoft && <MicrosoftMark className="h-3.5 w-3.5" />}
                    {isMicrosoft ? "Microsoft Certified" : badge.issuer}
                  </span>
                  {badge.code && (
                    <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-bold tracking-wider text-blue-300">
                      {badge.code}
                    </span>
                  )}
                  {badge.level && (
                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-gray-300">
                      {badge.level}
                    </span>
                  )}
                </div>

                <h3 className="text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-4xl xl:text-5xl">
                  {badge.name}
                </h3>

                {badge.summary && (
                  <p className="text-base leading-relaxed text-gray-300">{badge.summary}</p>
                )}

                {badge.technologies && (
                  <div>
                    <p className="mb-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500">
                      {badge.code ? "Technologies" : "Focus areas"}
                    </p>
                    <ul className="flex flex-wrap gap-2">
                      {badge.technologies.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-full border border-blue-500/25 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-200"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-1 flex flex-wrap items-center gap-x-6 gap-y-4">
                  <a
                    href={badge.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={guardClick}
                    className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-colors duration-300 hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                  >
                    {isLinkedIn ? "View on LinkedIn" : "View credential"}
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                  {!isLinkedIn && (
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400">
                      <BadgeCheck className="h-4 w-4" />
                      Verified credential
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Counter + arrows (desktop) */}
          {count > 1 && (
            <div className="absolute bottom-4 right-4 hidden items-center gap-3 md:flex">
              <span className="text-xs font-medium tabular-nums text-gray-500">
                {index + 1} / {count}
              </span>
              <button
                type="button"
                aria-label="Previous credential"
                onClick={() => go(-1)}
                className="rounded-full border border-white/10 bg-black/50 p-2 text-gray-300 transition-colors hover:border-blue-400/60 hover:text-blue-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label="Next credential"
                onClick={() => go(1)}
                className="rounded-full border border-white/10 bg-black/50 p-2 text-gray-300 transition-colors hover:border-blue-400/60 hover:text-blue-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}

          {/* Autoplay progress */}
          {count > 1 && (
            <div className="absolute inset-x-0 bottom-0 h-0.5 bg-white/5">
              {autoplay ? (
                <motion.div
                  key={`progress-${index}`}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: AUTOPLAY_MS / 1000, ease: "linear" }}
                  className="h-full bg-blue-500"
                />
              ) : (
                <div className="h-full w-full bg-blue-500/40" />
              )}
            </div>
          )}
        </div>

        {/* ---------------- Minimal code rail ---------------- */}
        <nav className="min-w-0" aria-label="Select credential">
          <div
            ref={railRef}
            className="relative -mx-4 flex snap-x gap-2 overflow-x-auto px-4 pb-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:-mx-6 sm:px-6 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden"
          >
            {items.map((item, i) => {
              const active = i === index;
              return (
                <button
                  key={item.link + item.name}
                  type="button"
                  onClick={() => select(i)}
                  title={item.name}
                  aria-current={active ? "true" : undefined}
                  aria-label={`Show ${item.code ? item.code + " " : ""}${item.name}`}
                  className={`shrink-0 snap-center rounded-xl border px-4 py-2.5 text-center text-xs font-bold uppercase tracking-wider transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/80 lg:py-3 ${
                    active
                      ? "border-blue-500/60 bg-blue-500/15 text-blue-200"
                      : "border-white/10 bg-white/[0.02] text-gray-400 hover:border-white/25 hover:text-white"
                  }`}
                >
                  {item.code ?? "Internship"}
                </button>
              );
            })}
          </div>
        </nav>
      </div>

      <p className="mt-3 text-center text-xs text-gray-600 lg:hidden">Swipe the card or tap a code to explore</p>
    </div>
  );
};

// ============================================================
// CLOUD + ADDITIONAL CARDS
// ============================================================
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: Math.min(i * 0.05, 0.4), ease: [0.22, 1, 0.36, 1] },
  }),
};

const CredentialCard: React.FC<{ badge: Badge; index: number; variant: "feature" | "compact" }> = React.memo(
  ({ badge, index, variant }) => {
    const compact = variant === "compact";
    return (
      <motion.div
        custom={index}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
      >
        <motion.a
          href={badge.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View credential: ${badge.name} by ${badge.issuer}`}
          whileHover={{ y: compact ? -2 : -4 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 300, damping: 24 }}
          className={`group relative flex h-full rounded-2xl border border-white/10 bg-white/[0.02] transition-colors duration-300 hover:border-blue-500/40 hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/80 ${
            compact ? "items-center gap-3 p-3" : "flex-col items-center p-5 text-center"
          }`}
        >
          <span
            className={`flex shrink-0 items-center justify-center rounded-xl bg-black/40 p-1.5 ${
              compact ? "h-11 w-11" : "mb-4 h-20 w-20 md:h-24 md:w-24"
            }`}
          >
            <img
              src={badge.img}
              alt={badge.name}
              draggable={false}
              className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </span>
          <span className={compact ? "min-w-0 flex-1" : "block"}>
            <span
              className={`block font-semibold text-white ${compact ? "truncate text-sm" : "text-base leading-snug"}`}
            >
              {badge.name}
            </span>
            <span className="mt-0.5 block text-xs text-gray-500">{badge.issuer}</span>
          </span>
          <ArrowUpRight
            className={`h-4 w-4 shrink-0 text-gray-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-400 ${
              compact ? "" : "absolute right-3 top-3 opacity-0 group-hover:opacity-100"
            }`}
          />
        </motion.a>
      </motion.div>
    );
  }
);
CredentialCard.displayName = "CredentialCard";

// ============================================================
// SECTION
// ============================================================
const BadgesSection: React.FC = () => {
  const stats = useMemo(() => STATS, []);

  return (
    <MotionConfig reducedMotion="user">
      <section className="relative overflow-hidden bg-black py-12 md:py-16" aria-labelledby="badges-heading">
        {/* Single soft glow — decoration kept deliberately quiet so content leads */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[480px]"
          style={{ background: "radial-gradient(60% 60% at 50% 0%, rgba(37,99,235,0.14), transparent)" }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header: compact, one-line recruiter message */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-8 max-w-4xl text-center md:mb-10"
          >
            <span className="mb-2 inline-block text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-400">
              Certifications &amp; Credentials
            </span>
            <h2
              id="badges-heading"
              className="text-2xl font-bold leading-snug tracking-tight text-white sm:text-3xl xl:text-4xl"
            >
Certified{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
 Professional
              </span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-gray-400 md:text-base">
               Specialized in Microsoft Fabric, Azure Administration, DevOps and Enterprise Analytics.
            </p>
          </motion.div>

          {/* Flagship */}
          <FlagshipShowcase items={FLAGSHIP} />

          {/* Cloud platforms */}
          <div className="mb-12 md:mb-14">
            <GroupHeading
              title="Cloud Platform Credentials"
              description="Google Cloud and AWS Educate credentials that reinforce my cloud foundation."
              count={CLOUD.length}
            />
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {CLOUD.map((badge, i) => (
                <CredentialCard key={badge.link + badge.name} badge={badge} index={i} variant="feature" />
              ))}
            </div>
          </div>

          {/* Additional learning */}
          <div>
            <GroupHeading
              title="Additional Learning"
              description="Cisco networking, security and Python badges showing continuous hands-on learning."
              count={ADDITIONAL.length}
            />
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {ADDITIONAL.map((badge, i) => (
                <CredentialCard key={badge.link + badge.name} badge={badge} index={i} variant="compact" />
              ))}
            </div>
          </div>

          {/* Stats — computed from the data above */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto mt-12 grid max-w-3xl grid-cols-3 gap-3 md:mt-14 md:gap-6"
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-white/10 bg-white/[0.02] px-3 py-5 text-center md:px-6 md:py-6"
              >
                <div className="text-2xl font-bold tabular-nums text-blue-400 md:text-4xl">{s.value}</div>
                <div className="mt-1 text-xs font-medium text-gray-400 md:text-sm">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
};

export default BadgesSection;
