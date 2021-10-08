import { Typography } from '@material-ui/core';
import React from 'react';
import myImage from '../../assets/images/profile_img.jpg';
import CustomTimeline, {
  CustomTimelineSeparator,
} from '../../components/Timeline/CustomTimeline';
import './Profile.css';
import TimelineItem from '@material-ui/lab/TimelineItem';
import myData from '../../utilities/myData';
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlined';
import { TimelineContent } from '@material-ui/lab';
import CustomButton from '../Button/CustomButton';
import GetAppIcon from '@material-ui/icons/GetApp';
import PDF_CV from '../../assets/Files/CV_NENAD_VUKASINOVIC_ENG.pdf';

const CustomTimelineItem = ({ title, text, link }) => {
  return (
    <TimelineItem>
      <CustomTimelineSeparator />
      <TimelineContent className="timeline_content">
        {/* Ako imamo link, ispisuje se naslov(key), a value ce biti link
       koji se nece videti, u protivnom, ispisace se value */}
        {link ? (
          <Typography className="timelineItem_text">
            <span>{title}</span>{' '}
            <a href={link} target="_blank" rel="noreferrer">
              {text}
            </a>
          </Typography>
        ) : (
          <Typography className="timelineItem_text">
            <span>{title}:</span> {text}
          </Typography>
        )}
      </TimelineContent>
    </TimelineItem>
  );
};

const Profile = () => {
  return (
    <div className="profile container_shadow ">
      <div className="profile_name">
        <Typography className="name">
          <span className="orange">{myData.name} </span>
          {myData.lastname}
        </Typography>
        <Typography className="title">{myData.title}</Typography>
      </div>
      <figure className="profile_img">
        <img src={myImage} alt="" />
      </figure>
      <div className="profile_info">
        <CustomTimeline icon={<PersonOutlinedIcon />}>
          <CustomTimelineItem title="Name" text={myData.name+myData.lastname}  />
          <CustomTimelineItem title="Title" text={myData.title} />
          <CustomTimelineItem title="Phone" text={myData.phone} />
          <CustomTimelineItem title="Email" text={myData.email} />

          {Object.keys(myData.socials).map((item) => (
            <CustomTimelineItem
              title={`${item}:`}
              text={myData.socials[item].text}
              link={myData.socials[item].link}
              key={item}
            />
          ))}
        </CustomTimeline>
        <div className="btn-container">
          <a href={PDF_CV} download="CV_Nenad_Vukasinovic" target="">
            <CustomButton text="Download CV" icon={<GetAppIcon />} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
