import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

const myData = {
  name: "Nenad ",
  lastname: "Vukasinovic",
  title: "Front-end developer",
  phone: "0641962775",
  email: "nenadvukasinovic.rs@gmail.com",

  socials: {
    Github: {
      link: "https://github.com/nenadvuk",
      text: "Go to GitHub",
      icon: <GitHubIcon />
    },
    LinkedIn: {
      link: "https://www.linkedin.com/in/nenad-vukasinovic-3569871a2/",
      text: "Go to LinkedIn",
      icon: <LinkedInIcon />
    },
    Facebook: {
      link: "https://www.facebook.com/nenad.vukasinovic",
      text: "Go to Facebook",
      icon: <FacebookIcon />
    },
    Instagram: {
      link: "https://www.instagram.com/nenad_vuk/",
      text: "Go to Instagram",
      icon: <InstagramIcon />
    }
  },
  aboutMe:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum architecto sit sapiente porro obcaecati excepturi nam fugiat, maiores quis esse quae eveniet inventore quia quos deserunt ab? Voluptatibus, excepturi vel!Dolorum fugit ratione obcaecati ab deleniti amet \n deserunt asperiores atque autem ad eligendi beatae distinctio, laborum quam eaque libero facilis perferendis explicabo accusantium excepturi itaque? Eos eligendi consectetur nihil eaque.",

  experiences: [
    {
      title: "Software-Nation",
      date: "Maj - jul 2019",
      description: "Practice (Vue.js, Bootstrap)"
    },
    {
      title: "Generali Osiguranje Srbija",
      date: "2014 – 2018",
      description:
        "Consultant in the sale of life and non-life insurance policies"
    },
    {
      title: "Tempo",
      date: "2008 – 2011",
      description: "Coordinator at the technical department"
    },
    {
      title: "Euroluxpetrol",
      date: "2006 – 2008",
      description: "Head of the shift at the fuel station"
    }
  ],
  educations: [
    {
      title: "Code by Comtrade",
      date: "2018-2019",
      description: "Junior front-end developer (JavaScript, HTML, CSS, GITHUB)"
    },
    {
      title: "Visoka poslovna škola strukovnih studija Belgrade",
      date: "2016-2019",
      description: "Bachelor’s degree in Economics VI (180 ESPB)"
    },
    {
      title: "Tehnička škola Trstenik",
      date: "1995-1999",
      description: "Electrical technician of automatics"
    }
  ],

  skills: [
    {
      title: "Programming skills",
      description: [
        ["HTML", "90"],
        ["CSS", "80"],
        ["SASS", "75"],
        ["BOOTSTRAP", "90"],
        ["JAVASCRIPT", "75"],
        ["JQUERY", "65"],
        ["TYPESCRIPT", "68"],
        ["VUE.JS", "55"],
        ["REACT.JS", "70"]
      ]
    },
    {
      title: "Computer skills",
      description: [
        ["MS OFFICE","90"],
        ["PHOTOSHOP","60"],
        ["ADOBE XD","55"],
        ["AUTOCAD","45"],
        ["COREL","75"]
      ]
    },
    {
      title: "Languages",
      description: [["ENGLISH","85"], ["FRENCH","30"]]
    }
  ]
};

export default myData;
