import { useState, useEffect, useRef } from "react";
import {
  ArrowDown, ArrowUpRight, Mail, Github, Linkedin,
  Send, CheckCheck, Award, MapPin, Briefcase, GraduationCap,
  User, Layers, FolderOpen, BadgeCheck, Share2, MessageSquare,
  ExternalLink, FileCode, LayoutGrid, TableProperties, Wrench, Database
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

// ── SVG TECH ICONS ────────────────────────────────────────────────
const TechIcons = {
  PHP: () => (
    <svg viewBox="0 0 32 32" className="w-5 h-5" fill="none">
      <ellipse cx="16" cy="16" rx="15" ry="9" fill="#6C7EB7" opacity=".15"/>
      <ellipse cx="16" cy="16" rx="15" ry="9" stroke="#6C7EB7" strokeWidth="1.5" fill="none"/>
      <text x="16" y="20.5" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#6C7EB7" fontFamily="monospace">php</text>
    </svg>
  ),
  Java: () => (
    <svg viewBox="0 0 32 32" className="w-5 h-5">
      <path d="M12 22s-1.5.9 1 1.2c3 .4 4.5.3 7.8-.3 0 0 .9.5 2.1 1C17 26 7 23.8 12 22zm-1-3s-1.7 1.2 1 1.5c2.5.3 4.4.3 7.8-.4 0 0 .6.6 1.6.9C14.8 23 6 21.5 11 19z" fill="#E76F00"/>
      <path d="M17.5 13.2c1.4 1.6-1 3-1 3s3.5-1.8 1.9-4c-1.5-2.1-2.7-3.1 3.6-6.7 0 0-9.9 2.5-4.5 7.7z" fill="#E76F00"/>
      <path d="M23.5 24.5s1.1.9-1.2 1.6c-4.4 1.3-18.4 1.7-22.3 0-1.4-.6 1.2-1.4 2-1.6.8-.2 1.3-.2 1.3-.2-1.5-1-9.6 2-4.1 2.9 14.9 2.4 27.1-1.1 24.3-2.7zM12.5 16s-6.8 1.6-2.4 2.2c1.8.3 5.4.2 8.8-.1 2.7-.2 5.5-.7 5.5-.7s-1 .4-1.7.8c-6.7 1.8-19.7 1-16 -.8 3.2-1.5 5.8-1.4 5.8-1.4zM21 19.8c6.8-3.5 3.7-6.9 1.5-6.5-.5.1-.8.2-.8.2s.2-.3.6-.5c4.5-1.6 8 4.7-1.4 7.2 0-.1.1-.2.1-.4z" fill="#5382A1"/>
      <path d="M15 3s3.9 3.9-3.7 9.9c-6.1 4.8-1.4 7.5 0 10.6-3.5-3.2-6.1-6-4.4-8.6 2.5-3.8 9.5-5.7 8.1-11.9z" fill="#E76F00"/>
    </svg>
  ),
  JavaScript: () => (
    <svg viewBox="0 0 32 32" className="w-5 h-5">
      <rect width="32" height="32" rx="4" fill="#F7DF1E"/>
      <path d="M9 25.7l2.3-1.4c.4.8.8 1.4 1.7 1.4.8 0 1.4-.3 1.4-1.6V15h2.8v9.2c0 2.6-1.5 3.8-3.8 3.8-2 0-3.2-1-3.8-2.3H9zm8.5-.3l2.3-1.4c.6 1 1.3 1.7 2.7 1.7 1.1 0 1.8-.6 1.8-1.3 0-.9-.7-1.2-1.9-1.8l-.7-.3c-2-.8-3.2-1.9-3.2-4 0-2 1.5-3.5 3.9-3.5 1.7 0 2.9.6 3.8 2.1l-2.1 1.4c-.5-.8-1-1.2-1.8-1.2-.8 0-1.3.5-1.3 1.2 0 .8.5 1.2 1.7 1.7l.7.3c2.3 1 3.5 2.1 3.5 4.3 0 2.4-1.9 3.8-4.5 3.8-2.5 0-4.1-1.2-4.9-2.8z" fill="#000"/>
    </svg>
  ),
  HTML: () => (
    <svg viewBox="0 0 32 32" className="w-5 h-5">
      <path d="M4 3l2.3 26L16 32l9.7-3L28 3z" fill="#E34F26"/>
      <path d="M16 29.5V5.5h10L24 27z" fill="#EF652A"/>
      <path d="M9.5 9.5H16v4H13.7l.2 2.5H16v4h-3.7L12 23.5l4 1.1 4-1.1-.3-3.1H16v-4h3.8l.4-4.5H16v-4H22l-.8 9.3L16 27l-5.2-1.4z" fill="#fff"/>
    </svg>
  ),
  CSS: () => (
    <svg viewBox="0 0 32 32" className="w-5 h-5">
      <path d="M4 3l2.3 26L16 32l9.7-3L28 3z" fill="#1172B8"/>
      <path d="M16 29.5V5.5h10L24 27z" fill="#33A9DC"/>
      <path d="M16 14.5h-3.7L12 12H22l-.3 2.5h-3.8V17h3.5l-.4 4.5L16 23l-3.8-1.1-.3-2.9h2.4l.2 1.5 1.5.4 1.5-.4.2-2H12l-.4-4.5H16z" fill="#fff"/>
    </svg>
  ),
  Dart: () => (
    <svg viewBox="0 0 32 32" className="w-5 h-5">
      <path d="M7.5 3L3 7.5l4 4L25 28l4-4-4-4L7.5 3z" fill="#00B4AB"/>
      <path d="M3 22v7h7L3 22z" fill="#00B4AB"/>
      <path d="M3 10V3h7L3 10z" fill="#00D2FF"/>
      <path d="M7.5 3L16 11.5 25 3H7.5z" fill="#00D2FF"/>
    </svg>
  ),
  Flutter: () => (
    <svg viewBox="0 0 32 32" className="w-5 h-5">
      <path d="M13.5 3L3 13.5l4 4L18 7z" fill="#54C5F8"/>
      <path d="M13.5 18L7 24.5 11 28.5l6.5-6.5z" fill="#01579B"/>
      <path d="M18 7L7 18l6.5 6.5L18 21l-4.5-3L25 7z" fill="#29B6F6"/>
      <path d="M13.5 18L18 21l7 7h-8L11 28.5z" fill="#00B0FF"/>
    </svg>
  ),
  Laravel: () => (
    <svg viewBox="0 0 32 32" className="w-5 h-5">
      <path d="M29.5 8.5L24 3.5c-.3-.3-.7-.5-1.1-.5H9c-.9 0-1.5.7-1.5 1.5v4H4c-.9 0-1.5.7-1.5 1.5v18c0 .9.6 1.5 1.5 1.5h19c.9 0 1.5-.7 1.5-1.5v-4H28c.9 0 1.5-.7 1.5-1.5V9.6c0-.4-.1-.8-.3-1.1z" fill="#FF2D20" opacity=".1"/>
      <path d="M16 8l-4 8h3v8h2v-8h3z" fill="#FF2D20"/>
    </svg>
  ),
  Bootstrap: () => (
    <svg viewBox="0 0 32 32" className="w-5 h-5">
      <rect width="32" height="32" rx="6" fill="#7952B3"/>
      <path d="M9 6h8.5c4 0 6 2 6 5 0 2-1 3.5-3 4.2 2.5.5 4 2.2 4 4.8 0 3.5-2.5 6-7 6H9V6zm4 8h4c1.5 0 2.5-.8 2.5-2.2 0-1.3-1-2-2.5-2H13v4.2zm0 8.5h4.5c1.8 0 2.8-.9 2.8-2.5 0-1.5-1-2.5-2.8-2.5H13v5z" fill="#fff"/>
    </svg>
  ),
  jQuery: () => (
    <svg viewBox="0 0 32 32" className="w-5 h-5">
      <circle cx="16" cy="16" r="14" fill="#0769AD" opacity=".15"/>
      <circle cx="16" cy="16" r="14" stroke="#0769AD" strokeWidth="1.5" fill="none"/>
      <text x="16" y="20" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#0769AD" fontFamily="serif">jQuery</text>
    </svg>
  ),
  MySQL: () => (
    <svg viewBox="0 0 32 32" className="w-5 h-5">
      <ellipse cx="16" cy="8" rx="12" ry="4" fill="#00758F"/>
      <path d="M4 8v4c0 2.2 5.4 4 12 4s12-1.8 12-4V8c0 2.2-5.4 4-12 4S4 10.2 4 8z" fill="#F29111"/>
      <path d="M4 12v4c0 2.2 5.4 4 12 4s12-1.8 12-4v-4c0 2.2-5.4 4-12 4S4 14.2 4 12z" fill="#00758F"/>
      <path d="M4 16v4c0 2.2 5.4 4 12 4s12-1.8 12-4v-4c0 2.2-5.4 4-12 4S4 18.2 4 16z" fill="#F29111"/>
    </svg>
  ),
  PostgreSQL: () => (
    <svg viewBox="0 0 32 32" className="w-5 h-5">
      <ellipse cx="14" cy="10" rx="10" ry="10" fill="#336791" opacity=".15"/>
      <ellipse cx="14" cy="10" rx="10" ry="10" stroke="#336791" strokeWidth="1.5" fill="none"/>
      <text x="14" y="14" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#336791" fontFamily="serif">PG</text>
      <path d="M22 18c2-1 4 0 4 2v4" stroke="#336791" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    </svg>
  ),
  Docker: () => (
    <svg viewBox="0 0 32 32" className="w-5 h-5">
      <path d="M28.5 13.5c-.5-.4-1.7-.6-2.6-.4-.1-1-.8-1.9-1.9-2.4l-.6-.3-.4.5c-.5.7-.7 1.8-.6 2.6-.4-.2-.9-.5-1.3-.5H5c-.5 0-1 .5-1 1 0 2.8 1.7 5.3 4.3 6.5 1.5.7 3.2 1 5 1 4.7 0 8.2-2.2 9.9-6h1c1.2 0 2.4-.5 3-1.4l.4-.5-.2-.1h-.9z" fill="#2496ED"/>
      <path d="M9 13h2v2H9zm3 0h2v2h-2zm3 0h2v2h-2zm-6-3h2v2H9zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm-9-3h2v2H9zm3 0h2v2h-2zm3 0h2v2h-2z" fill="#fff"/>
    </svg>
  ),
  Git: () => (
    <svg viewBox="0 0 32 32" className="w-5 h-5">
      <path d="M29.5 14.6L17.4 2.5c-.8-.8-2.1-.8-2.9 0L12 5l3.7 3.7c.9-.3 1.9-.1 2.6.6.7.7.9 1.8.6 2.7l3.5 3.5c.9-.3 1.9-.1 2.6.6 1 1 1 2.6 0 3.6-1 1-2.6 1-3.6 0-.8-.8-1-1.9-.6-2.8l-3.3-3.3v8.6c.3.1.5.3.7.5 1 1 1 2.6 0 3.6-1 1-2.6 1-3.6 0-1-1-1-2.6 0-3.6.2-.2.5-.4.8-.5v-8.7c-.3-.1-.6-.3-.8-.5-.8-.8-1-1.9-.6-2.8L9.5 8.1 2.5 15c-.8.8-.8 2.1 0 2.9l12.1 12.1c.8.8 2.1.8 2.9 0l12-12c.8-.8.8-2.1 0-2.9l.1-.5z" fill="#F05032"/>
    </svg>
  ),
  Jira: () => (
    <svg viewBox="0 0 32 32" className="w-5 h-5">
      <defs>
        <linearGradient id="jira" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0052CC"/>
          <stop offset="100%" stopColor="#2684FF"/>
        </linearGradient>
      </defs>
      <path d="M16 3L3 16l5 5 8-8 8 8 5-5L16 3z" fill="url(#jira)"/>
      <path d="M16 13l-3 3 3 3 3-3-3-3z" fill="#2684FF"/>
    </svg>
  ),
  Azure: () => (
    <svg viewBox="0 0 32 32" className="w-5 h-5">
      <defs>
        <linearGradient id="az" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#114A8B"/>
          <stop offset="100%" stopColor="#0078D4"/>
        </linearGradient>
      </defs>
      <path d="M13 4l-9 22h7l5-12 8 14H16l-2 4h14L13 4z" fill="url(#az)"/>
    </svg>
  ),
  Word: () => (
    <svg viewBox="0 0 32 32" className="w-5 h-5">
      <rect width="32" height="32" rx="4" fill="#2B579A"/>
      <path d="M7 9h18v2H7zm0 4h18v2H7zm0 4h12v2H7zm0 4h8v2H7z" fill="#fff" opacity=".7"/>
      <text x="16" y="21" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#fff" fontFamily="sans-serif">W</text>
    </svg>
  ),
  Excel: () => (
    <svg viewBox="0 0 32 32" className="w-5 h-5">
      <rect width="32" height="32" rx="4" fill="#217346"/>
      <text x="16" y="21" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#fff" fontFamily="sans-serif">X</text>
    </svg>
  ),
  PowerPoint: () => (
    <svg viewBox="0 0 32 32" className="w-5 h-5">
      <rect width="32" height="32" rx="4" fill="#D24726"/>
      <text x="16" y="21" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#fff" fontFamily="sans-serif">P</text>
    </svg>
  ),
};

// ── DATA ─────────────────────────────────────────────────────────

const SOCIAL = [
  { Icon: Mail,     label: "Mail",     href: "mailto:kgeorgiev2002@gmail.com",                        display: "kgeorgiev2002@gmail.com"          },
  { Icon: Github,   label: "GitHub",   href: "https://github.com/Kris-K-Georgiev",                   display: "github.com/Kris-K-Georgiev"       },
  { Icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/kristian-georgiev-857b69297", display: "linkedin.com/in/kristian-georgiev" },
];

const SKILL_GROUPS = [
  { group: "Languages",              Icon: () => <TechIcons.PHP />,    skills: ["PHP","Java","JavaScript","HTML","CSS","Dart"] },
  { group: "Frameworks & Platforms", Icon: () => <TechIcons.Flutter />,skills: ["Flutter","Laravel","Bootstrap","jQuery"] },
  { group: "Databases",              Icon: () => <TechIcons.MySQL />,  skills: ["MySQL","PostgreSQL"] },
  { group: "Tools & Workflow",       Icon: () => <TechIcons.Docker />, skills: ["Docker","Git","Jira","Azure DevOps"] },
  { group: "Productivity",           Icon: () => <TechIcons.Word />,   skills: ["Word","Excel","PowerPoint"] },
];

const SKILL_ICON_MAP = {
  PHP: TechIcons.PHP, Java: TechIcons.Java, JavaScript: TechIcons.JavaScript,
  HTML: TechIcons.HTML, CSS: TechIcons.CSS, Dart: TechIcons.Dart,
  Flutter: TechIcons.Flutter, Laravel: TechIcons.Laravel,
  Bootstrap: TechIcons.Bootstrap, jQuery: TechIcons.jQuery,
  MySQL: TechIcons.MySQL, PostgreSQL: TechIcons.PostgreSQL,
  Docker: TechIcons.Docker, Git: TechIcons.Git, Jira: TechIcons.Jira,
  "Azure DevOps": TechIcons.Azure,
  Word: TechIcons.Word, Excel: TechIcons.Excel, PowerPoint: TechIcons.PowerPoint,
};

const PROJECTS = [
  {
    title: "PHP Web App",
    subtitle: "Back-end project",
    desc: "Server-side web application built with PHP and MySQL. Clean MVC structure, RESTful endpoints, and a responsive HTML/CSS front end.",
    tags: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    color: "#6C7EB7",
    bg: "#EEF0FA",
    repo: "https://github.com/Kris-K-Georgiev",
  },
  {
    title: "Flutter Mobile App",
    subtitle: "Cross-platform app",
    desc: "Cross-platform mobile application built with Flutter and Dart. Runs on both Android and iOS from a single codebase.",
    tags: ["Flutter", "Dart"],
    color: "#29B6F6",
    bg: "#E3F6FD",
    repo: "https://github.com/Kris-K-Georgiev",
  },
  {
    title: "Java Application",
    subtitle: "Desktop / backend",
    desc: "Java application demonstrating OOP principles, data structures, and clean architecture patterns learned during the Software Engineering degree.",
    tags: ["Java"],
    color: "#E76F00",
    bg: "#FEF0E3",
    repo: "https://github.com/Kris-K-Georgiev",
  },
  {
    title: "Front-End Project",
    subtitle: "Static web project",
    desc: "Pixel-accurate responsive website built with pure HTML, CSS, and vanilla JavaScript — no frameworks, no shortcuts.",
    tags: ["HTML", "CSS", "JavaScript"],
    color: "#E34F26",
    bg: "#FDE8E3",
    repo: "https://github.com/Kris-K-Georgiev",
  },
];

const CERTS = [
  { title: "Microsoft Office Specialist — Word",       Icon: TechIcons.Word },
  { title: "Microsoft Office Specialist — Excel",      Icon: TechIcons.Excel },
  { title: "Microsoft Office Specialist — PowerPoint", Icon: TechIcons.PowerPoint },
  { title: "Microsoft Certified — HTML & CSS",         Icon: TechIcons.HTML },
];

const NAV_LINKS = [
  { id: "about",    label: "About",        Icon: User          },
  { id: "skills",   label: "Skills",       Icon: Layers        },
  { id: "projects", label: "Projects",     Icon: FolderOpen    },
  { id: "certs",    label: "Certificates", Icon: BadgeCheck    },
  { id: "connect",  label: "Connect",      Icon: Share2        },
  { id: "contact",  label: "Contact",      Icon: MessageSquare },
];

// ── HELPERS ──────────────────────────────────────────────────────

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function Fade({ children, delay = 0, className = "" }) {
  const [ref, visible] = useInView();
  return (
    <div ref={ref} className={className} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "none" : "translateY(14px)",
      transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`,
    }}>
      {children}
    </div>
  );
}

function Eyebrow({ children, light }) {
  return (
    <p className={`text-[11px] font-semibold tracking-[0.18em] uppercase mb-3 ${light ? "text-blue-400" : "text-blue-600"}`}>
      {children}
    </p>
  );
}

function SectionTitle({ children, light }) {
  return (
    <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight ${light ? "text-white" : "text-zinc-900"}`}>
      {children}
    </h2>
  );
}

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

// ── PROJECT COVER ────────────────────────────────────────────────

function ProjectCover({ title, color, bg, tags }) {
  const MainIcon = SKILL_ICON_MAP[tags[0]];
  return (
    <div className="h-36 flex items-center justify-center rounded-t-2xl relative overflow-hidden" style={{ background: bg }}>
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle at 30% 50%, ${color} 0%, transparent 60%)`,
      }} />
      <div className="relative flex flex-col items-center gap-2">
        <div className="w-12 h-12 rounded-2xl bg-white/80 shadow flex items-center justify-center">
          {MainIcon ? <MainIcon /> : <FileCode className="w-6 h-6 text-zinc-400" />}
        </div>
        <div className="flex gap-1.5">
          {tags.slice(0, 3).map(t => {
            const TI = SKILL_ICON_MAP[t];
            return TI ? (
              <div key={t} className="w-6 h-6 rounded-md bg-white/70 flex items-center justify-center shadow-sm">
                <div className="scale-75"><TI /></div>
              </div>
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
}

// ── AVATAR ───────────────────────────────────────────────────────

function Avatar({ size = "lg" }) {
  const dim = size === "lg" ? "w-24 h-24 sm:w-28 sm:h-28" : "w-10 h-10";
  return (
    <div className={`${dim} rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 border-2 border-white shadow-md flex items-center justify-center flex-shrink-0 overflow-hidden`}>
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <rect width="80" height="80" fill="url(#av)" />
        <defs>
          <linearGradient id="av" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#DBEAFE"/>
            <stop offset="100%" stopColor="#BFDBFE"/>
          </linearGradient>
        </defs>
        <circle cx="40" cy="30" r="14" fill="#93C5FD"/>
        <ellipse cx="40" cy="72" rx="22" ry="18" fill="#93C5FD"/>
        <text x="40" y="37" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1D4ED8" fontFamily="sans-serif">KG</text>
      </svg>
    </div>
  );
}

// ── NAV ──────────────────────────────────────────────────────────

function Nav({ active }) {
  return (
    <>
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-zinc-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <button onClick={() => scrollTo("hero")} className="text-sm font-bold tracking-tight text-zinc-900 hover:text-blue-600 transition-colors whitespace-nowrap flex items-center gap-2">
            <Avatar size="sm" />
            <span><span className="text-blue-600">K</span>Georgiev <span className="text-zinc-400 font-normal">portfolio</span></span>
          </button>
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ id, label }) => (
              <button key={id} onClick={() => scrollTo(id)}
                className={`px-3 py-1.5 rounded-md text-sm transition-colors ${
                  active === id ? "text-zinc-900 font-medium bg-zinc-100" : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50"
                }`}>{label}</button>
            ))}
          </nav>
        </div>
      </header>
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-zinc-100 flex items-center justify-around px-2 h-16">
        {NAV_LINKS.map(({ id, Icon }) => (
          <button key={id} onClick={() => scrollTo(id)}
            className={`flex items-center justify-center w-10 h-10 rounded-xl transition-all ${
              active === id ? "bg-blue-50 text-blue-600" : "text-zinc-400 hover:text-zinc-700"
            }`} aria-label={id}>
            <Icon className="w-5 h-5" />
          </button>
        ))}
      </nav>
    </>
  );
}

// ── HERO ─────────────────────────────────────────────────────────

function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [available, setAvailable] = useState(true);
  useEffect(() => { const t = setTimeout(() => setLoaded(true), 80); return () => clearTimeout(t); }, []);

  return (
    <section id="hero" className="max-w-5xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-20 sm:pb-28">
      <div style={{ opacity: loaded ? 1 : 0, transform: loaded ? "none" : "translateY(12px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}>

        {/* Profile row */}
        <div className="flex items-center gap-5 mb-8">
          <Avatar size="lg" />
          <div>
            <div className="flex items-center gap-2.5 mb-1.5 flex-wrap">
              <Eyebrow>PHP Developer · Varna, Bulgaria</Eyebrow>
              <button
                onClick={() => setAvailable(v => !v)}
                className={`mb-3 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold border transition-all ${
                  available
                    ? "bg-emerald-50 border-emerald-200 text-emerald-700 hover:bg-emerald-100"
                    : "bg-zinc-100 border-zinc-200 text-zinc-400 hover:bg-zinc-200"
                }`}
              >
                <span className="relative flex h-1.5 w-1.5">
                  {available && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />}
                  <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${available ? "bg-emerald-500" : "bg-zinc-400"}`} />
                </span>
                {available ? "Open to work" : "Not available"}
              </button>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-zinc-900">
              <span className="relative inline-block whitespace-nowrap">
                Kristian Georgiev
                <span className="absolute bottom-0.5 left-0 h-[3px] bg-blue-600 rounded-full"
                  style={{ width: loaded ? "100%" : "0%", transition: "width 0.75s cubic-bezier(0.4,0,0.2,1) 0.45s" }}
                />
              </span>
            </h1>
          </div>
        </div>

        <p className="text-base sm:text-lg text-zinc-500 leading-relaxed max-w-xl mb-8">
          Junior PHP Developer at <span className="text-zinc-700 font-medium">CluneTech</span>,
          building web and mobile applications with PHP, Flutter, Java, and JavaScript.
          BSc Software Engineering, TU-Varna.
        </p>

        <div className="flex flex-wrap gap-3 mb-12">
          <Button onClick={() => scrollTo("projects")} size="lg"
            className="bg-zinc-900 hover:bg-blue-600 rounded-xl h-11 px-6 text-sm font-semibold gap-2 transition-colors">
            See my projects <ArrowDown className="w-4 h-4" />
          </Button>
          <Button onClick={() => scrollTo("contact")} size="lg" variant="outline"
            className="rounded-xl h-11 px-6 text-sm font-semibold border-zinc-200 hover:border-zinc-300 gap-2">
            Get in touch
          </Button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-zinc-100 bg-zinc-100">
          {[
            { Icon: Briefcase,     value: "CluneTech",     label: "Current employer"  },
            { Icon: GraduationCap, value: "TU-Varna",      label: "BSc Software Eng." },
            { Icon: MapPin,        value: "Varna, BG",     label: "Location"          },
            { Icon: Award,         value: "4 × Microsoft", label: "Certifications"    },
          ].map(({ Icon, value, label }) => (
            <div key={label} className="bg-white px-4 sm:px-5 py-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-zinc-100 flex items-center justify-center flex-shrink-0">
                <Icon className="w-4 h-4 text-zinc-500" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-bold text-zinc-900 leading-tight truncate">{value}</p>
                <p className="text-[10px] text-zinc-400">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── ABOUT ────────────────────────────────────────────────────────

function About() {
  return (
    <section id="about" className="border-t border-zinc-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-16 items-start">
        <Fade>
          <Eyebrow>About me</Eyebrow>
          <SectionTitle>Developer,<br />engineer,<br />problem solver</SectionTitle>
        </Fade>
        <Fade delay={80} className="space-y-4 text-zinc-500 leading-relaxed text-sm sm:text-base">
          <p>I'm Kristian, a 23-year-old Junior PHP Developer at <span className="text-zinc-700 font-medium">CluneTech</span> in Varna, Bulgaria. I hold a Bachelor's degree in Software Engineering from the Technical University of Varna.</p>
          <p>Day-to-day I work with PHP on back-end systems, but my personal projects span mobile development with Flutter, server-side Java, and front-end work in HTML, CSS, and JavaScript.</p>
          <p>I work in agile environments using Jira and Azure DevOps, manage containerised setups with Docker, and hold four Microsoft Office Specialist certifications.</p>
          <div className="pt-2">
            <Button onClick={() => scrollTo("contact")} variant="outline"
              className="rounded-xl border-zinc-200 hover:border-zinc-300 gap-2 text-sm font-semibold">
              Let's talk <ArrowUpRight className="w-4 h-4" />
            </Button>
          </div>
        </Fade>
      </div>
    </section>
  );
}

// ── SKILLS ───────────────────────────────────────────────────────

function Skills() {
  return (
    <section id="skills" className="border-t border-zinc-100 bg-zinc-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <Fade className="mb-10 sm:mb-12">
          <Eyebrow light>Tech stack</Eyebrow>
          <SectionTitle light>What I work with</SectionTitle>
        </Fade>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {SKILL_GROUPS.map(({ group, skills }, gi) => (
            <Fade key={group} delay={gi * 60}>
              <div className="rounded-2xl bg-white/[0.04] border border-white/[0.07] p-4 sm:p-5 hover:bg-white/[0.07] transition-colors">
                <p className="text-sm font-semibold text-white mb-4">{group}</p>
                <div className="flex flex-wrap gap-2">
                  {skills.map(s => {
                    const TI = SKILL_ICON_MAP[s];
                    return (
                      <div key={s} className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/[0.05] border border-white/[0.06] hover:bg-white/10 transition-colors">
                        {TI && <div className="flex-shrink-0"><TI /></div>}
                        <span className="text-xs font-medium text-zinc-300">{s}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── PROJECTS ─────────────────────────────────────────────────────

function Projects() {
  return (
    <section id="projects" className="border-t border-zinc-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <Fade className="mb-10 sm:mb-12">
          <Eyebrow>Selected work</Eyebrow>
          <SectionTitle>Projects I've built</SectionTitle>
        </Fade>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {PROJECTS.map(({ title, subtitle, desc, tags, color, bg, repo }, i) => (
            <Fade key={title} delay={i * 55}>
              <Card className="h-full flex flex-col border border-zinc-100 rounded-2xl shadow-none hover:border-zinc-300 hover:shadow-sm transition-all duration-200 group overflow-hidden">
                <ProjectCover title={title} color={color} bg={bg} tags={tags} />
                <CardHeader className="pb-2 pt-4 px-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-[10px] font-semibold tracking-wider uppercase text-zinc-400 mb-0.5">{subtitle}</p>
                      <h3 className="text-base font-bold text-zinc-900 tracking-tight">{title}</h3>
                    </div>
                    <a href={repo} target="_blank" rel="noreferrer"
                      className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 transition-all opacity-0 group-hover:opacity-100" title="GitHub">
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 pt-0 px-5">
                  <p className="text-sm text-zinc-500 leading-relaxed">{desc}</p>
                </CardContent>
                <CardFooter className="px-5 pt-2 pb-4">
                  <div className="flex flex-wrap gap-1.5 items-center">
                    {tags.map(t => {
                      const TI = SKILL_ICON_MAP[t];
                      return (
                        <div key={t} className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-zinc-100 hover:bg-zinc-200 transition-colors">
                          {TI && <div className="scale-75"><TI /></div>}
                          <span className="text-[10px] font-mono text-zinc-500">{t}</span>
                        </div>
                      );
                    })}
                  </div>
                </CardFooter>
              </Card>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── CERTIFICATES ─────────────────────────────────────────────────

function Certs() {
  return (
    <section id="certs" className="border-t border-zinc-100 bg-zinc-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <Fade className="mb-10 sm:mb-12">
          <Eyebrow>Credentials</Eyebrow>
          <SectionTitle>Microsoft Certifications</SectionTitle>
        </Fade>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {CERTS.map(({ title, Icon }, i) => (
            <Fade key={title} delay={i * 55}>
              <div className="flex items-center gap-4 px-5 py-4 rounded-2xl bg-white border border-zinc-100 hover:border-zinc-200 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
                  <Icon />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-zinc-900 leading-tight">{title}</p>
                  <p className="text-xs text-zinc-400 mt-0.5 flex items-center gap-1">
                    <Award className="w-3 h-3" /> Microsoft
                  </p>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── CONNECT ──────────────────────────────────────────────────────

function Connect() {
  return (
    <section id="connect" className="border-t border-zinc-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <Fade className="mb-10 sm:mb-12">
          <Eyebrow>Find me online</Eyebrow>
          <SectionTitle>Let's connect</SectionTitle>
        </Fade>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {SOCIAL.map(({ Icon, label, href, display }, i) => {
            const isEmail = label === "Mail";
            const Wrapper = isEmail ? "button" : "a";
            const extra = isEmail
              ? { onClick: () => scrollTo("contact") }
              : { href, target: "_blank", rel: "noreferrer" };
            return (
              <Fade key={label} delay={i * 70}>
                <Wrapper {...extra}
                  className="group flex flex-col gap-4 p-5 rounded-2xl border border-zinc-100 bg-white hover:border-blue-200 hover:shadow-sm transition-all duration-200 text-left w-full">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-zinc-100 group-hover:bg-blue-50 transition-colors flex items-center justify-center">
                      <Icon className="w-5 h-5 text-zinc-500 group-hover:text-blue-600 transition-colors" />
                    </div>
                    {isEmail
                      ? <ArrowDown className="w-4 h-4 text-zinc-300 group-hover:text-blue-500 transition-colors" />
                      : <ExternalLink className="w-4 h-4 text-zinc-300 group-hover:text-blue-500 transition-colors" />
                    }
                  </div>
                  <div>
                    <p className="text-sm font-bold text-zinc-900">{label}</p>
                    <p className="text-xs text-zinc-400 mt-0.5 truncate">{display}</p>
                  </div>
                </Wrapper>
              </Fade>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ── CONTACT ──────────────────────────────────────────────────────

function Contact() {
  const [status, setStatus] = useState("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  function onChange(e) { setForm(f => ({ ...f, [e.target.id]: e.target.value })); }
  function onSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 3500);
    }, 900);
  }

  return (
    <section id="contact" className="border-t border-zinc-100 bg-zinc-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <Fade>
          <Eyebrow light>Contact</Eyebrow>
          <SectionTitle light>Send me a message</SectionTitle>
        </Fade>
        <div className="max-w-2xl mt-10 sm:mt-12 space-y-6">
          <Fade delay={60}>
            <p className="text-zinc-400 leading-relaxed text-sm">
              Open to new opportunities, freelance projects, and collaborations. Based in Varna — available remotely too.
            </p>
          </Fade>
          <Fade delay={100}>
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { id: "name",  label: "Name",  placeholder: "Your name",      type: "text"  },
                  { id: "email", label: "Email", placeholder: "your@email.com", type: "email" },
                ].map(f => (
                  <div key={f.id} className="space-y-1.5">
                    <Label htmlFor={f.id} className="text-[10px] font-semibold tracking-widest uppercase text-zinc-500">{f.label}</Label>
                    <Input id={f.id} type={f.type} value={form[f.id]} onChange={onChange} placeholder={f.placeholder} required
                      className="bg-white/5 border-white/10 text-white placeholder:text-zinc-600 text-sm rounded-xl focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:border-blue-500" />
                  </div>
                ))}
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="subject" className="text-[10px] font-semibold tracking-widest uppercase text-zinc-500">Subject</Label>
                <Input id="subject" value={form.subject} onChange={onChange} placeholder="Job offer / Project / Collaboration"
                  className="bg-white/5 border-white/10 text-white placeholder:text-zinc-600 text-sm rounded-xl focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:border-blue-500" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="message" className="text-[10px] font-semibold tracking-widest uppercase text-zinc-500">Message</Label>
                <Textarea id="message" value={form.message} onChange={onChange} placeholder="Tell me about what you're working on…" required rows={5}
                  className="bg-white/5 border-white/10 text-white placeholder:text-zinc-600 text-sm rounded-xl resize-none focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:border-blue-500" />
              </div>
              <Button type="submit" disabled={status !== "idle"}
                className={`w-full sm:w-auto rounded-xl h-10 px-5 text-sm font-semibold gap-2 transition-all ${
                  status === "sent" ? "bg-emerald-600 hover:bg-emerald-600" : ""
                }`}
                style={status !== "sent" ? { backgroundColor: "#2563eb" } : {}}>
                {status === "idle"    && <><Send className="w-4 h-4" /> Send message</>}
                {status === "sending" && "Sending…"}
                {status === "sent"    && <><CheckCheck className="w-4 h-4" /> Sent!</>}
              </Button>
            </form>
          </Fade>
          <Fade delay={160}>
            <div className="pt-2 border-t border-white/[0.07] flex flex-col sm:flex-row gap-3">
              {SOCIAL.map(({ Icon, label, href, display }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer"
                  className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group flex-1">
                  <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/[0.08] flex items-center justify-center group-hover:border-blue-500/40 group-hover:bg-blue-500/10 transition-all flex-shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium truncate">{display}</span>
                </a>
              ))}
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}

// ── ROOT ─────────────────────────────────────────────────────────

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero");
  useEffect(() => {
    const secs = document.querySelectorAll("section[id]");
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); }),
      { threshold: 0.25 }
    );
    secs.forEach(s => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white text-zinc-900 antialiased pb-16 md:pb-0">
      <Nav active={activeSection} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certs />
      <Connect />
      <Contact />
      <footer className="border-t border-zinc-800 bg-zinc-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-5 flex justify-between items-center">
          <p className="text-xs text-zinc-700">© 2026 Kristian Georgiev · Varna, Bulgaria</p>
          <button onClick={() => scrollTo("hero")} className="text-xs text-zinc-700 hover:text-zinc-400 transition-colors">Back to top ↑</button>
        </div>
      </footer>
    </div>
  );
}
