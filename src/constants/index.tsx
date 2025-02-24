import Arrow from "/public/assets/navbar/Arrow.svg";
import {
  NavLinks,
  LearnLinks,
  CommunityLinks,
  ZEELinks,
  Products,
} from "@/types";

export const navLinks: NavLinks[] = [
  {
    label: "Products",
    icon: Arrow,
  },
  {
    label: "Community",
    icon: Arrow,
  },
  {
    label: "Resources",
    icon: Arrow,
  },
];

export const Learn: LearnLinks[] = [
  {
    title: "Vision",
    link: "",
  },
  {
    title: "FAQs",
    link: "",
  },
  {
    title: " Docs",
    link: "",
  },
  {
    title: "Blog",
    link: "",
  },
];

export const ZEE: ZEELinks[] = [
  {
    title: "About",
    link: "",
  },
  {
    title: "ZEE staking",
    link: "",
  },
  {
    title: " Governance",
    link: "",
  },
];

export const Community: CommunityLinks[] = [
  {
    title: "Telegram",
    link: "",
    icon: "",
  },
  {
    title: "Twitter",
    link: "",
    icon: "",
  },
  {
    title: "LinkedIn",
    link: "",
    icon: "",
  },
  {
    title: "Community Forum",
    link: "",
    icon: "",
  },
];

export const Product: Products[] = [
  {
    label: "Products",
    title: "Products",
    description: "Explore our suite of products",
    href: "#",
    icon: "/assets/navbar/icon.svg",
    dropdownItems: [
      {
        title: "Exchange",
        description:
          "Bridge assets across chains with zero fee and gasless transactions",
        icon: "/assets/icons/exchange.svg",
        href: "/exchange",
      },
      {
        title: "Staking",
        description: "Stake to earn rewards and participate in ZeeDAO",
        icon: "/assets/icons/staking.svg",
        href: "/staking",
      },
      {
        title: "Bridge",
        description: "Bi-Directional bridge between ZEE tokens on multi-chain",
        icon: "/assets/icons/bridge.svg",
        href: "/bridge",
      },
      {
        title: "ZeeDo",
        description: "Simple and Fair Dex Token Offering",
        icon: "/assets/icons/zeedo.svg",
        href: "/zeedo",
      },
      {
        title: "Predictions",
        description: "Predict future without losing money",
        icon: "/assets/icons/predictions.svg",
        href: "/predictions",
      },
      {
        title: "Test Drive",
        description: "Try out our incentivized testnets",
        icon: "/assets/icons/test-drive.svg",
        href: "/test-drive",
      },
    ],
  },
  // Add other nav items as needed
];

export const CommunitySocial = [
  // ... other nav items ...
  {
    label: "Community",
    icon: "/assets/navbar/arrow-down.svg",
    dropdownItems: [
      {
        title: "Discord",
        description: "Join our community chat",
        icon: "/assets/navbar/discord.svg",
        href: "/discord",
      },
      {
        title: "Twitter",
        description: "Follow us for updates",
        icon: "/assets/navbar/twitter.svg",
        href: "/twitter",
      },
      {
        title: "Blog",
        description: "Read our latest news",
        icon: "/assets/navbar/blog.svg",
        href: "/blog",
      },
      {
        title: "Forum",
        description: "Discuss with the community",
        icon: "/assets/navbar/forum.svg",
        href: "/forum",
      },
    ],
  },
  // ... other nav items ...
];
