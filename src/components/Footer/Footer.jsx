import React from "react";
import "./Footer.css";
import { IconButton } from '@mui/material';
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";


function Footer()
{
    return (
        <div className="footer">
            <div>
                <div className="socialMedia">
                    <IconButton href="https://www.instagram.com/eztattzink/" target="_blank">
                        <InstagramIcon/>
                    </IconButton>
                    <IconButton href="mailto:eztattzink@gmail.com">
                        <EmailIcon />
                    </IconButton>
                </div>
                <p className="copy">&copy; 2023 eztattzink</p>
            </div>
        </div>
    );
}

export default Footer;