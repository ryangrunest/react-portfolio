import Link from "next/link";

const MyHeader = () => (
  <header>
    <div className="header-left">
      <Link href="/">
        <a>Ryan Grunest</a>
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
        padding-bottom: 1rem;
        padding: 20px;
      }
      .header-left a {
        font-size: 1.2rem;
      }
      .header-right a {
        margin: 0 1rem;
        padding: 0 0.2rem;
        padding-bottom: 0.2rem;
        border-bottom: 1px solid black;
        transition: 0.3s all;
      }
      .header-right a:hover {
        color: rgb(120, 169, 152);
      }
      .header-right a:hover {
        border: none;
      }
    `}</style>
  </header>
);

export default MyHeader;
