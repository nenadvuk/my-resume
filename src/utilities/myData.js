import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const myData = {
  name: 'Nenad Vukasinovic',
  title: 'Front-end developer',
  phone: '0641962775',
  email: 'nenadvukasinovic.rs@gmail.com',

  socials: {
    Github: {
      link: 'https://github.com/nenadvuk',
      text: 'Go to GitHub',
      icon: <GitHubIcon />,
    },
    LinkedIn: {
      link: 'https://www.linkedin.com/in/nenad-vukasinovic-3569871a2/',
      text: 'Go to LinkedIn',
      icon: <LinkedInIcon />,
    },
    Facebook: {
      link: 'https://www.facebook.com/nenad.vukasinovic',
      text: 'Go to Facebook',
      icon: <FacebookIcon />,
    },
    Instagram: {
      link: 'https://www.instagram.com/nenad_vuk/',
      text: 'Go to Instagram',
      icon: <InstagramIcon />,
    },
  },
};

export default myData;
