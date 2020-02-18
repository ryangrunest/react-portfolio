import Link from "next/link";
export default function Footer() {
  return (
    <footer className="Footer">
      <div className="footer-content-container">
        <ul className="contact-list">
          <li className="back-to-top">
            <Link href="/">
              <a>Back To Top</a>
            </Link>
          </li>
          <li>
            <a href="tel:503-830-0199">
              <i className="fas fa-mobile-alt"></i>
            </a>
          </li>
          <li>
            <a href="mailto:ryangrunest45@gmail.com">
              <i className="far fa-envelope"></i>
            </a>
          </li>
          <li>
            <Link href="www.linkedin.com/in/ryangrunest">
              <a>
                <i className="fab fa-linkedin"></i>
              </a>
            </Link>
          </li>
        </ul>
        <h3>&copy; 2020 Ryan Grunest</h3>
      </div>
    </footer>
  );
}
