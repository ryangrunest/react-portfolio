import Link from "next/link";
import { faMobileAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import icons from "../icons.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className="Footer">
      <div className="footer-content-container">
        <ul className="contact-list">
          <li className="back-to-top">
            <Link href="/">
              <a>Go Home</a>
            </Link>
          </li>
          <div className="icon-container">
            <a href="tel:503-830-0199">
              <FontAwesomeIcon icon={faMobileAlt} />
            </a>
            <a href="mailto:ryangrunest45@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <Link href="https://linkedin.com/in/ryangrunest">
              <a>{icons.linkedin}</a>
            </Link>
            <Link href="https://github.com/ryangrunest">
              <a>{icons.github}</a>
            </Link>
          </div>
        </ul>
        <h3>&copy; 2021 Ryan Grunest</h3>
      </div>
    </footer>
  );
}
