import Link from "next/Link";

const Header = () => (
  <header>
    <div className="header-left">
      <Link href="/">
        <a>Ryan</a>
      </Link>
    </div>
    <div className="header-right">
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <Link href="/shop">
        <a>Shop</a>
      </Link>
    </div>

    <style jsx>{`
      header {
        display: flex;
        justify-content: space-between;
      }
      .header-right a {
        margin: 0 1rem;
        padding: 0 0.2rem;
        padding-bottom: 0.2rem;
        border-bottom: 1px solid black;
      }
      .header-right a:hover {
        border: none;
      }
    `}</style>
  </header>
);

export default Header;
