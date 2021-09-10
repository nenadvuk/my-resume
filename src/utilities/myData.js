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
  aboutMe:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum architecto sit sapiente porro obcaecati excepturi nam fugiat, maiores quis esse quae eveniet inventore quia quos deserunt ab? Voluptatibus, excepturi vel!Dolorum fugit ratione obcaecati ab deleniti amet \n deserunt asperiores atque autem ad eligendi beatae distinctio, laborum quam eaque libero facilis perferendis explicabo accusantium excepturi itaque? Eos eligendi consectetur nihil eaque.',

  experiences: [
    {
      title: 'Work1',
      date: '2018-present',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum architecto sit sapiente ',
    },
    {
      title: 'Work2',
      date: '2014-2018',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum architecto sit sapiente ',
    },
    {
      title: 'Work3',
      date: '2010-2014',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum architecto sit sapiente ',
    },
  ],
  education: [
    {
      title: 'Education1',
      date: '2018-present',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum architecto sit sapiente ',
    },
    {
      title: 'Education2',
      date: '2014-2018',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum architecto sit sapiente ',
    },
    {
      title: 'Education3',
      date: '2010-2014',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum architecto sit sapiente ',
    },
  ],
};

export default myData;
