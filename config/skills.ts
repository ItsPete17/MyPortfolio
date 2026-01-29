import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "React",
    description:
      "Craft interactive user interfaces using components, state, props, and virtual DOM.",
    rating: 4,
    icon: Icons.react,
  },
  {
    name: "Next.js",
    description:
      "Effortlessly build dynamic apps with routing, layouts, and API routes.",
    rating: 4,
    icon: Icons.nextjs,
  },
  {
    name: "Javascript",
    description:
      "Create interactive and dynamic web experiences with the versatile scripting language.",
    rating: 5,
    icon: Icons.javascript,
  },
  {
    name: "Java",
    description:
      "Strong foundation in Object-Oriented Programming and Android App Development.",
    rating: 4,
    icon: Icons.java || Icons.javascript, // Fallback if Java icon missing
  },
  {
    name: "HTML 5",
    description:
      "Structure web content beautifully with the latest version of HyperText Markup Language.",
    rating: 5,
    icon: Icons.html5,
  },
  {
    name: "CSS 3",
    description:
      "Style web pages creatively with the latest iteration of Cascading Style Sheets.",
    rating: 4,
    icon: Icons.css3,
  },
  {
    name: "Node.js",
    description:
      "Run JavaScript on the server side, enabling dynamic and responsive applications.",
    rating: 3,
    icon: Icons.nodejs,
  },
  {
    name: "MySQL",
    description:
      "Manage and organize relational databases efficiently for data-driven applications.",
    rating: 4,
    icon: Icons.mysql,
  },
  {
    name: "Tailwind CSS",
    description:
      "Design beautiful, modern websites faster with a utility-first CSS framework.",
    rating: 3,
    icon: Icons.tailwindcss,
  },
  {
    name: "Python",
    description: "Used for AI/ML scripts, backend logic, and data processing.",
    rating: 4,
    icon: Icons.html5 || Icons.javascript, // Fallback if missing
  },
  {
    name: "C# / .NET ",
    description: "Solid understanding of OOP principles and systems programming.",
    rating: 5,
    icon: Icons.css3 || Icons.javascript, // Fallback if missing
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);