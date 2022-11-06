import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faGooglePlusG, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';


function Footer() {
    return(
        <Row className="footer">
            <Col lg={3}>
                <h6>FROM OUR BLOG</h6>
                <p class="blog-item"><a href="#">How to choose the right equipment for you?</a></p>
                <p class="blog-item"><a href="#">How to contact an equipment owner?</a></p>
                <p class="blog-item"><a href="#">What's new in tech?</a></p>
                <p class="blog-item"><a href="#">Service based equipment</a></p>
            </Col>
            <Col lg={3}>
                <h6>CONNECT WITH US</h6>
                <ul class="connect-list">
                    <li><a href="#"><FontAwesomeIcon icon={faEnvelope} />Email</a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faTwitter} />Twitter</a></li>
                    <li><a href="#"><FontAwesomeIcon icon={ faFacebookF } />Facebook</a></li>
                    <li><a href="#"><FontAwesomeIcon icon={ faGooglePlusG } />Google Plus</a></li>
                    <li><a href="#"><FontAwesomeIcon icon={ faYoutube } />Youtube</a></li>
                </ul>
            </Col>
            <Col lg={3}>
                <h6>HELP AND SUPPORT</h6>
                <ul class="support-list">
                    <li><a href="#">Help</a></li>
                    <li><a href="#">Knowledge Base</a></li>
                    <li><a href="#">Contact Support</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul>
            </Col>
            <Col lg={3}>
                <h6>ABOUT SCIENUP</h6>
                <p>ec mollis lorem consequat. Fusce ipsum ex, imperdiet eu leo quis, ullamcorper egestas nisl. Nulla rutrum est et tortor vulputate semper.</p>
                <h4>office:</h4>
                <ul>
                    <li>Salah Salem St.,</li>
                    <li>Cairo</li>
                    <li>Egypt - 12345</li>
                    <li>Ph. +6212345678</li>
                    <li>Email. someone@someone.com</li>
                </ul>
            </Col>
        </Row>
    )
}

export default Footer;