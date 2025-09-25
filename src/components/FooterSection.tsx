"use client";

import { Code, Twitter, Linkedin, Github, Mail } from "lucide-react";
import React from "react";

interface Footer7Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
}

const defaultSections = [
  {
    title: "Services",
    links: [
      { name: "Web Development", href: "#" },
      { name: "Mobile Apps", href: "#" },
      { name: "Cloud Solutions", href: "#" },
      { name: "DevOps", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "#" },
      { name: "Team", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Documentation", href: "#" },
      { name: "Contact", href: "#" },
      { name: "Case Studies", href: "#" },
      { name: "Privacy", href: "#" },
    ],
  },
];

const defaultSocialLinks = [
  { icon: <Twitter />, href: "#", label: "Twitter" },
  { icon: <Linkedin />, href: "#", label: "LinkedIn" },
  { icon: <Github />, href: "#", label: "GitHub" },
  { icon: <Mail />, href: "#", label: "Email" },
];

const defaultLegalLinks = [
  { name: "Terms and Conditions", href: "#" },
  { name: "Privacy Policy", href: "#" },
];

const FooterSection = ({
  logo = {
    url: "https://www.linkinnovations.com",
    src: "https://example.com/path/to/link-innovations-logo.svg",
    alt: "Link Innovations logo",
    title: "Link Innovations",
  },
  sections = defaultSections,
  description = "Link Innovations delivers cutting-edge IT solutions, from web development to cloud services.",
  socialLinks = defaultSocialLinks,
  copyright = "© 2025 Link Innovations. All rights reserved.",
  legalLinks = defaultLegalLinks,
}: Footer7Props) => {
  return (
    <footer className="relative w-full bg-black text-white overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-1/2 w-[60rem] h-[60rem] -translate-x-1/2 -translate-y-1/3 rounded-full bg-gradient-to-tr from-indigo-800 via-purple-700 to-pink-700 opacity-20 blur-3xl animate-blob -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[50rem] h-[50rem] rounded-full bg-gradient-to-tr from-cyan-700 via-blue-700 to-indigo-700 opacity-20 blur-3xl animate-blob animation-delay-2000 -z-10"></div>

      {/* Content wrapper */}
      <section className="w-full bg-black text-white">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start px-6 lg:px-12 py-10">
          {/* Logo + Description */}
          <div className="mb-8 lg:mb-0 max-w-md">
            <div className="flex items-center gap-2">
              <Code className="w-6 h-6 text-white" />
              <h2 className="text-xl font-semibold">Link Innovations</h2>
            </div>
            <p className="text-white/80 mt-2">{description}</p>

            {/* Social icons */}
            <ul className="flex gap-4 mt-4">
              {socialLinks.map((s, idx) => (
                <li key={idx} className="hover:text-primary">
                  <a href={s.href} aria-label={s.label}>
                    {React.isValidElement(s.icon)
                      ? React.cloneElement(
                          s.icon as React.ReactElement<
                            React.SVGProps<SVGSVGElement>
                          >,
                          {
                            className: "w-5 h-5 text-white",
                          }
                        )
                      : s.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sections */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-20">
            {sections.map((section, idx) => (
              <div key={idx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="space-y-3 text-sm">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx} className="hover:text-primary">
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-white/20 pt-4 px-6 lg:px-12 flex flex-col lg:flex-row justify-between text-xs text-white/70 gap-4">
          <p>{copyright}</p>
          <ul className="flex gap-4 flex-wrap">
            {legalLinks.map((link, idx) => (
              <li key={idx} className="hover:text-primary">
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </footer>
  );
};

export { FooterSection };
