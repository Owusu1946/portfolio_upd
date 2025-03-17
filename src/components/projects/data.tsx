import { RiExternalLinkLine } from "react-icons/ri";
import type { TimelineEntry } from "../ui/timeline";

export const sectionHeading = {
  title: "What I'm working on",
  subTitle: "Let's dive into what I've been up to.",
};

export const timelineData: TimelineEntry[] = [
  {
    title: "Feather-UI",
    projectUrls: {
      site: {
        url: "https://feather-ui.vercel.app",
        icon: <RiExternalLinkLine size={20} />,
      },
      repo: {
        owner: "Owusu1946",
        name: "Feather-UI",
        showStarCount: true,
      },
    },
    imageUrl: "/images/image.png",
    description: `A Lightweight UI Component Library Completely Open-Sourced`,
    tech: [
      "TypeScript",
      "React",
      "Next.js",
      "TailwindCSS",
      "Radix UI",
    ],
    cards: {
      a: {
        title: "Accessible & Customizable Components",
        text: `Built with TypeScript and React, this library provides developers with accessible, 
              customizable components that follow best practices in modern web development. 
              Each component is designed to be intuitive, with a minimal API surface that 
              still provides all the flexibility you need.`,
      },
      b: {
        title: "Performance-Focused Design",
        text: `Feather-UI is optimized for speed and minimal bundle size, with tree-shakeable 
              components so you only import what you need. Built with accessibility in mind 
              from the ground up, it creates responsive interfaces that look great on any device 
              while maintaining a focus on developer experience.`,
      },
    },
  },
  {
    title: "SaaS Landing Page Template",
    projectUrls: {
      site: {
        url: "https://sass-opal.vercel.app/",
        icon: <RiExternalLinkLine size={20} />,
      },
      repo: {
        name: "saas-landing-page",
        owner: "Owusu1946",
        showStarCount: true,
      },
    },
    imageUrl: "/images/sass.png",
    description: `A modern, responsive landing page template for SaaS products with interactive animations and comprehensive UI components.`,
    tech: [
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "Radix UI",
      "Lucide Icons",
    ],
    cards: {
      a: {
        title: "Modern Design with Dark Mode",
        text: `This template features a sleek, professional design with customizable color schemes
              and an elegant dark theme with neon accents. Fully responsive across all devices, it offers
              a premium look and feel with smooth animations powered by Framer Motion.`,
      },
      b: {
        title: "Comprehensive Component Library",
        text: `Built with reusable components for easy customization, this template includes multiple
              pre-designed sections like Header, Hero, Features, Database Visual, Performance metrics,
              Testimonials, Pricing plans, and Footer. The UI components are based on shadcn/ui for a
              consistent and professional look.`,
      },
    },
  }
];
