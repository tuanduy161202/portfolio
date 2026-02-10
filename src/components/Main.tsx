import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SchoolIcon from '@mui/icons-material/School';
import avatarImg from '../assets/images/avatar.jpg';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={avatarImg} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/tuanduy161202" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/thgtuanduy/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://scholar.google.com/citations?user=jNKPxEQAAAAJ" target="_blank" rel="noreferrer"><SchoolIcon/></a>
          </div>
          <h1>Tuan-Duy Thang</h1>
          <p>AI Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/yujisatojr" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/yujisato/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://scholar.google.com/citations?user=jNKPxEQAAAAJ" target="_blank" rel="noreferrer"><SchoolIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;