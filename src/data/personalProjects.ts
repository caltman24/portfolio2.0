import contactVaultImage from "../assets/images/projects/contactvault.png";
import simplyWeatherImage from "../assets/images/projects/simplyweather.png";
import bitImage from "../assets/images/projects/bit.png";
import zapImage from "../assets/images/projects/zap.png";

export default [
  {
    title: "Zap",
    description:
      "Zap is a full-stack ticketing and project management app with role-based access control, project-scoped data, ticket workflows, file attachments, and integration-tested backend authorization.",
    previewImage: zapImage,
    previewUrl: "https://zap-app.netlify.app",
    githubUrl: "https://github.com/caltman24/Zap",
    note: "Work in progress. Some features are still being built or refined.",
    tags: ["Web App", "Authorization", "Testing", "AWS", "Roles"],
    technologies: [
      ".NET",
      "Remix",
      "React",
      "TypeScript",
      "PostgreSQL",
      "EF Core",
      "AWS S3",
      "CI/CD",
      "Docker",
    ],
  },
  {
    title: "Contact Vault",
    description:
      "Contact Vault is a contact management app that brings phone contacts and social profiles into one place, making it easier to keep track of people across multiple platforms.",
    previewImage: contactVaultImage,
    previewUrl: "https://contactvault.up.railway.app",
    githubUrl: "https://github.com/caltman24/ContactVault-Public",
    note: "First load may take a few seconds due to server cold start.",
    tags: ["Web App"],
    technologies: [".NET", "PostgreSQL", "AWS S3", "React", "Tailwind"],
  },
  {
    title: "Simply Weather",
    description:
      "Simply Weather uses the Unsplash and WeatherAPI services to deliver current conditions and forecasts with dynamic, weather-matched backgrounds. It supports location-based weather, serverless API proxying through Netlify, and offline access through a service worker.",
    previewImage: simplyWeatherImage,
    previewUrl: "https://ca-simply-weather.netlify.app",
    githubUrl: "https://github.com/caltman24/simply-weather",
    tags: ["Web App"],
    technologies: [
      "React",
      "Typescript",
      "SASS CSS",
      "Vite",
      "Netlify",
      "Unsplash API",
      "Weather API",
    ],
  },
  {
    title: "B.I.T - Discord Bot",
    description:
      "BIT is a multipurpose Discord bot built to make community servers more interactive, with utility features and lightweight social commands that add personality without getting in the way.",
    previewImage: bitImage,
    previewUrl: "https://discord.gg/dqVEtNn6eX",
    githubUrl: "https://github.com/caltman24/BIT",
    tags: ["Discord Bot"],
    technologies: ["Node.js", "Discord.js"],
  },
];
