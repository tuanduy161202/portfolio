import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SchoolIcon from '@mui/icons-material/School';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/tuanduy161202" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/thgtuanduy/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="https://scholar.google.com/citations?user=jNKPxEQAAAAJ" target="_blank" rel="noreferrer"><SchoolIcon/></a>
      </div>
      <p>© 2026 Tuan-Duy Thang</p>
      
      <p>Developed by <a href="https://tuanduythang.github.io" target="_blank" rel="noreferrer"><b>Tuan-Duy Thang</b></a> using <a href="https://github.com/yujisatojr/react-portfolio-template" target="_blank" rel="noreferrer"><b>react-portfolio-template</b></a></p>
    </footer>
  );
}

export default Footer;