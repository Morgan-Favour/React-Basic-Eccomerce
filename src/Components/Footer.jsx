import React from 'react'
import companyLogo from "../assets/images/company-logo.png"
// import "../css/footer.css"
// import "../css/global.css";
// import "../css/responsive.css";
function Footer() {
    return (
        <div className='footer-container'>
            <p className='developed-by-text'>Developed by <span>MORGAN FAVOUR</span></p>
            <div className='logo-year'>
                <img src={companyLogo} alt="" />
                <p>2025</p>
            </div>
            <div>
                <a className='See Code' href="https://github.com/Morgan-Favour/React-Basic-Eccomerce.git">View Github</a>
            </div>
        </div>
    )
}

export default Footer