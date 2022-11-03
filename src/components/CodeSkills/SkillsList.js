import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiSass,
  SiReact,
  SiRedux,
  SiWordpress,
  SiPhp,
  SiGit,
  SiTypescript,
} from "react-icons/si";

export const skills = [
  { name: "HTML", percent: "80%", icon: <SiHtml5 /> },
  { name: "CSS", percent: "80%", icon: <SiCss3 /> },
  { name: "Sass", percent: "50%", icon: <SiSass /> },
  { name: "BOOTSTRAP", percent: "70%", icon: <SiBootstrap /> },
  {
    name: "JAVASCRIPT",
    percent: "70%",
    icon: <SiJavascript />,
    additionals: ["Rest Api", "AJAX"],
  },
  {
    name: "REACT",
    percent: "65%",
    icon: <SiReact />,
    additionals: ["React Router", "Framer Motion", "Redux"],
  },
  {
    name: "REDUX",
    percent: "80%",
    icon: <SiRedux />,
    additionals: ["Redux Toolkit"],
  },
  { name: "TYPESCRIPT", percent: "20%", icon: <SiTypescript /> },
  { name: "WORDPRESS", percent: "30%", icon: <SiWordpress /> },
  { name: "PHP", percent: "20%", icon: <SiPhp /> },
  { name: "GIT", percent: "60%", icon: <SiGit /> },
];
