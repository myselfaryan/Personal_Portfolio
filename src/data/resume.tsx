import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Aryan Sharma",
  initials: "AS",
  url: "https://myselfaryan.io", // Update this to your actual website URL
  location: "Chennai, Tamil Nadu, IN",
  locationLink: "https://www.google.com/maps/place/chennai",
  description:
    "Software Engineer, building stuff that matters.Passionate about creating innovative web solutions and enhancing user experiences.",
  summary:
    "Over 2 years of experience building software solutions that enhance user experiences and drive business success. Specializes in full-stack development with a focus on modern web technologies like React, Next.js, and Golang.Passionate about creating user-centric solutions that scale while fostering communities around technology",
  avatarUrl: "/me.jpeg",
  education: [
    {
      school: "Your University Name",
      degree: "Bachelor of Technology in Computer Science",
      start: "2020",
      end: "2024",
      grade: "X.X/10.0",
      description: "Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems",
      href: "#",
      logoUrl: "/university-logo.png" // Add your university logo path here
    }
  ],
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "aryan.s22@iiits.in",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/myselfaryan",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/myselfaryan",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/myselfaryan", // Update if you have a Twitter/X account
        icon: Icons.x,
        navbar: false, // Set to true if you want to show it in navbar
      },
      email: {
        name: "Send Email",
        url: "mailto:aryan.s22@iiits.in", // Update with your actual email
        icon: Icons.email,
        navbar: false,
      },
    },
  },
    work: [
      {
        company: "Sagar Informatic Pvt Ltd",
        href: "https://sagarinformatic.com", // Update with actual URL if available
        location: "Remote",
        title: "Python Developer Intern",
        logoUrl: "/sagarnewlogo.svg",
        start: "May 2025",
        end: "August 2025",
        description:
          "Collaborated with development team to build and test software solutions for various client requirements using Python and modern development practices, achieving 25% improvement in code quality through systematic code reviews. Participated in code reviews and followed established coding standards to ensure quality deliverables.",
      },
      {
        company: "Qbtrix Innovation",
        href: "https://interacly.ai", // Update with actual URL if available
        location: "Remote",
        title: "Product Development Intern",
        logoUrl: "/Q.svg",
        start: "March 2025",
        end: "May 2025",
        description:
          "Built and successfully integrated 5+ agentic systems using SmolAgents, systematically automating workflows and replacing traditional desk work roles with 40% efficiency improvement across all operational processes. Developed AI-driven interactive modules to streamline complex decision-making processes and enhance automation capabilities while maintaining high accuracy.",
      },
      {
        company: "Flytsocial",
        href: "https://flytsocial.com", // Update with actual URL if available
        location: "Remote",
        title: "Full Stack Developer Intern",
        logoUrl: "/trace.svg",
        start: "May 2024",
        end: "July 2024",
        description:
          "Developed and designed 12+ responsive web interfaces using React and Next.js, successfully increasing client engagement by 30% and user session duration by 25% through intuitive design and optimized user experience. Implemented designs for 5+ major client projects, achieving 99% compatibility across Chrome, Firefox, Safari, and Edge browsers.",
      },
    ],
  projects: [
    {
      title: "HabitFlow",
      href: "https://github.com/myselfaryan/habitflow",
      dates: "Jan 2024 - Mar 2024",
      active: true,
      description:
        "Built comprehensive habit tracking application implementing advanced smart analytics with visual streak counters and interactive activity heatmaps.",
      technologies: [
        "React",
        "TypeScript", 
        "Supabase",
        "Tailwind CSS",
        "Recharts",
        "D3.js",
        "Framer Motion",
      ],
      links: [
        {
          type: "Website",
          href: "https://habitfloww.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/myselfaryan/habitflow",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/image.png",
    },
    {
      title: "Mint Assessment Platform",
      href: "https://github.com/myselfaryan/mint",
      dates: "Apr 2024 - Jun 2024",
      active: true,
      description:
        "Built scalable multi-tenant platform using Next.js and TypeScript, ensuring secure and reliable access management across different user roles and organizational hierarchies. Engineered comprehensive contest management system simultaneous code submissions with ORM.",
      technologies: [
        "Next.js",
        "TypeScript",
        "DrizzleORM",
        "PostgreSQL",
        "TailwindCSS",
        "Redis",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://parixa.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source", 
          href: "https://github.com/myselfaryan/mint",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/pariksa.png",
    },
    {
      title: "CUDA Attention Optimization",
      href: "https://github.com/myselfaryan/Attention-Mechanism",
      dates: "Sep 2024 - Nov 2024",
      active: true,
      description:
        "Implemented parallelized Scaled Dot-Product Attention mechanism achieving remarkable 8x performance improvement over baseline implementation through advanced parallel computing techniques.",
      technologies: [
        "C++",
        "CUDA",
        "OpenMP",
        "High Performance Computing",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/myselfaryan/Attention-Mechanism", 
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
    },
    {
      title: "StrandServer HTTP Proxy",
      href: "https://github.com/myselfaryan/strandserver",
      dates: "Jul 2024 - Aug 2024", 
      active: true,
      description:
        "Built high-performance HTTP proxy server in C utilizing efficient data structures and memory management techniques for optimal cache performance. .",
      technologies: [
        "C",
        "POSIX Threads", 
        "HTTP/1.1",
        "LRU Cache",
        "Linux",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/myselfaryan/strandserver",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
    },
  ],
  
} as const;
