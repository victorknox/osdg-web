import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {

    return (

        <footer className='footer py-5'>
            <div className="d-flex flex-sm-row flex-column justify-content-center align-items-center">
                <div className='col-4 col-md-3 my-3 order-2 order-sm-1'>
                    <img src="Images/BrandLogo.png" width='100px' alt="OSDG" className='img-fluid mb-3' />
                    <p className='footer-text m-0'>&copy; 2021</p>
                    <p className='footer-text m-0'>Open Source Development Group</p>
                    <p className='footer-text m-0'>International Institute of Information</p>
                    <p className='footer-text m-0'>Technology, Hyderabad</p>
                </div>
                <div className='d-flex flex-column justify-content-center order-1 order-sm-2 col-3 col-md-3 my-3'>
                    <div className="d-flex flex-row  justify-content-center">
                        <h3 className='social-link mx-2'><FontAwesomeIcon icon={faFacebook} /></h3>
                        <h3 className='social-link mx-2'><FontAwesomeIcon icon={faGithub} /></h3>
                        <h3 className='social-link mx-2'><FontAwesomeIcon icon={faLinkedin} /></h3>
                        <h3 className='social-link mx-2'><FontAwesomeIcon icon={faInstagram} /></h3>
                    </div>
                </div>
                <div className='col-2 my-3 text-end order-sm-3 d-none d-sm-block'>
                    <p className='m-0'>Reach Us</p>
                    <p className='footer-text my-1'>Detail 1</p>
                    <p className='footer-text my-1'>Detail 2</p>
                    <p className='footer-text my-1'>Email</p>
                    <p className='footer-text my-1'>Phone?</p>
                </div>
            </div>
        </footer >

    );

}

export default Footer;