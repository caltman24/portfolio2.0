import contactVaultImage from "../assets/images/projects/contactvault.png";
import simplyWeatherImage from "../assets/images/projects/simplyweather.png";
import bitImage from "../assets/images/projects/bit.png";

export default [
  {
    title: "Contact Vault",
    description:
      "Contact Vault is an all-in-one contact management system. It's similar to what's on your phone but with a little extra sauce. Add social media platforms to your contacts to have one place for contacts across multiple platforms.",
    previewImage: contactVaultImage,
    previewUrl: "https://contactvault.up.railway.app",
    githubUrl: "https://github.com/caltman24/ContactVault-Public",
    tags: ["Web App"],
    technologies: [".NET", "PostgreSQL", "AWS S3", "React", "Tailwind"],
  },
  {
    title: "Simply Weather",
    description:
      "Simply Weather uses Unsplash and weatherapi.com APIs to display real-time and forecasted weather with condition-themed backgrounds. It requests location access for local weather, proxies API calls via Netlify serverless functions, and supports offline use through a service worker.",
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
      "Contact Vault is an all-in-one contact management system. It's similar to what's on your phone but with a little extra sauce. Add social media platforms to your contacts to have one place for contacts across multiple platforms.",
    previewImage: bitImage,
    previewUrl: "https://contactvault.up.railway.app",
    githubUrl: "https://github.com/caltman24/ContactVault-Public",
    tags: ["Discord Bot"],
    technologies: ["Node.js", "Discord.js"],
  },
];
