// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "0x",
  middleName: "",
  lastName: "Danki",
  message: " Functional and Secure Smart Contracts ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/0xDanki",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/0xdanki/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/0xdankiii/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/0xdanki.jpg"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://drive.google.com/file/d/19tlv3DWIZgH1qsFga_rHYyOLVV9_G08E/view",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/0xdanki.jpg"),
  imageSize: 375,
  message:
  "I'm Danki, and I've worn many hats as a developer, ecosystem builder, and a digital marketer. The day I discovered the wonders of blockchain technology, I went down the rabbithole and never looked back. I aim to combine theory, structure, and intuition on my mission of making web3 more accessible and secure for everyone.",
  resume: "https://drive.google.com/file/d/19tlv3DWIZgH1qsFga_rHYyOLVV9_G08E/view",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "0xDanki", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/0xdanki.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/0xdanki.jpg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Solidity", value: 90 },
    { name: "Javascript", value: 75 },
    { name: "Content Strategy", value: 85 },
    { name: "Marketing", value: 80 },
    { name: "Design", value: 75 },
    { name: "Research", value: 70 },
    { name: "UX", value: 90 },
    { name: "Cryptography", value: 60 },
  ],
  softSkills: [
    { name: "Curious", value: 80 },
    { name: "Independent", value: 90 },
    { name: "Adaptable", value: 75 },
    { name: "Detail-Oriented", value: 85 },
    { name: "Creative", value: 75 },
    { name: "Organized", value: 70 },
    { name: "Strategic", value: 95 },
    { name: "Empathic", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently open for collaborations! If you have a web3 project, know of any devrel or developer marketing positions available, or if you just want to say hi, please feel free to email me at",
  email: "typepuller@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };