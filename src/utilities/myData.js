import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

const myData = {
  name: "Nenad ",
  lastname: "Vukašinović",
  title: "Front-end developer",
  phone: "0652114981",
  email: "nenadvuk.rs@gmail.com",

  socials: {
    Github: {
      link: "https://github.com/nenadvuk",
      text: "Go to GitHub",
      icon: <GitHubIcon />,
      title: "Github"
    },
    LinkedIn: {
      link: "https://www.linkedin.com/in/nenad-vukasinovic-3569871a2/",
      text: "Go to LinkedIn",
      icon: <LinkedInIcon />,
      title: "LinkedIn"
    },
    Facebook: {
      link: "https://www.facebook.com/nenad.vukasinovic",
      text: "Go to Facebook",
      icon: <FacebookIcon />,
      title: "Facebook"
    },
    Instagram: {
      link: "https://www.instagram.com/nenad_vuk/",
      text: "Go to Instagram",
      icon: <InstagramIcon />,
      title: "Instagram"
    }
  },
  aboutMe:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum architecto sit sapiente porro obcaecati excepturi nam fugiat, maiores quis esse quae eveniet inventore quia quos deserunt ab? Voluptatibus, excepturi vel!Dolorum fugit ratione obcaecati ab deleniti amet \n deserunt asperiores atque autem ad eligendi beatae distinctio, laborum quam eaque libero facilis perferendis explicabo accusantium excepturi itaque? Eos eligendi consectetur nihil eaque.",

  experiences: [
    {
      title: "Software-Nation",
      date: "May - Jul 2019",
      description: "Internship (Vue.js, Bootstrap)"
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
      description:
        "Junior front-end developer (JavaScript, HTML, CSS, BootStrap, GITHUB)"
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
        ["MS OFFICE", "90"],
        ["PHOTOSHOP", "60"],
        ["ADOBE XD", "55"],
        ["AUTOCAD", "45"],
        ["COREL", "75"]
      ]
    },
    {
      title: "Languages",
      description: [
        ["ENGLISH", "85"],
        ["FRENCH", "30"]
      ]
    }
  ],
  projects: [
    {
      image: "/card-images/World.png",
      title: "Countries Quiz",
      caption: "Test your geography knowledge",
      description:
        "How good is your geography general knowledge? Let's find out",
      link: "https://nenadvuk.github.io/countries-quiz/"
    },
    {
      image: "/card-images/Lucky-Six.png",
      title: "Lucky Six Game",
      caption: "Feeling lucky? Do You have your lucky numbers? ",
      description:
        "Lucky 6 is a popular dynamic and exciting live-game where 35 numbers are drawn at random from the 48 lottery balls in the lottery machine",
      link: "https://nenadvuk.github.io/lucky-six-game/"
    },
    {
      image: "/card-images/Programming.png",
      title: "Škola Programiranja",
      caption: "Programming School website, Ruby-N",
      description:
        "One of my first projects, which I did for the final exam at Code Academy",
      link: "https://nenadvuk.github.io/skola-programiranja-ruby-n/"
    },
    {
      image: "/card-images/Lottery.png",
      title: "Lottery Game",
      caption: "One of the most popular games of chance",
      description:
        "You have a 1 in 15,380,937 chance of winning the lottery. Feeling lucky? Let's find out",
      link: "https://nenadvuk.github.io/lottery-game/"
    },
    {
      image: "/card-images/WebSite.png",
      title: "VUE Website",
      caption: "Application developed by Vue.js",
      description: "Application developed by Vue.js",
      link: "https://nenadvuk.github.io/#/"
    },
    {
      image: "/card-images/Restaurantella.png",
      title: "Restaurant site",
      caption: "Nice restaurant site developed by React.js",
      description:
        "Come dine with us and experience an authentic meals and cocktails in an intimate dining space. We look forward to serving you!",
      link: "https://restaurantella.netlify.app/"
    }
  ],
  hobbies: [
    {
      image: "/hobbies-images/running-man.jpg",
      title: "Athletics-running",
      delay: "250ms"
    },
    {
      image: "/hobbies-images/photographer.jpg",
      title: "Photography",
      margin: "100px",
      delay: "500ms"
    },
    {
      image: "/hobbies-images/chessboard.jpg",
      title: "Chess",
      margin: "200px",
      delay: "750ms"
    },
    {
      image: "/hobbies-images/shooting.jpg",
      title: "Sports shooting",
      margin: "300px",
      delay: "1000ms"
    }
  ]
};

export default myData;
