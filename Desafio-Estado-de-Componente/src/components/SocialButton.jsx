import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// Mapeo de nombres de íconos a los objetos de íconos correspondientes
const iconMap = {
    facebook: faFacebook,
    github: faGithub,
    linkedin: faLinkedin,
};

function SocialButton({ icono }) {
    const icon = iconMap[icono] ? iconMap[icono] : null;

    return (
        <div className='circulo'>
            {icon && <FontAwesomeIcon icon={icon} size="2x" color="black" />}
        </div>
    );
}

export default SocialButton