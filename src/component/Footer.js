import React from 'react';

const year = new Date().getFullYear();

class Footer extends React.Component {
    render() {
        return (
            <footer>
            <p className='footer'>&copy; All rights resevered | murshed qatosah | {year}</p>
            </footer>
        )
    }
}

export default Footer;
