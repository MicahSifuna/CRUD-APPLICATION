import  {Facebook, Instagram, Twitter, LinkedIn, Pinterest} from "@mui/icons-material";
import React from 'react';

import "./footer.css";

const Footer = () => {
  return (
    <div>
       <div className="footer">

            <h3>You can also find Me on Social Media</h3>
            <div className='icons' >
                  <Twitter  className='icon'/>
                  <Instagram className='icon' />
                  <Facebook className='icon' />
                  <LinkedIn className='icon' />
                  <Pinterest className='icon' />
              </div>

            <div>
                <h4>This Website was designed by Micah Kutoto</h4>
            </div>
            <p className="para">Copyright &copy; 2023 All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer;