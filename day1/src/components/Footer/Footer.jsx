import { FiGithub, FiInstagram, FiTwitter, FiYoutube } from 'react-icons/fi';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" id="site-footer">
      <div className="footer__container">
        {/* Social Links */}
        <div className="footer__social">
          <a href="#" className="footer__social-link" aria-label="Instagram"><FiInstagram /></a>
          <a href="#" className="footer__social-link" aria-label="Twitter"><FiTwitter /></a>
          <a href="#" className="footer__social-link" aria-label="YouTube"><FiYoutube /></a>
          <a href="#" className="footer__social-link" aria-label="GitHub"><FiGithub /></a>
        </div>

        {/* Links Grid */}
        <div className="footer__links">
          <div className="footer__col">
            <a href="#" className="footer__link">Audio Description</a>
            <a href="#" className="footer__link">Investor Relations</a>
            <a href="#" className="footer__link">Legal Notices</a>
          </div>
          <div className="footer__col">
            <a href="#" className="footer__link">Help Center</a>
            <a href="#" className="footer__link">Jobs</a>
            <a href="#" className="footer__link">Cookie Preferences</a>
          </div>
          <div className="footer__col">
            <a href="#" className="footer__link">Gift Cards</a>
            <a href="#" className="footer__link">Terms of Use</a>
            <a href="#" className="footer__link">Corporate Information</a>
          </div>
          <div className="footer__col">
            <a href="#" className="footer__link">Media Center</a>
            <a href="#" className="footer__link">Privacy</a>
            <a href="#" className="footer__link">Contact Us</a>
          </div>
        </div>

        {/* Service Code */}
        <button className="footer__service-btn">Service Code</button>

        {/* Copyright */}
        <p className="footer__copy">© 2024 Cineverse. All rights reserved. A Netflix clone project.</p>
      </div>
    </footer>
  );
}
