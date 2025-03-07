import {
  InstaIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "@/assets/images/footer/footer.vector";

export const navbarNavigation = [
  {
    name: "Ongoing Startupathon",
    path: "/",
    value: "ongoing",
  },
  {
    name: "Ongoing Startupathon",
    path: "/",
    value: "ongoing",
  },
  {
    name: "Completed Startupathon",
    path: "/",
    value: "completed",
  },
  {
    name: "Startupathon Guide",
    path: "/",
    value: "guide",
  },
  {
    name: "How To Win",
    path: "/",
    value: "win",
  },
  {
    name: "Mentor Network",
    path: "/",
    value: "mentor",
  },
];

export const footerNavigation = [
  {
    name: "Quick links",
    value: "quick",
    children: [
      {
        name: "Home",
        value: "home",
        path: "/",
      },
      {
        name: "Investor Application",
        value: "investor",
        path: "/",
      },
      {
        name: "Job Application",
        value: "job",
        path: "/",
      },
      {
        name: "Apply To Startup Accelerator",
        value: "startup",
        path: "/",
      },
      {
        name: "Career Accelerator Program",
        value: "career",
        path: "/",
      },
      {
        name: "Our team",
        value: "team",
        path: "/",
      },
    ],
  },
  {
    name: "Legal",
    value: "legal",
    children: [
      {
        name: "Terms of service",
        value: "terms",
        path: "/",
      },
      {
        name: "Privacy policy",
        value: "privacy",
        path: "/",
      },
      {
        name: "Decentralized Intelligence Agency",
        value: "decentralized",
        path: "/",
      },
    ],
  },
];

export const socialLinks = [
  {
    value: "instagram",
    icon: InstaIcon,
    path: "/",
  },
  {
    value: "linkedin",
    icon: LinkedinIcon,
    path: "/",
  },
  {
    value: "youtube",
    icon: YoutubeIcon,
    path: "/",
  },
];
