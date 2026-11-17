import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <a href="#home" className="footer-logo">
          core<span>.feliz</span>
        </a>

        <p>Designed and developed by me.</p>

        <p className="footer-copyright">
          © {new Date().getFullYear()} core.feliz. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
