import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://media.licdn.com/dms/image/v2/C4E03AQFl6sKSTeKrlQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1637852733772?e=1759363200&v=beta&t=_18vN_FuASS6uj5Iy9zdBTOKNDStrQ16qQMHOOrf9yQ" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/hugorod19" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/hugorod19/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Hugo Rodriguez</h1>
          <p>Full Stack Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/hugorod19" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/hugorod19/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;