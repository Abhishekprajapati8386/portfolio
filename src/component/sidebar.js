import { SocialIcon } from 'react-social-icons'
const Sidebar = () => {
    return (
      <div className="sidebar">
        <ul className="sidebar-links">
          <li>
            <a href="https://github.com/Abhishekprajapati8386?tab=repositories" target="_blank" rel="noopener noreferrer">
              <SocialIcon url="https://github.com" bgColor="#000" fgColor="#F9E79F" as="div" />
            </a>
          </li>
          <li>
            <a href="https://in.linkedin.com/in/abhishek-prajapati-7b2798224" target="_blank" rel="noopener noreferrer">
              <SocialIcon url="https://linkedin.com" bgColor="#000" fgColor="#F9E79F" as="div" />
            </a>
          </li>
        </ul>
      </div>
    );
  };
  
  export default Sidebar;