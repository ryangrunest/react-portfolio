import Link from "next/Link";

const Header = () => (
  <header>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/blog">
      <a>Blog</a>
    </Link>
    <Link href="/shop">
      <a>Shop</a>
    </Link>

    <style jsx>{`
      header {
        display: flex;
        justify-content: space-between;
      }
    `}</style>
  </header>
);

export default Header;
