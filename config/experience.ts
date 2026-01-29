import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "nttu-niie",
    position: "Bachelor of Information Technology",
    company: "Nguyen Tat Thanh University - NIIE",
    location: "Ho Chi Minh City, Vietnam",
    startDate: new Date("2022-09-01"),
    endDate: "Present",
    description: [
      "Current 4th-Year Student specializing in Software Engineering.",
      "Focusing on Full Stack Development, IoT solutions, and AI integration.",
      "Active member of university coding projects and technical workshops.",
    ],
    achievements: [
      "Mastered core concepts of Data Structures & Algorithms and Database Management.",
      "Developed a complete University Management System as a major coursework project.",
      "Built functional prototypes for IoT Smart Home systems using ESP8266.",
      "Consistently applying AI tools to optimize coding workflows and problem-solving.",
    ],
    skills: ["React", "Java", "Javascript", "MySQL", "HTML 5"],
    companyUrl: "https://niie.edu.vn/en/", // University website
    logo: "/logo.png",
  },
];