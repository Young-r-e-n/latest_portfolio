import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://media.licdn.com/dms/image/v2/D4D03AQFyrTmfNX4FRQ/profile-displayphoto-shrink_800_800/B4DZWRvBpZHYAg-/0/1741906779526?e=1780531200&v=beta&t=6BDoDg1g8_7HSaMgXN4nHJg5WHObgvdUgfRC5MAVAJU" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Young-r-e-n" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/youngrenowola/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Gad Owola</h1>
          <p>Full Stack Engineer | Cybersecurity Analyst</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Young-r-e-n" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/youngrenowola/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;