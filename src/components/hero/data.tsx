import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

export const title = {
  plainText: "",
  glowText: "nextMotion",
  subTitle: "A sleek UI for my unforgettable portfolio",
  highlight: ["unforgettable"],
};

export const profileCard = {
  title: "Kenneth Owusu",
  subTitle: "Fullstack Software Developer",
  body: `Passionate about building scalable, user-friendly web applications. Always exploring new technologies and best practices to improve development processes. And I like cats.`,
  socialUrls: [
    {
      url: "https://www.linkedin.com/in/okenneth/",
      icon: <FaLinkedinIn size={20} />,
    },
    {
      url: "https://github.com/Owusu1946",
      icon: <IoLogoGithub size={20} />,
    },
  ],
  tooltip: {
    imagePath: "https://avatars.githubusercontent.com/u/59415541?s=400&u=e0b8d9b9cd02f00cd798beb2a7ca7411c9745351&v=4",
    title: "Hey...",
    subTitle: "That's me!",
  },
};
