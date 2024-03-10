import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const SocialButton = ({ iconos = [faFacebook, faLinkedinIn, faGithub] }) => (
  <div>
    {iconos.map((icon, index) => (
      <FontAwesomeIcon
        key={index}
        icon={icon}
        className="iconSocialBlock p-3 m-3 rounded-circle border border-info"
      />
    ))}
  </div>
);
 
export default SocialButton;