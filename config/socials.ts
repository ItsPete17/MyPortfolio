import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@KhomphakdyAnousone",
    icon: Icons.gitHub,
    link: "https://github.com/KhomphakdyAnousone",
  },
  {
    name: "LinkedIn",
    username: "Khomphakdy Anousone",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/KhomphakdyAnousone",
  },
  {
    name: "Twitter",
    username: "@KhomphakdyAnousone",
    icon: Icons.twitter,
    link: "https://twitter.com/KhomphakdyAnousone",
  },
  {
    name: "Gmail",
    username: "naman.barkiya02",
    icon: Icons.gmail,
    link: "mailto:naman.barkiya02@gmail.com",
  },
];
