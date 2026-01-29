import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: string; 
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "tour-ecommerce",
    companyName: "Tourism E-commerce Platform",
    type: "Personal",
    category: ["Full Stack", "Web Dev"],
    shortDescription:
      "A full-stack travel booking website built with ASP.NET Core, featuring tour search, cart management, and PayPal integration.",
    githubLink: "https://github.com/YourUsername/tour-project",
    techStack: [
      "Javascript",
      "HTML 5",
      "CSS 3",
      "MySQL",
      "Bootstrap",
    ],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-05-01"),
    companyLogoImg: "/campus.png", // Corrected to .png based on your screenshot
    pagesInfoArr: [
      {
        title: "Booking & Payment",
        description: "User-friendly booking flow with integrated payment gateways.",
        imgArr: ["/tourinfo.jpg"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Developed a comprehensive E-commerce platform for booking travel tours, aiming to digitize the tourism experience.",
        "The system allows users to search for tours, manage a shopping cart, and securely process payments using integrated gateways like PayPal and domestic cards.",
        "Created an Admin Dashboard for managing tour listings, tracking order statuses (Pending/Confirmed), and viewing revenue reports.",
      ],
      bullets: [
        "Built using ASP.NET Core MVC architecture for robust backend performance.",
        "Integrated PayPal API to handle secure online transactions.",
        "Implemented an AI-based recommendation system to suggest tours based on user behavior.",
        "Designed a responsive UI to support booking from both desktop and mobile devices.",
      ],
    },
  },
  {
    id: "smart-garden",
    companyName: "IoT Smart Garden",
    type: "Personal",
    category: ["Backend", "Web Dev"],
    shortDescription:
      "Automated irrigation system using ESP8266 & ThingSpeak to monitor soil moisture and control watering remotely.",
    techStack: ["Node.js", "Javascript", "Socket.io"], 
    startDate: new Date("2023-08-01"),
    endDate: new Date("2023-12-01"),
    companyLogoImg: "/ioticon.jpg", // Corrected to .jpg based on your screenshot
    pagesInfoArr: [
      {
        title: "IoT Dashboard",
        description: "Real-time monitoring of soil moisture and pump status.",
        imgArr: ["/iot.jpg"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Designed an IoT-based Smart Garden system that automates watering based on real-time soil moisture data.",
        "The system utilizes an ESP8266 Wi-Fi module to communicate with the ThingSpeak cloud, allowing for remote monitoring and control via a mobile dashboard.",
        "Implemented 'Sunlight Mode' logic to ensure watering only occurs during appropriate daylight hours.",
      ],
      bullets: [
        "Programmed ESP8266 controller to read analog sensors and trigger relay modules.",
        "Integrated ThingSpeak API for data logging and remote command execution.",
        "Implemented fail-safe logic (Emergency Stop) to prevent pump overheating or flooding.",
        "Created a local web server on the chip for direct control without internet access.",
      ],
    },
  },
  {
    id: "android-quiz",
    companyName: "Android Quiz App",
    type: "Personal",
    category: ["Mobile Dev", "Frontend"],
    shortDescription:
      "A native Android mobile application for taking quizzes, featuring user management and random question generation.",
    githubLink: "#",
    techStack: ["Java", "Android Studio" as any], 
    startDate: new Date("2023-01-01"),
    endDate: new Date("2023-05-01"),
    companyLogoImg: "/quizicon3.png",
    pagesInfoArr: [
      {
        title: "Quiz Interface",
        description: "Interactive mobile UI for taking tests.",
        imgArr: ["/quiz.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Developed a native Android application using Java and Android Studio to facilitate interactive learning through quizzes.",
        "The app features a robust user management system, separating Students and Teachers with different permission levels.",
        "Implemented a 'Random Exam' feature that generates unique tests from a question bank to prevent cheating and ensure variety.",
      ],
      bullets: [
        "Built UI/UX using Android XML layouts for a seamless mobile experience.",
        "Implemented logic for scoring, timers, and randomized question shuffling.",
        "Added 'Create Question' functionality for administrators to dynamically update the question bank.",
      ],
    },
  },
];

// 👇 THIS IS THE LINE THAT WAS MISSING!
export const featuredProjects = Projects.slice(0, 3);