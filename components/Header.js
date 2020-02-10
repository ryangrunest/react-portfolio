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
        padding: 0 1rem;
      }
    `}</style>
  </header>
);

export default Header;
