import React from "react";
import { Paper } from "@material-ui/core";

const Footer = () => {
    var currentYear = new Date().getFullYear(); 

    return (
        <>
            <Paper elevation={3} className='vertical-spacing-1'>
                <footer className="flex-center" style={{padding:'.5em'}}>
                    <small>Copyright &#169; {currentYear} by Tanas. All rights reserved</small>
                </footer>
            </Paper>
        </>
    );
};

export default Footer;